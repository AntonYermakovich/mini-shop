import { useState, useEffect } from "react";
import { useGetAllCategoriesQuery } from "../../store/category/category";
import { useCreateProductMutation } from "../../store/products/products";

interface AddProductProps {
  closeModal: () => void;
}

const AddProduct = ({ closeModal }: AddProductProps) => {
  const { data: categories } = useGetAllCategoriesQuery();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    categoryId: 1,
    images: [""],
  });

  useEffect(() => {
    if (categories && categories.length > 0) {
      const firstCategoryId = categories[0].id;
      setFormData((prev) => ({
        ...prev,
        categoryId: prev.categoryId || firstCategoryId,
      }));
    }
  }, [categories]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "categoryId" ? Number(value) : value,
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const removeImageField = (index: number) => {
    if (formData.images.length > 1) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        images: newImages,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct({
        title: formData.title.trim(),
        price: formData.price,
        description: formData.description.trim(),
        categoryId: formData.categoryId,
        images: formData.images.filter((img) => img.trim() !== ""),
      }).unwrap();
      closeModal();
      setFormData({
        title: "",
        price: 0,
        description: "",
        categoryId: categories?.[0]?.id || 1,
        images: [""],
      });
    } catch (error) {
      console.error("Ошибка при создании товара:", error);
    }
  };

  return (
    <div
      id="addProductModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={closeModal}
        className="bg-black/50 absolute inset-0"
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Добавить товар</h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium">
                Название товара *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Смартфон X"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">
                Категория *
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                {categories?.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">Цена *</label>
              <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="29990"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">
                Описание *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Описание товара"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium">
                Изображения (URL) *
              </label>
              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/image.jpg"
                    required={index === 0}
                  />
                  {formData.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addImageField}
                className="mt-2 px-3 py-2 text-sm border rounded hover:bg-gray-100"
              >
                + Добавить изображение
              </button>
            </div>
            {formData.images[0] && (
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Предпросмотр
                </label>
                <div className="border rounded overflow-hidden">
                  <img
                    src={formData.images[0]}
                    alt="Предпросмотр"
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
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-4 pt-4 border-t">
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
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать товар"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
