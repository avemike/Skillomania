import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { StandardLayout } from "./layouts/StandardLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { About } from "./pages/About";
import { Error as ErrorPage } from "./pages/Error";
import { ReactNode } from "react";
import { Register } from "./pages/Register";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { ChallengeSeriesPage } from "./pages/ChallengeSeriesPage";
import { QueryClient, QueryClientProvider } from "react-query";

function StandardPage({ page }: { page: ReactNode }) {
  return <StandardLayout>{page}</StandardLayout>;
}
function createStandardRoute(path: string, element: ReactNode): RouteObject {
  return {
    path,
    element: <StandardPage page={element} />,
  };
}

const router = createBrowserRouter([
  createStandardRoute("/*", <ErrorPage />),
  createStandardRoute("/", <WelcomePage />),
  createStandardRoute("/about", <About />),
  createStandardRoute("/register", <Register />),
  createStandardRoute("/contacts", <Contacts />),
  createStandardRoute("/home", <Home />),
  createStandardRoute("/challenges", <ChallengeSeriesPage />),
]);

// @todo: temporarily hardcoded
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        if (typeof url === "string") {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_BASE_URL}/${url.toLowerCase()}`
          );

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
