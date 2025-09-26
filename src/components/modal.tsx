const modal = ({ file, setFile }: { file: string; setFile: any }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white/30 p-8 lg:p-12 z-50 cursor-pointer"
      onClick={() => setFile("")}
    >
      <img src={file} className="h-full w-full object-contain object-center" />

      <button className="absolute top-4 right-4 hover:text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default modal;
