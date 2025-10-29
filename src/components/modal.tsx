const modal = ({ file, setFile }: { file: string; setFile: any }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#f6f6f7] p-8 lg:p-14 pb-8 z-10 cursor-pointer"
      onClick={() => setFile("")}
    >
      <img src={file} className="h-full w-full object-contain object-center" />

      <button className="absolute top-12 right-2 hover:opacity-70 cursor-pointer">
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
