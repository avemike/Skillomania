import { useQuery } from "react-query";
import { ChallengeSeries } from "../types/challengeSeries";
import { fetchBase } from "./fetchBase";

const CHALLENGE_SERIES_KEY = "/challenges/series";

const fetchChallengeSeries = (): Promise<ChallengeSeries[]> =>
  fetchBase("/challenges/series").then((response) => response.json());

export function useChallengeSeries() {
  return useQuery(CHALLENGE_SERIES_KEY, {
    queryFn: fetchChallengeSeries,
  });
}
