import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { StandardLayout } from "./layouts/StandardLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { AboutPage } from "./pages/AboutPage";
import { Error as ErrorPage } from "./pages/Error";
import { ReactNode } from "react";
import { Register } from "./pages/Register";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ChallengeSeriesPage } from "./pages/ChallengeSeriesPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./AuthenticationProvider";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

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
  createStandardRoute("/about", <AboutPage />),
  createStandardRoute("/register", <Register />),
  createStandardRoute("/contact", <ContactPage />),
  createStandardRoute("/home", <HomePage />),
  createStandardRoute("/challenges", <ChallengeSeriesPage />),
]);

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

// @todo: temporarily hardcoded
const queryClient = new QueryClient();

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraBaseProvider>
  );
}

export default App;
