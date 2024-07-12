import { useQuery } from "react-query";
import { getSeries } from "./openapi";
import { CHALLENGE_SERIES_KEY } from "./queryKeys";

export function useChallengeSeries() {
  return useQuery(CHALLENGE_SERIES_KEY, {
    queryFn: getSeries,
  });
}
