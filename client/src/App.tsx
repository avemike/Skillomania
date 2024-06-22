import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StandardLayout } from "./layouts/StandardLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { About } from "./pages/About";
import { Error as ErrorPage } from "./pages/Error";
import { ReactNode } from "react";
import { Register } from "./pages/Register";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Challenges } from "./pages/Challenges";
import { QueryClient, QueryClientProvider } from "react-query";

function StandardPage({ page }: { page: ReactNode }) {
  return <StandardLayout>{page}</StandardLayout>;
}

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
    element: <StandardPage page={<ErrorPage />} />,
  },
  {
    path: "/Register",
    element: <StandardPage page={<Register />} />,
  },
  {
    path: "/Contacts",
    element: <StandardPage page={<Contacts />} />,
  },
  {
    path: "/Home",
    element: <StandardPage page={<Home />} />,
  },
  {
    path: "/Challenges",
    element: <StandardPage page={<Challenges />} />,
  },
]);

// @todo: temporarily hardcoded
const BASE_URL = "http://localhost:3005";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        if (typeof url === "string") {
          const response = await fetch(`${BASE_URL}/${url.toLowerCase()}`);

          return await response.json();
        }

        throw new Error("Invalid QueryKey");
      },
    },
  },
});

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
