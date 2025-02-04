import Image from "next/image";

export interface ImageViewProps {
  image?: string;
  onClick?: () => void;
  className?: string;
}

export default function ImageFull({
  image,
  onClick,
  className,
}: ImageViewProps) {
  if (!image) return;
  return (
    <button onClick={onClick}>
      <Image
        alt="Message Image"
        src={image}
        className={`shrink-0 rounded-lg animate-fade-in ${className}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </button>
  );
}
