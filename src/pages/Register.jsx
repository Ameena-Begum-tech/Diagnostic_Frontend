// Language: JavaScript (React Register Page)

import { useState } from "react";
import API from "../services/api";
import PageWrapper from "../components/PageWrapper";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "patient",
  });
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(user.role === "doctor" ? "/doctor" : "/patient");
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              className="w-full p-2 border rounded"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              className="w-full p-2 border rounded"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              className="w-full p-2 border rounded"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <select
              className="w-full p-2 border rounded"
              name="role"
              onChange={handleChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded
                       hover:bg-blue-700 transition active:scale-95"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Register;
