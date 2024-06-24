import { Request } from "express";
import { ServerContext } from "../types/custom";

export function extractContextFromRequest(req: Request): ServerContext {
  return {
    db: req.db,
  };
}
