import { useState } from "react";
import { useCreateCategoryMutation } from "../../store/category/category";

interface AddCategoryProps {
  closeModal: () => void;
}

const AddCategory = ({ closeModal }: AddCategoryProps) => {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

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
      const payload: { name: string; image?: string } = {
        name: formData.name.trim(),
      };
      if (formData.image.trim()) {
        payload.image = formData.image.trim();
      }
      await createCategory(payload).unwrap();
      closeModal();
      setFormData({ name: "", image: "" });
    } catch (error) {
      console.error("Ошибка при создании категории:", error);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <div
      id="addCategoryModal"
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
        <h2 className="text-2xl font-bold mb-6">Добавить категорию</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">
              Название категории *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Например: Смартфоны"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">
              Изображение (URL)
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-xs text-gray-500 mt-1">
              Если не указано, будет использовано изображение по умолчанию
            </p>
          </div>

          {formData.image && (
            <div>
              <label className="block text-sm mb-1 font-medium">
                Предпросмотр изображения
              </label>
              <div className="border rounded overflow-hidden">
                <img
                  src={formData.image}
                  alt={formData.name || "Предпросмотр"}
                  className="w-full h-48 object-contain bg-gray-50"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-48 flex items-center justify-center text-gray-400 bg-gray-50">Не удалось загрузить изображение</div>';
                    }
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-1 font-medium">
              Slug (автоматически)
            </label>
            <input
              type="text"
              value={formData.name ? generateSlug(formData.name) : ""}
              className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-600"
              disabled
              readOnly
            />
            <p className="text-xs text-gray-500 mt-1">
              Slug будет сгенерирован автоматически на основе названия
            </p>
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
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={isLoading || !formData.name.trim()}
            >
              {isLoading ? "Создание..." : "Создать категорию"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
