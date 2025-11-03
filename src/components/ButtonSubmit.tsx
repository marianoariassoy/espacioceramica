const button = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <button
      className="bg-black text-white p-3 uppercase text-sm border hover:bg-white hover:text-black flex justify-center items-center font-[--lastik-regular] cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default button;
