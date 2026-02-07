"use client";
import { useLocale } from "next-intl";
import Item from "@/components/item";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Loader from "@/components/loading";
import Filters from "@/components/Filters";

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
  const apiURLAuthors = process.env.NEXT_PUBLIC_API_URL + "/about/" + locale;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
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
        if (!res.ok) throw new Error("Error al obtener datos de autores");
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
            item.size.toLowerCase().includes(search.toLowerCase()),
        ),
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
      {loadingCategories || loadingAuthors ? null : (
        <Filters
          lan={locale}
          category={category}
          categories={categories}
          setCategory={setCategory}
          setAuthor={setAuthor}
          author={author}
          authors={authors}
          setSearch={setSearch}
          search={search}
        />
      )}

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
