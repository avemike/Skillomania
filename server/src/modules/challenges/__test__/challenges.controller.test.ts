const mockLooseChallenges = [
  {
    id: 1,
    title: "Challenge 1",
    description: "Challenge 1 description",
  },
];

const mockGetLooseChallenges = jest.fn().mockResolvedValue(mockLooseChallenges);

const mockChallengeService = jest.fn().mockImplementation(() => ({
  getLooseChallenges: mockGetLooseChallenges,
}));

import { app } from "../../../app";
import request from "supertest";

jest.mock("../challenges.service", () => ({
  ChallengesService: mockChallengeService,
}));

describe("GET /challenges", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/challenges");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockLooseChallenges);
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockGetLooseChallenges).toHaveBeenCalledTimes(1);
  });
});
