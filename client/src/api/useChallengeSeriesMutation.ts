import { useMutation, useQueryClient } from "react-query";
import { CHALLENGE_SERIES_KEY } from "./queryKeys";
import { createChallengeSeries } from "./openapi";

export interface PostChallengePayload {
  title: string;
  description: string;
}

export function useChallengeSeriesMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createChallengeSeries, {
    onSuccess: () => {
      // Invalidate the challenge series query
      queryClient.invalidateQueries(CHALLENGE_SERIES_KEY);
    },
  });

  return mutation;
}
