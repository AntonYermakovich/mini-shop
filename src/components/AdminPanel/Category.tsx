import { useState } from "react";
import {
  useGetAllCategoriesQuery,
  useGetOneCategoryQuery,
} from "../../store/category/category";
import { useGetAllProductsQuery } from "../../store/products/products";
import AddCategory from "../Modals/AddCategory";
import ViewCategory from "../Modals/ViewCategory";
import EditCategoryModal from "../Modals/EditCategoryModal";
import DeleteCategoryModal from "../Modals/DeleteCategoryModal";
import ReactPaginate from "react-paginate";

const Category = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: allProducts } = useGetAllProductsQuery(undefined);
  const [isAddCategory, setIsAddCategory] = useState<boolean>(false);
  const [isViewCategory, setIsViewCategory] = useState<boolean>(false);
  const [isEditCategory, setIsEditCategory] = useState<boolean>(false);
  const [isDeleteCategory, setIsDeleteCategory] = useState<boolean>(false);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(9);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = categories?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((categories?.length ?? 0) / itemsPerPage);

  const [selectedIdViewCategory, setSelectedViewCategory] = useState<
    number | null
  >(null);

  const [selectedIdEditCategory, setSelectedEditCategory] = useState<
    number | null
  >(null);

  const [selectedIdDeleteCategory, setSelectedDeleteCategory] = useState<
    number | null
  >(null);

  const { data: selectedCategoryView } = useGetOneCategoryQuery(
    selectedIdViewCategory!,
    { skip: !selectedIdViewCategory }
  );

  const { data: selectedCategoryEdit } = useGetOneCategoryQuery(
    selectedIdEditCategory!,
    { skip: !selectedIdEditCategory }
  );

  const { data: selectedCategoryDelete } = useGetOneCategoryQuery(
    selectedIdDeleteCategory!,
    { skip: !selectedIdDeleteCategory }
  );

  const getProductsCountByCategory = (categoryId: number) => {
    return (
      allProducts?.filter((product) => product.category.id === categoryId)
        .length || 0
    );
  };

  const viewCategoryHandler = (categoryId: number) => {
    setSelectedViewCategory(categoryId);
    setIsViewCategory(true);
  };

  const editCategoryHandler = (categoryId: number) => {
    setSelectedEditCategory(categoryId);
    setIsEditCategory(true);
  };

  const deleteCategoryHandler = (categoryId: number) => {
    setSelectedDeleteCategory(categoryId);
    setIsDeleteCategory(true);
  };

  const handlePageClick = (e: { selected: number }) => {
    if (!categories) return;
    const newOffset = (e.selected * itemsPerPage) % categories.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            Категории ({categories?.length})
          </h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
            onClick={() => setIsAddCategory(!isAddCategory)}
          >
            + Добавить категорию
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">Название</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Товаров</th>
                <th className="p-4 text-left">Статус</th>
                <th className="p-4 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((category, index) => {
                return (
                  <tr key={category.id} className="border-t">
                    <td className="p-4 font-medium">{category.name}</td>
                    <td className="p-4">{category.slug}</td>
                    <td className="p-4">
                      {getProductsCountByCategory(category.id)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          index === 2
                            ? "bg-gray-200 text-gray-700"
                            : "bg-green-100 text-green-700 "
                        }`}
                      >
                        {index === 2 ? "Скрыта" : "Активна"}
                      </span>
                    </td>
                    <td className="p-4 space-x-3">
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => viewCategoryHandler(category.id)}
                      >
                        Открыть
                      </button>
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => editCategoryHandler(category.id)}
                      >
                        Редактировать
                      </button>
                      <button
                        className="text-red-600 hover:underline cursor-pointer"
                        onClick={() => deleteCategoryHandler(category.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          nextLabel={false}
          previousLabel={false}
          onPageChange={handlePageClick}
          containerClassName="mt-6 flex justify-end gap-2 text-sm"
          pageLinkClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
          activeLinkClassName="bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white rounded border border-indigo-600"
        />
      </main>

      {isAddCategory && (
        <AddCategory closeModal={() => setIsAddCategory(!isAddCategory)} />
      )}

      {isViewCategory && selectedCategoryView && (
        <ViewCategory
          category={selectedCategoryView}
          productsCount={getProductsCountByCategory(selectedCategoryView.id)}
          closeModal={() => {
            setIsViewCategory(false);
            setSelectedViewCategory(null);
          }}
        />
      )}

      {isEditCategory && selectedCategoryEdit && (
        <EditCategoryModal
          category={selectedCategoryEdit}
          closeModal={() => {
            setIsEditCategory(false);
            setSelectedEditCategory(null);
          }}
        />
      )}

      {isDeleteCategory && selectedCategoryDelete && (
        <DeleteCategoryModal
          category={selectedCategoryDelete}
          productsCount={getProductsCountByCategory(selectedCategoryDelete.id)}
          closeModal={() => {
            setIsDeleteCategory(false);
            setSelectedDeleteCategory(null);
          }}
        />
      )}
    </>
  );
};

export default Category;
