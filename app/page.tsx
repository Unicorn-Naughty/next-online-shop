import { MailingBlock } from "./components/shared/top-components/mailing-block";
import { MainBlogBlock } from "./components/shared/top-components/main-blog-block";
import { ProductsMainPage } from "./components/shared/top-components/products-main-page";
import { SliderMainPage } from "./components/shared/top-components/slider-main-page";

export default function Home() {
  return (
    <div className="">
      <SliderMainPage className="mb-[70px]" />
      <MainBlogBlock className="mb-[70px]" />
      <ProductsMainPage className="mb-[50px]" />
      <MailingBlock  className="mb-[70px]"/>
    </div>
  );
}
