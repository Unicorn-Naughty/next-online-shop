import { MainBlogBlock } from "./components/shared/top-components/main-blog-block";
import { ProductsMainPage } from "./components/shared/top-components/products-main-page";
import { SliderMainPage } from "./components/shared/top-components/slider-main-page";

export default function Home() {
  return (
    <div className="h-[3000px]">
      <SliderMainPage className="mb-[70px]" />
      <MainBlogBlock />
      <ProductsMainPage />
    </div>
  );
}
