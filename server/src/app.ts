import express, {
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { setupContext } from "./setupContext";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import { errorHandler } from "./errors/errorHandler";
// import { configuredPino } from "./pino";

export const app = express();

// app.use(configuredPino);
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
// Logger middleware
app.use((req, _res, next) => {
  console.log(`[server]: ${req.method} ${req.path}`);
  next();
});

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  // _req.log.info("Serving swagger docs");

  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

// Setup context
app.use(async (req, res, next) => {
  const context = await setupContext(req, res);

  req = Object.assign(req, context);

  next();
});

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

app.use(errorHandler);
