import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Appointments from "./components/pages/Appoinements";
import Sidebar from "./components/UI/Sidebar";
import Records from "./components/pages/Records";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Prescription from "./components/pages/Prescription";
import Billing from "./components/pages/Billing";
import HealthLineChart from "./components/charts/HealthLineChart";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

function App() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome, ${user.firstName}!`);
    }
  }, [user]);

  return (
    <div className="flex text-stone-50">
      <Sidebar />
      <main className="ml-64 w-full p-8  min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/records"
            element={
              <ProtectedRoute>
                <Records />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prescriptions"
            element={
              <ProtectedRoute>
                <Prescription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <ProtectedRoute>
                <Billing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <HealthLineChart />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
    </div>
  );
}

export default App;
