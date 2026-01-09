import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-slate-50">
      
      <h1 className="text-3xl font-semibold mb-2 text-slate-900">
        🚧 Page Under Development
      </h1>

      <p className="text-slate-600 mb-6 max-w-md">
        This page is currently being worked on.  
        Please check back later or return to the home page.
      </p>

      <NavLink
        to="/applayout"
        className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium
                   hover:bg-slate-800 transition"
      >
        Go to Home
      </NavLink>

    </div>
  );
};

export default ErrorPage;
