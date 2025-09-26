"use client";

const ImageAspect = ({
  alt,
  file,
  setFile,
}: {
  alt: string;
  file: string;
  setFile: any;
}) => {
  return (
    <button
      className="hover:opacity-80 cursor-pointer transition-opacity"
      onClick={() => setFile(file)}
    >
      <img
        src={file}
        className="object-cover object-center aspect-[5/7]"
        alt={alt}
      />
    </button>
  );
};

export default ImageAspect;
