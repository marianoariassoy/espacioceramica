import Link from "next/link";

const card = () => {
  return (
    <article className="flex flex-col gap-y-2">
      <div className="aspect-[5/7] overflow-hidden">
        <Link href={"/tienda/tetera-kyusu"}>
          <img
            src="/images/item1.jpg"
            alt="Card"
            className="h-full w-full object-cover object-center hover:opacity-90 transition-all"
          />
        </Link>
      </div>
      <div className="text-sm flex flex-col gap-y-4 leading-4">
        <h2>Tetera kyusu</h2>
        <div>
          <h2>Dimensiones</h2>
          <span className="font-[--lastik-regular]">
            &Oslash; 44 x A 177 cm <br /> &Oslash; 17”” x H 68”” <br />
          </span>
        </div>
      </div>
    </article>
  );
};

export default card;
