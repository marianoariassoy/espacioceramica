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
        <p>
          Dimensiones <br /> O 44 x A 177 cm <br /> O 17”” x H 68”” <br />
          Consultar por tamaño a medida
        </p>
      </div>
    </article>
  );
};

export default card;
