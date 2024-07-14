const mockLooseChallenges = [
  {
    id: 1,
    title: "Challenge 1",
    description: "Challenge 1 description",
  },
];

const mockGetLooseChallenges = jest.fn().mockResolvedValue(mockLooseChallenges);

jest.mock("../challenges.repository", () => ({
  challengesRepository: {
    getLooseChallenges: mockGetLooseChallenges,
  },
}));

import { ChallengesService } from "../challenges.service";

describe("ChallengesService", () => {
  it("getLooseChallenges", async () => {
    const service = new ChallengesService();
    const result = await service.getLooseChallenges();

    expect(result).toEqual(mockLooseChallenges);
    expect(mockGetLooseChallenges).toHaveBeenCalledTimes(1);
  });
});
