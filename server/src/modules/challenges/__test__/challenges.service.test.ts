const mockLooseChallenges = [
  {
    id: 1,
    title: "Challenge 1",
    description: "Challenge 1 description",
  },
];

const mockChallenge = {
  id: 2,
  title: "Challenge 1",
  description: "Challenge 1 description",
};

const mockSeries = [
  {
    id: 3,
    title: "Series 1",
    description: "Series 1 description",
    challenges: [mockChallenge],
  },
];

const mockGetLooseChallenges = jest.fn().mockResolvedValue(mockLooseChallenges);

const mockGetChallenge = jest
  .fn()
  .mockImplementation(({ id }: { id: number }) =>
    [...mockLooseChallenges, mockChallenge].find((c) => c.id === id)
  );

const mockGetSeriesWithChallenges = jest.fn().mockResolvedValue(mockSeries);

const mockInsertChallenge = jest
  .fn()
  .mockImplementation((challenge) => challenge);

const mockInsertChallengeSeries = jest
  .fn()
  .mockImplementation((series) => series);

jest.mock("../challenges.repository", () => ({
  challengesRepository: {
    getLooseChallenges: mockGetLooseChallenges,
    getChallenge: mockGetChallenge,
    getSeriesWithChallenges: mockGetSeriesWithChallenges,
    insertChallenge: mockInsertChallenge,
    insertChallengeSeries: mockInsertChallengeSeries,
  },
}));

import { ChallengesService } from "../challenges.service";

describe("ChallengesService", () => {
  describe("getLooseChallenges", () => {
    it("getLooseChallenges return loose challenges", async () => {
      const service = new ChallengesService();
      const result = await service.getLooseChallenges();

      expect(result).toEqual(mockLooseChallenges);
      expect(mockGetLooseChallenges).toHaveBeenCalledTimes(1);
    });

    it("getLooseChallenges should throw if repository throws", async () => {
      mockGetLooseChallenges.mockRejectedValueOnce(new Error("Test error"));

      const service = new ChallengesService();
      await expect(service.getLooseChallenges()).rejects.toThrow("Test error");
    });
  });

  describe("getSeries", () => {
    it("getSeries should call repository and return series", async () => {
      const service = new ChallengesService();
      const result = await service.getSeries({});

      expect(result).toEqual(mockSeries);
      expect(mockGetSeriesWithChallenges).toHaveBeenCalledTimes(1);
    });

    it("getSeries should throw if repository throws", async () => {
      mockGetSeriesWithChallenges.mockRejectedValueOnce(
        new Error("Test error")
      );

      const service = new ChallengesService();
      await expect(service.getSeries({})).rejects.toThrow("Test error");
    });
  });

  describe("getChallenge", () => {
    it("getChallenge should call repository and return challenge", async () => {
      const service = new ChallengesService();
      const result = await service.getChallenge({ id: mockChallenge.id });

      expect(result).toEqual(mockChallenge);
      expect(mockGetChallenge).toHaveBeenCalledTimes(1);
    });

    it("getChallenge should throw if repository throws", async () => {
      mockGetChallenge.mockRejectedValueOnce(new Error("Test error"));

      const service = new ChallengesService();
      await expect(
        service.getChallenge({ id: mockChallenge.id })
      ).rejects.toThrow("Test error");
    });

    it("getChallenge should return undefined when challenge not fined", async () => {
      const service = new ChallengesService();

      const result = await service.getChallenge({ id: 9999 });

      expect(result).toBeUndefined();
    });
  });

  describe("createChallenge", () => {
    it("createChallenge should call repository", async () => {
      const service = new ChallengesService();
      await service.createChallenge({
        title: "Challenge 1",
        description: "Challenge 1 description",
        seriesId: 1,
        effortLevel: 1,
        requiredExpertise: 1,
        categoryId: 1,
        authorId: 1,
      });

      expect(mockInsertChallenge).toHaveBeenCalledTimes(1);
    });

    it("createChallenge should throw if repository throws", async () => {
      mockInsertChallenge.mockRejectedValueOnce(new Error("Test error"));

      const service = new ChallengesService();
      await expect(
        service.createChallenge({
          title: "Challenge 1",
          description: "Challenge 1 description",
          seriesId: 1,
          effortLevel: 1,
          requiredExpertise: 1,
          categoryId: 1,
          authorId: 1,
        })
      ).rejects.toThrow("Test error");
    });
  });

  describe("createChallengeSeries", () => {
    it("createChallengeSeries should call repository", async () => {
      const service = new ChallengesService();
      await service.createChallengeSeries({
        title: "Series 1",
        description: "Series 1 description",
        effortLevel: 1,
        requiredExpertise: 1,
        categoryId: 1,
        authorId: 1,
      });

      expect(mockInsertChallengeSeries).toHaveBeenCalledTimes(1);
    });

    it("createChallengeSeries should throw if repository throws", async () => {
      mockInsertChallengeSeries.mockRejectedValueOnce(new Error("Test error"));

      const service = new ChallengesService();
      await expect(
        service.createChallengeSeries({
          title: "Series 1",
          description: "Series 1 description",
          effortLevel: 1,
          requiredExpertise: 1,
          categoryId: 1,
          authorId: 1,
        })
      ).rejects.toThrow("Test error");
    });
  });
});
