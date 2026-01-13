// Language: JavaScript (React + Tailwind)

import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-gray-50 min-h-screen">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Digital Diagnostic Portal
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Securely upload, manage, and access diagnostic reports anytime.
              Designed for doctors and patients with enterprise-grade security.
            </p>

            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded
                           hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded
                           hover:bg-blue-50 transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1580281657521-6a6c8bce7f8a"
              alt="Medical diagnostics"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
              Why Choose Our Platform
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
                  alt="Secure"
                  className="h-16 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  All reports are protected using JWT authentication and
                  role-based access.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
                  alt="Doctor upload"
                  className="h-16 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Doctor Uploads</h3>
                <p className="text-gray-600">
                  Doctors can securely upload diagnostic reports for patients
                  with ease.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                  alt="Patient access"
                  className="h-16 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Patient Access</h3>
                <p className="text-gray-600">
                  Patients can view and download their reports anytime from
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-700 text-white py-6 mt-16">
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Diagnostic Portal. All rights reserved.
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
};

export default Home;
