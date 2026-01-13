// Language: JavaScript (React Doctor Dashboard)

import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const { token, logout } = useAuth();
  const [patientEmail, setPatientEmail] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !patientEmail) {
      setMessage("Patient email and report file are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("report", file);
      formData.append("patientEmail", patientEmail);

      const res = await API.post("/reports/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Report uploaded successfully");
      setPatientEmail("");
      setFile(null);
    } catch (error) {
      setMessage(error.response?.data?.message || "Upload failed");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Doctor Dashboard
          </h2>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-sm text-red-500"
          >
            Logout
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Patient Email"
              className="w-full p-2 border rounded"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />

            <input
              type="file"
              className="w-full"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded
                       hover:bg-blue-700 transition active:scale-95"
            >
              Upload Report
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-green-600">{message}</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default DoctorDashboard;
