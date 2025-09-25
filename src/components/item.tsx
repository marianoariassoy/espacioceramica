const item = ({
  title,
  action,
  active,
}: {
  title: string;
  action: () => void;
  active: boolean;
}) => {
  return (
    <div className="flex items-center gap-x-3 text-sm font-[--lastik-regular]">
      <button
        className="flex items-center gap-x-1 cursor-pointer hover:[&>div]:bg-black"
        onClick={action}
      >
        <span>(</span>
        <div
          className={`h-[0.35rem] w-[0.35rem] rounded-full  ${
            active ? "bg-black" : "bg-transparent"
          }`}
        ></div>
        <span>)</span>
      </button>
      <span className="uppercase">{title}</span>
    </div>
  );
};

export default item;
