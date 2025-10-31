import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? (
    <div className="w-full h-full bg-black/10 animate-pulse"></div>
  ) : (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center transition-all hover:opacity-90"
    />
  );
};

export default ImageComponent;
