import { useQuery } from "react-query";
import { getCategories } from "./openapi";
import { CATEGORIES_KEY } from "./queryKeys";

export function useCategories() {
  return useQuery(CATEGORIES_KEY, {
    queryFn: getCategories,
  });
}
