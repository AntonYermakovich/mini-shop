import { Link, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../store/products/products";
import { formatPrice } from "../../utils";
import { useEffect, useState } from "react";

const Products = () => {
  const { productId } = useParams();
  const { data: product } = useGetOneProductQuery(Number(productId) ?? "");
  const [imgSelected, setImgSelected] = useState<string>("");

  useEffect(() => {
    setImgSelected(product ? product.images[0] : "");
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <!-- Breadcrumbs --> */}
      <nav className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link to="/" className="hover:text-indigo-600">
          Главная
        </Link>{" "}
        /{" "}
        <Link to="/catalog" className="hover:text-indigo-600">
          Каталог
        </Link>{" "}
        / <span className="text-gray-700">{product?.title}</span>
      </nav>

      {/* <!-- Product --> */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* <!-- Images --> */}
        <div>
          <img
            src={imgSelected}
            className="rounded-xl shadow mb-4 w-full h-90 object-contain bg-white p-4"
            alt={product?.title}
          />
          <div className="flex gap-3">
            {product?.images.length! > 1 &&
              product?.images.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="rounded border cursor-pointer object-contain w-20"
                  alt={product?.title}
                  onClick={() => setImgSelected(img)}
                />
              ))}
          </div>
        </div>

        {/* <!-- Info --> */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <p className="text-gray-600 mb-4">128 ГБ · OLED · 5G</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-indigo-600">
              {formatPrice(product?.price ?? 0)}
            </span>
            <span className="text-sm text-green-600">В наличии</span>
          </div>

          {/* <!-- Options --> */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Цвет</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-black border"></button>
              <button className="w-8 h-8 rounded-full bg-gray-400 border"></button>
              <button className="w-8 h-8 rounded-full bg-blue-600 border"></button>
            </div>
          </div>

          {/* <!-- Actions --> */}
          <div className="flex gap-4 mb-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Добавить в корзину
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
              ❤️ В избранное
            </button>
          </div>

          {/* <!-- Short Info --> */}
          <ul className="text-sm text-gray-600 space-y-2">
            <li>🚚 Доставка: 1–3 дня</li>
            <li>💳 Оплата при получении</li>
            <li>🔄 Возврат 14 дней</li>
          </ul>
        </div>
      </section>

      {/* <!-- Description --> */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Описание</h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {product?.description}
        </p>
      </section>

      {/* <!-- Characteristics --> */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Характеристики</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="flex justify-between border-b py-2">
              <span>Экран</span>
              <span>6.5" OLED</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Память</span>
              <span>128 ГБ</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Камера</span>
              <span>48 МП</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Батарея</span>
              <span>4500 мА·ч</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
