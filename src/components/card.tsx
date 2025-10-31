import { Link } from "@/i18n/navigation";
import Image from "@/components/Image";

interface data {
  id: number;
  image: string;
  title: string;
  size: string;
  category: number;
  category_2: number;
  author: number;
  slug: string;
}

const card = ({ data, lan }: { data: data; lan: string }) => {
  return (
    <article className="flex flex-col gap-y-2">
      <div className="aspect-[5/7] overflow-hidden">
        <Link href={"/tienda/" + data.slug}>
          <Image src={data.image} alt={data.title} />
        </Link>
      </div>
      <div className="text-sm flex flex-col gap-y-4 leading-4">
        <h2>{data.title}</h2>
        <div>
          <h2>{lan === "es" ? "Dimensiones" : "Size"}</h2>
          <div className="font-[--lastik-regular] whitespace-break-spaces">
            {data.size}
          </div>
        </div>
      </div>
    </article>
  );
};

export default card;
