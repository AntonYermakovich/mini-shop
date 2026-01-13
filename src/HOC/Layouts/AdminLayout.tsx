import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
