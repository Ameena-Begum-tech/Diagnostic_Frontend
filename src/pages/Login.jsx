// Language: JavaScript (React Login Page)

import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(user.role === "doctor" ? "/doctor" : "/patient");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      login(res.data.user, res.data.token);

      if (res.data.user.role === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/patient");
      }
    } catch (err) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Diagnostic Portal Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full p-2 border rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded
                       hover:bg-blue-700 transition
                       active:scale-95"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-3">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </p>

          <p className="text-sm text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
