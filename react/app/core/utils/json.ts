

import { promises as fs } from "fs"


export default class JsonUtil {
  path: string;
  constructor(filename: string) {
    this.path = `${process.cwd()}/${filename}.json`;
  }


  get = async <T,>() => {
    const file = await fs.readFile(this.path, "utf8");

    const result = JSON.parse(file.toString()) as T[];
    return result;
  }

  insert = async <T,>(greeting: T) => {
    const greetings = await this.get();
    greetings.push({
      ...greeting,
      id: new Date().getTime(),
      createdAt: new Date(),
    })
    await fs.writeFile(this.path, JSON.stringify(greetings, null, 2))
  }


}