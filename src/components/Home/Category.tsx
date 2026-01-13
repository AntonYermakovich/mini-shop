import { useGetAllCategoriesQuery } from "../../store/category/category";

const Category = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Категории</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 animate-pulse"
            >
              <div className="mb-4 w-full h-40 bg-gray-200 rounded-lg" />
              <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Категории</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories?.slice(0, 4).map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <img
              src={category.image}
              className="mb-4 w-full h-40 object-cover"
              alt={category.name}
            />
            <h3 className="font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
