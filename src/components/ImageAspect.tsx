const ImageAspect = ({ alt, file }: { alt: string; file: string }) => {
  return (
    <img
      src={file}
      className="object-cover object-center aspect-[5/7]"
      alt={alt}
    />
  );
};

export default ImageAspect;
