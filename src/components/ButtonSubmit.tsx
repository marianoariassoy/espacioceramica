const button = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <button
      className="font-[--lastik-regular] cursor-pointer underline uppercase font-base hover:opacity-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default button;
