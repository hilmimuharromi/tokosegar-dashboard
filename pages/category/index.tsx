import type { NextPage } from "next";
import { useGetCategories } from "../../lib/utils/useRequest";
const CategoryPage: NextPage = () => {
  const { categories, error } = useGetCategories("/category");
  if (error || !categories) {
    return <h2>error ....</h2>;
  }
  return (
    <div>
      <h2>Category Page</h2>
      <p>
        {JSON.stringify(categories)}
      </p>
    </div>
  );
};

export default CategoryPage;
