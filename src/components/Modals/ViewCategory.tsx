import type { ICategory } from "../../store/category/category.types";

interface ViewCategoryProps {
  category: ICategory;
  productsCount: number;
  closeModal: () => void;
}

const ViewCategory = ({ category, productsCount, closeModal }: ViewCategoryProps) => {
  return (
    <div
      id="viewCategoryModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className="bg-black/50 absolute inset-0"
        onClick={closeModal}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative z-10"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Категория: {category.name}</h2>

        <div className="space-y-3 text-sm">
          <p>
            <span className="font-medium">ID:</span> {category.id}
          </p>
          <p>
            <span className="font-medium">Slug:</span> {category.slug}
          </p>
          <p>
            <span className="font-medium">Количество товаров:</span> {productsCount}
          </p>
          <p>
            <span className="font-medium">Создана:</span>{" "}
            {new Date(category.creationAt).toLocaleDateString("ru-RU")}
          </p>
          <p>
            <span className="font-medium">Обновлена:</span>{" "}
            {new Date(category.updatedAt).toLocaleDateString("ru-RU")}
          </p>
        </div>

        {category.image && (
          <div className="mt-6">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-contain rounded-lg border"
            />
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={closeModal}
          >
            Закрыть
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
