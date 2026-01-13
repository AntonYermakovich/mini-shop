import { useDeleteCategoryMutation } from "../../store/category/category";
import type { ICategory } from "../../interfaces";

interface DeleteCategoryModalProps {
  category: ICategory;
  productsCount: number;
  closeModal: () => void;
}

const DeleteCategoryModal = ({
  category,
  productsCount,
  closeModal,
}: DeleteCategoryModalProps) => {
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

  const handleDelete = async () => {
    try {
      await deleteCategory(category.id).unwrap();
      closeModal();
    } catch (error) {
      console.error("Ошибка при удалении категории:", error);
    }
  };

  return (
    <div
      id="deleteCategoryModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div onClick={closeModal} className="bg-black/50 absolute inset-0"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative z-10"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-red-600">
            Удалить категорию?
          </h2>
          <p className="text-sm text-gray-600">Это действие нельзя отменить</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Название категории:</p>
            <p className="font-medium text-lg">{category.name}</p>
          </div>

          {productsCount > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-yellow-800">
                    Внимание!
                  </p>
                  <p className="text-sm text-yellow-700 mt-1">
                    В этой категории находится {productsCount}{" "}
                    {productsCount === 1
                      ? "товар"
                      : productsCount < 5
                      ? "товара"
                      : "товаров"}
                    . При удалении категории товары останутся, но их категория
                    будет удалена.
                  </p>
                </div>
              </div>
            </div>
          )}

          {productsCount === 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-700">
                В этой категории нет товаров. Удаление безопасно.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer transition-colors"
            onClick={closeModal}
            disabled={isLoading}
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Удаление..." : "Удалить категорию"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
