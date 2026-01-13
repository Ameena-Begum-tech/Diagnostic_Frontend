// Language: JavaScript (React)

import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/forgot-password", { email });
      toast.success("Reset link sent to email");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow w-96">
          <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ForgotPassword;
