// Language: JavaScript (React Patient Dashboard)

import { useEffect, useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const { token, logout } = useAuth();
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await API.get("/reports/my-reports", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReports(res.data);
      } catch (err) {
        setError("Failed to load reports");
      }
    };

    fetchReports();
  }, [token]);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">
              Patient Dashboard
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
          </div>

          {reports.length === 0 ? (
            <p className="text-gray-500 text-center">No reports available</p>
          ) : (
            <ul className="space-y-4">
              {reports.map((report) => (
                <li
                  key={report._id}
                  className="border p-4 rounded
                           transition hover:shadow-md hover:scale-[1.01]"
                >
                  <p className="font-semibold mb-2">
                    Doctor: {report.doctor?.name}
                  </p>

                  <a
                    href={`http://127.0.0.1:4000/${report.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Download Report
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default PatientDashboard;
