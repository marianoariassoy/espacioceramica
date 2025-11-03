"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Loader from "@/components/loading";

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

interface author {
  id: number;
  title: string;
}

interface category {
  id: number;
  title: string;
}

const page = () => {
  const locale = useLocale();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [authors, setAuthors] = useState<author[]>([]);
  const [loadingAuthors, setLoadingAuthors] = useState(true);

  const [dataFilter, setDataFilter] = useState<data[]>([]);
  const [category, setCategory] = useState(0);
  const [author, setAuthor] = useState(0);
  const [search, setSearch] = useState("");

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/products/" + locale;
  const apiURLCategories =
    process.env.NEXT_PUBLIC_API_URL + "/categories/" + locale;
  const apiURLAuthors = process.env.NEXT_PUBLIC_API_URL + "/authors";

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    async function getCategories() {
      try {
        const res = await fetch(apiURLCategories);
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingCategories(false);
      }
    }

    async function getAuthors() {
      try {
        const res = await fetch(apiURLAuthors);
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        setAuthors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingAuthors(false);
      }
    }

    document.title = "Tienda Espacio Cerámica";

    getData();
    getCategories();
    getAuthors();
  }, []);

  useEffect(() => {
    if (search) {
      setDataFilter(
        data.filter(
          (item: data) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.size.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    if (category) {
      setDataFilter(data.filter((item: data) => item.category === category));
    }
    if (author) {
      setDataFilter(data.filter((item: data) => item.author === author));
    }
  }, [search]);

  useEffect(() => {
    if (category === 0 && author === 0) {
      setDataFilter(data);
    }
    if (category) {
      setDataFilter(data.filter((item: data) => item.category === category));
    }
    if (author) {
      setDataFilter(data.filter((item: data) => item.author === author));
    }
  }, [data, category, author]);

  if (loading) return <Loader />;

  return (
    <section className="relative">
      <div className="w-full sticky top-12 flex flex-col mb-40 bg-[#f6f6f7] py-2 z-10">
        <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap">
          <Item
            title={locale === "es" ? "Ver Todo" : "All"}
            active={category === 0 ? true : false}
            action={() => setCategory(0)}
          />
          {loadingCategories
            ? null
            : categories.map((item: category) => {
                return (
                  <Item
                    key={item.id}
                    title={item.title}
                    active={category === item.id ? true : false}
                    action={() => setCategory(item.id)}
                  />
                );
              })}
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap my-2 lg:my-0">
          {loadingAuthors
            ? null
            : authors.map((item: author) => {
                return (
                  <Item
                    key={item.id}
                    title={item.title}
                    active={author === item.id ? true : false}
                    action={() => setAuthor(item.id)}
                  />
                );
              })}
        </div>
        <div className="flex gap-x-2 text-sm font-[--lastik-regular]">
          <div>
            (
            <input
              type="text"
              value={search}
              className="border-b border-black lg:w-64 px-2 focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            )
          </div>
          <button className="cursor-pointer hover:text-white hover:bg-black">
            {locale === "es" ? "BUSCAR" : "SEARCH"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
        {dataFilter.map((item: data) => (
          <Card key={item.id} data={item} lan={locale} />
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default page;
