const credits = () => {
  return (
    <div className="leading-4 text-sm">
      <div className="flex flex-col">
        <span>Por Fernando Lopez y Victoria Drisaldi.</span>
        <span>Espacio de experimentación cerámica en horno </span>
        <span>A leña / Anagama / Noborigama.</span>
      </div>
      <div className="flex flex-col pl-6 lg:pl-14 py-4">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @espacioceramica
        </a>
        <span>Gaiman, Chubut, Patagonia Argentina.</span>
      </div>
    </div>
  );
};

export default credits;
