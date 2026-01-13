import { useState, useEffect } from "react";
import type { ICategory } from "../../interfaces";
import { useUpdateCategoryMutation } from "../../store/category/category";

interface EditCategoryModalProps {
  category: ICategory;
  closeModal: () => void;
}

const EditCategoryModal = ({
  category,
  closeModal,
}: EditCategoryModalProps) => {
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const [formData, setFormData] = useState({
    name: category.name || "",
    image: category.image || "",
  });

  useEffect(() => {
    setFormData({
      name: category.name || "",
      image: category.image || "",
    });
  }, [category]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateCategory({
        id: category.id,
        name: formData.name.trim(),
        image: formData.image.trim() || undefined,
      }).unwrap();
      closeModal();
    } catch (error) {
      console.error("Ошибка при обновлении категории:", error);
    }
  };

  return (
    <div
      id="editCategoryModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={closeModal}
        className="bg-black/50 absolute inset-0"
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 relative z-10"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Редактировать категорию</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Название категории</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Смартфоны"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Изображение (URL)</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {formData.image && (
            <div>
              <label className="block text-sm mb-1">Предпросмотр изображения</label>
              <img
                src={formData.image}
                alt={formData.name}
                className="w-full h-48 object-contain border rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-1">Slug (автоматически)</label>
            <input
              type="text"
              value={category.slug}
              className="w-full border rounded px-3 py-2 bg-gray-100"
              disabled
              readOnly
            />
            <p className="text-xs text-gray-500 mt-1">
              Slug генерируется автоматически на основе названия
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
              onClick={closeModal}
              disabled={isLoading}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
