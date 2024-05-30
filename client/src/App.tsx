import React, { useState } from "react";
import PropTypes from "prop-types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StandardLayout } from "./layouts/StandardLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
/**
 * @param {Object} props

 * @return {JSX.Element}
 */
function StandardPage({ page }) {
  return <StandardLayout>{page}</StandardLayout>;
}

StandardPage.propTypes = {
  page: PropTypes.element.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardPage page={<WelcomePage />} />,
  },
  {
    path: "/About",
    element: <StandardPage page={<About />} />,
  },
  {
    path: "/*",
    element: <StandardPage page={<Error />} />,
  },
]);

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
