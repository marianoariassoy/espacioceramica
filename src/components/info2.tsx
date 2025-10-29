const info = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-x-4 mb-2 pb-10 text-sm leading-4">
      <div className="w-1/3">{title}</div>
      <div className="w-2/3 font-[--lastik-regular] whitespace-break-spaces">
        {description}
      </div>
    </div>
  );
};

export default info;
