import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { formatPrice } from "../../utils";
import Heading from "../../components/Heading/Heading";
import ConfrimedOrder from "../../components/Order/ConfrimedOrder";

interface IOrderData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  deliveryAddres: string;
  deliveryType: string;
  methodPayment: string;
  comment?: string;
}

const Order = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart.items);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const [delivery] = useState<number>(0);
  const [deliveryType, setDeliveryType] = useState<string>("courier");
  const defaultAddres = "г. Москва, ул. Примерная, д. 10";
  const [formData, setFormData] = useState<IOrderData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    deliveryAddres: "",
    deliveryType,
    methodPayment: "Банковская карта",
    comment: "",
  });

  const deliveryTypeHandler = (deliveryTypes: string) => {
    setDeliveryType(deliveryTypes);
    setFormData({
      ...formData,
      deliveryAddres: deliveryTypes === "pickup" ? defaultAddres : "",
      deliveryType: deliveryTypes,
    });
  };

  console.log(formData);

  return (
    <>
      {!isReady && (
        <>
          <Heading>Оформление заказа</Heading>

          <section className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">Контактные данные</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Имя"
                    className="border rounded px-4 py-2"
                    name="firstname"
                    value={formData.firstname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    className="border rounded px-4 py-2"
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded px-4 py-2"
                    name="email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="border rounded px-4 py-2"
                    name="phone"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">Доставка</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 border rounded p-3 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryAddres"
                      defaultChecked
                      onChange={() => deliveryTypeHandler("courier")}
                    />{" "}
                    Курьером (бесплатно)
                  </label>
                  <label className="flex items-center gap-3 border rounded p-3 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryAddres"
                      onChange={() => deliveryTypeHandler("pickup")}
                    />{" "}
                    Самовывоз
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Адрес доставки"
                  name="deliveryAddres"
                  className="border rounded px-4 py-2 w-full mt-4"
                  value={deliveryType === "pickup" ? defaultAddres : formData.deliveryAddres}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  disabled={deliveryType === "pickup"}
                />
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">Оплата</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 border rounded p-3 cursor-pointer">
                    <input
                      type="radio"
                      name="methodPayment"
                      value="Банковская карта"
                      defaultChecked
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />{" "}
                    Банковская карта
                  </label>
                  <label className="flex items-center gap-3 border rounded p-3 cursor-pointer">
                    <input
                      type="radio"
                      name="methodPayment"
                      value="Наличные при получении"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />{" "}
                    Наличные при получении
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">Комментарий к заказу</h2>
                <textarea
                  rows={4}
                  placeholder="Ваш комментарий"
                  className="border rounded px-4 py-2 w-full"
                  name="comment"
                  value={formData.comment}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></textarea>
              </div>
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
                <span>Итого</span>
                <span>{formatPrice(totalPrice + delivery)}</span>
              </div>

              <button
                disabled={!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.methodPayment || !formData.deliveryAddres}
                onClick={() => setIsReady(true)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Подтвердить заказ
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с условиями пользовательского
                соглашения
              </p>
            </aside>
          </section>
        </>
      )}

      {isReady && <ConfrimedOrder />}
    </>
  );
};

export default Order;
