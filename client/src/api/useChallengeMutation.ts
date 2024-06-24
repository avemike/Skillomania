import { useMutation, useQueryClient } from "react-query";
import { fetchBase } from "./fetchBase";
import { Challenge } from "../types/challenge";
import { CHALLENGE_SERIES_KEY } from "./useChallengeSeries";

const CHALLENGE_KEY = "/challenges";

export interface PostChallengePayload {
  title: string;
  description: string;
  seriesId?: number | null;
}

const postChallenge = (data: PostChallengePayload): Promise<Challenge> =>
  fetchBase(CHALLENGE_KEY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export function useChallengeMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postChallenge, {
    onSuccess: () => {
      // Invalidate the challenge series query
      queryClient.invalidateQueries(CHALLENGE_SERIES_KEY);
    },
  });

  return mutation;
}
