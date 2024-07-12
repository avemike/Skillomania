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
import { AddNewSeries } from "./pages/AddNewSeries";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./AuthenticationProvider";

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
  createStandardRoute("/AddNewSeries", <AddNewSeries />),
]);

// @todo: temporarily hardcoded
const queryClient = new QueryClient();

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
