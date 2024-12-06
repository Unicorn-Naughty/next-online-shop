const Page = async ({
  params,
}: {
  params: {
    slug: string;
    subCategorySlug: string;
  };
}) => {
  const { slug, subCategorySlug } = await params;
  return (
    <div>
      {slug}
      {subCategorySlug}
    </div>
  );
};

export default Page;
