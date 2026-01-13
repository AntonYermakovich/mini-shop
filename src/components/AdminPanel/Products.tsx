import {
  useGetAllProductsQuery,
  useGetOneProductQuery,
} from "../../store/products/products";
import { formatPrice } from "../../utils";
import AddProduct from "../Modals/AddProduct";
import { useState } from "react";
import ViewProduct from "../Modals/ViewProduct";
import EditProductModel from "../Modals/EditProductModel";
import DeleteProductModal from "../Modals/DeleteProductModal";
import ReactPaginate from "react-paginate";

const Products = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const [isAddProduct, setIsAddProduct] = useState<boolean>(false);
  const [isViewProduct, setIsViewProduct] = useState<boolean>(false);
  const [isEditProduct, setIsEditProduct] = useState<boolean>(false);
  const [isDeleteProduct, setIsDeleteProduct] = useState<boolean>(false);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(9);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((products?.length ?? 0) / itemsPerPage);

  const [selectedProductEditId, setIsEditProductEditId] = useState<
    number | null
  >(null);

  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const [selectedProductDeleteId, setSelectedProductDeleteId] = useState<
    number | null
  >(null);

  const { data: selectedProduct } = useGetOneProductQuery(selectedProductId!, {
    skip: !selectedProductId,
  });

  const { data: selectedProductEdit } = useGetOneProductQuery(
    selectedProductEditId!,
    {
      skip: !selectedProductEditId,
    }
  );

  const { data: selectedProductDelete } = useGetOneProductQuery(
    selectedProductDeleteId!,
    {
      skip: !selectedProductDeleteId,
    }
  );

  const editProductHandler = (productId: number) => {
    setIsEditProductEditId(productId);
    setIsEditProduct(true);
  };

  const viewProductHandler = (productId: number) => {
    setSelectedProductId(productId);
    setIsViewProduct(true);
  };

  const deleteProductHandler = (productId: number) => {
    setSelectedProductDeleteId(productId);
    setIsDeleteProduct(true);
  };

  const handlePageClick = (e: { selected: number }) => {
    if (!products) return;
    const newOffset = (e.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Товары ({products?.length})</h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
            onClick={() => setIsAddProduct(!isAddProduct)}
          >
            + Добавить товар
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-6 grid lg:grid-cols-5 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="border rounded px-3 py-2"
          />
          <select className="border rounded px-3 py-2">
            <option>Все категории</option>
            <option>Смартфоны</option>
            <option>Ноутбуки</option>
            <option>Аксессуары</option>
          </select>
          <select className="border rounded px-3 py-2">
            <option>Все статусы</option>
            <option>Активен</option>
            <option>Скрыт</option>
          </select>
          <select className="border rounded px-3 py-2">
            <option>Сортировка</option>
            <option>По цене</option>
            <option>По остатку</option>
            <option>По дате</option>
          </select>
          <button className="border rounded px-3 py-2 hover:bg-gray-100">
            Сбросить
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">Товар</th>
                <th className="p-4 text-left">Категория</th>
                <th className="p-4 text-left">Цена</th>
                <th className="p-4 text-left">Остаток</th>
                <th className="p-4 text-left">Статус</th>
                <th className="p-4 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((product, index) => {
                return (
                  <tr key={product.id} className="border-t">
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        className="rounded h-8 w-8 object-contain"
                        alt={product.title}
                      />
                      <div>
                        <p className="font-medium">{product.title}</p>
                        <p className="text-xs text-gray-500">
                          ID: {product.id}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">{product.category.name}</td>
                    <td className="p-4">{formatPrice(product.price)}</td>
                    <td className="p-4">{index === 2 ? 0 : 24}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          index === 2
                            ? "bg-gray-200 text-gray-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {index === 2 ? "Скрыт" : "Активен"}
                      </span>
                    </td>
                    <td className="p-4 space-x-3">
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => viewProductHandler(product.id)}
                      >
                        Открыть
                      </button>
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => editProductHandler(product.id)}
                      >
                        Редактировать
                      </button>
                      <button
                        className="text-red-600 hover:underline cursor-pointer"
                        onClick={() => deleteProductHandler(product.id)}
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

      {isAddProduct && (
        <AddProduct closeModal={() => setIsAddProduct(!isAddProduct)} />
      )}

      {isViewProduct && selectedProduct && (
        <ViewProduct
          product={selectedProduct}
          closeModal={() => {
            setIsViewProduct(false);
            setSelectedProductId(null);
          }}
        />
      )}

      {isEditProduct && selectedProductEdit && (
        <EditProductModel
          product={selectedProductEdit}
          closeModal={() => {
            setIsEditProduct(false);
            setIsEditProductEditId(null);
          }}
        />
      )}

      {isDeleteProduct && selectedProductDelete && (
        <DeleteProductModal
          product={selectedProductDelete}
          closeModal={() => {
            setIsDeleteProduct(false);
            setSelectedProductDeleteId(null);
          }}
        />
      )}
    </>
  );
};

export default Products;
