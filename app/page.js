import Hero from "@components/hero/hero";
import Categories from "@components/category/categories";
import Product from "@components/product/product";
import Collection from "@components/collection/collection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Product />
      <Collection />
    </main>
  );
}
