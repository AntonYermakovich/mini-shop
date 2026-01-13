import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormForget {
  email: string;
}

const Forget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormForget>();

  const forgetHandler: SubmitHandler<IFormForget> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            Mini shop
          </div>
          <p className="text-gray-500 text-sm">Восстановление пароля</p>
        </div>

        <div className="mb-6 text-sm text-gray-600 text-center">
          Введите email, который вы использовали при регистрации. Мы отправим
          ссылку для сброса пароля.
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(forgetHandler)}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("email", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                  message: "Это не email",
                },
              })}
            />
            <span className="text-xs font-medium text-red-800">
              {errors.email?.message}{" "}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition cursor-pointer"
          >
            Отправить ссылку
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/login" className="text-indigo-600 hover:underline">
            ← Вернуться ко входу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forget;
