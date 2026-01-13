import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Heading from "../../components/Heading/Heading";
import { formatPrice } from "../../utils";
import { useState } from "react";
import CartEmpty from "../../components/Cart/CartEmpty";
import { removeFromCart, changeQuantity } from "../../store/cart/cart.slice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const [delivery] = useState<number>(0);

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const deleteProductFromCartHandler = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const changeQuantityHandler = (productId: number, quantity: number) => {
    dispatch(changeQuantity({productId, quantity}));
  };

  if (!cart.length) {
    return <CartEmpty />;
  }

  return (
    <>
      <Heading>Корзина</Heading>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cart.map((cartItem) => {
              return (
                <div
                  key={cartItem.productId}
                  className="bg-white p-6 rounded-xl shadow flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={cartItem.image}
                      alt="Товар"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{cartItem.title}</h3>
                      <p className="text-sm text-gray-500">
                        Артикул: {cartItem.productId}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-3 py-1 border rounded cursor-pointer"
                        disabled={cartItem.quantity === 1}
                        onClick={() =>
                          changeQuantityHandler(
                            cartItem.productId,
                            cartItem.quantity - 1
                          )
                        }
                      >
                        −
                      </button>
                      <span className="w-6 text-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        className="px-3 py-1 border rounded cursor-pointer"
                        onClick={() =>
                          changeQuantityHandler(
                            cartItem.productId,
                            cartItem.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">
                      {formatPrice(cartItem.price)}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() =>
                        deleteProductFromCartHandler(cartItem.productId)
                      }
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <aside className="bg-white rounded-xl shadow p-6 h-fit sticky top-30">
            <h2 className="text-xl font-bold mb-4">Итого</h2>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span>Товары ({cart.length})</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка</span>
                <span>{formatPrice(delivery)}</span>
              </div>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-4 mb-6">
              <span>К оплате</span>
              <span>{formatPrice(totalPrice + delivery)}</span>
            </div>

            <Link
              to="/order"
              className="block text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Перейти к оформлению
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Cart;
