import { useMutation, useQueryClient } from "react-query";
import { CHALLENGE_SERIES_KEY } from "./queryKeys";
import { createChallenge } from "./openapi";

export interface PostChallengePayload {
  title: string;
  description: string;
  seriesId?: number | null;
}

export function useChallengeMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createChallenge, {
    onSuccess: () => {
      // Invalidate the challenge series query
      queryClient.invalidateQueries(CHALLENGE_SERIES_KEY);
    },
  });

  return mutation;
}
