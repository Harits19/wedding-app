# How to setup Next.js app on Nginx with letsencrypt

> Next.js, Nginx with Reverse proxy, SSL certificate

- UPDATE (07/20/2021):
  - This process got simplified over the years of this gist being out
  - Older version of this gist (without certbot): https://gist.github.com/kocisov/2a9567eb51b83dfef48efce02ef3ab06/33fdd88872a0801bdde58fccce430fa48737ae10
  - I would also now recommend deploying to [Vercel](https://vercel.com) if you don't need custom server support

## 1. Install Nginx, Node and certbot

In your server console/terminal

```bash
cd ~ # go to the current user's home directory
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh

sudo apt update
sudo apt install nginx nodejs certbot python3-certbot-nginx
```

#### Also enable Nginx in ufw

```bash
sudo ufw allow 'OpenSSH' # needed for SSH connections
sudo ufw allow 'Nginx Full' # after installing Nginx!
sudo ufw enable
```

## 2. Setup letsencrypt with certbot

- You will need to point your domain to your server's IP with DNS Record (with A record, ...)

#### Edit our default Nginx site file

```bash
sudo vim /etc/nginx/sites-available/default
```

##### Content

> You can keep everything other than server_name (domain) unchanged now

- `example.com` should be changed to the domain you are setting up the app on

```nginx
server {
  # ...

  server_name example.com www.example.com;

  # ...
}
```

#### Restart nginx

```bash
sudo nginx -t # check syntax errors
sudo systemctl restart nginx
```

#### Run `certbot` command

```bash
sudo certbot --nginx -d example.com -d www.example.com
# certbot will guide you through setting up the certificate and different options of redirecting, ...
```

## 4. Setup Reverse proxy

#### Edit our Nginx file again

```nginx
# ...

server {
  # ...

  server_name example.com www.example.com;

  # ...

  location / {
    # Reverse proxy for Next server
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;

    # we need to remove this 404 handling
    # because of Next's error handling and _next folder
    # try_files $uri $uri/ =404;
  }

  # ...
}
```

#### Restart Nginx again

```bash
sudo nginx -t # check syntax errors
sudo systemctl restart nginx
```

## 4. Setup Next.js app

```bash
# assuming you have a GitHub repository for the app
git pull https://github.com/user/repo.git
cd repo
npm install # install app dependencies (or yarn install)
npm run build # build our app for production (or yarn build)

npm install -g pm2 # install pm2 for running our app detached

# run start/stop
pm2 start npm --name "next" -- start # start next app
pm2 stop next # for stopping app
```

# We are done

> Congratulations!

Now you have the Next.js app up and running on Nginx Reverse proxy with SSL on your https://domain.