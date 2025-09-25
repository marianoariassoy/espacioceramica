import Link from "next/link";

const footer = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-end gap-x-12 gap-y-4 text-sm max-w-3xl pb-4 leading-4">
      <div className="flex flex-col">
        <Link href={"/"} className="hover:underline">
          Creditos
        </Link>
        <Link href={"/"} className="hover:underline">
          FAQs
        </Link>
        <Link href={"/"} className="hover:underline">
          Políticas de Privacidad
        </Link>
      </div>
      <div className="flex flex-col">
        <span>Encontranos en</span>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @espacioceramica
        </a>
      </div>
    </div>
  );
};

export default footer;
