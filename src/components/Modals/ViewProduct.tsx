import type { IProduct } from "../../interfaces";
import { formatPrice } from "../../utils";

interface ViewProductProps {
  product: IProduct;
  closeModal: () => void;
}

const ViewProduct = ({ product, closeModal }: ViewProductProps) => {
  return (
    <div
      id="viewProductModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={closeModal}
        className="bg-black/50 absolute inset-0"
      ></div>
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative z-10"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Просмотр товара</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.images[0] || "https://via.placeholder.com/400"}
              className="rounded-lg w-full h-80 object-contain"
              alt={product.title}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">ID: {product.id}</p>

            <p className="text-lg font-bold">{formatPrice(product.price)}</p>

            <p className="text-sm text-gray-600">
              {product.description || "Описание отсутствует"}
            </p>

            <div className="text-sm grid gap-1">
              <p>
                <span className="font-medium">Категория:</span> {product.category.name}
              </p>
              <p>
                <span className="font-medium">Создан:</span>{" "}
                {new Date(product.creationAt).toLocaleDateString("ru-RU")}
              </p>
              <p>
                <span className="font-medium">Обновлён:</span>{" "}
                {new Date(product.updatedAt).toLocaleDateString("ru-RU")}
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={closeModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
