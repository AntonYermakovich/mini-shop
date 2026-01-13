import { Routes, Route, Navigate } from "react-router-dom";
import Delivery from "./pages/Delivery/Delivery";
import Payment from "./pages/Payment/Payment";
import Return from "./pages/Return/Return";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Policy from "./pages/Policy/Policy";
import Agreement from "./pages/Agreement/Agreement";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Forget from "./pages/Auth/Forget";
import Catalog from "./pages/Catalog/Catalog";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Order/Order";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import AdminLayout from "./HOC/Layouts/AdminLayout";
import MainLayout from "./HOC/Layouts/MainLayout";
import AuthAdmin from "./pages/Auth/AuthAdmin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forget" element={<Forget />} />

        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />

        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="/policy" element={<Policy />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminPanel />} />
        <Route path="auth" element={<AuthAdmin />} />
        <Route index path="*" element={<Navigate to="auth" />} />
      </Route>
    </Routes>
  );
};
