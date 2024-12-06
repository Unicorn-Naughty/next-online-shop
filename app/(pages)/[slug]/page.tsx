import { BreadcrumbsCatalog } from "@/app/components/shared/middle-components/breadcrumbs-catalog";
import { Container } from "@/app/components/shared/middle-components/container";
import { CategoriesList } from "@/app/components/shared/top-components/categories-list";
import { api } from "@/app/services/api-client";

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  try {
    const { slug } = await params;
    const subCategoryItem = await api.category.fetchCategory(slug);
    // TypeError: Cannot read properties of null (reading 'categoryItem')

    if (subCategoryItem) {
      const len = subCategoryItem.categoryItem
        .map((item) => item.products?.length)
        .reduce((acc, i) => {
          if (acc !== undefined && i !== undefined) {
            return acc + i;
          }
        }, 0);
      return (
        <Container className="mt-[50px] mb-[150px]">
          <div className="flex items-center mb-[25px] px-[80px] ">
            <BreadcrumbsCatalog className="" />
            <h1 className="ml-auto text-[45px] font-semibold">
              {subCategoryItem.name}
            </h1>
          </div>
          <CategoriesList len={len!} subCategoryItem={subCategoryItem} />
        </Container>
      );
    }
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
};

export default Page;
