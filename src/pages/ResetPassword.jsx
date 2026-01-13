import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      toast.success("Password reset successful");
      navigate("/login");
    } catch {
      toast.error("Invalid or expired link");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow w-96">
          <h2 className="text-xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ResetPassword;
