import request from "supertest";
const mockLooseChallenges: Partial<IChallenge>[] = [
  {
    id: 1,
    title: "Challenge 1",
    description: "Challenge 1 description",
  },
];

const mockSeries: Partial<IChallengeSeries>[] = [
  {
    id: 1,
    title: "Series 1",
    description: "Series 1 description",
    challenges: mockLooseChallenges as IChallenge[],
  },
];

const mockGetLooseChallenges = jest.fn().mockResolvedValue(mockLooseChallenges);
const mockGetSeries = jest.fn().mockResolvedValue(mockSeries);
const mockCreateChallenge = jest.fn().mockResolvedValue({ id: 1 });
const mockCreateChallengeSeries = jest.fn().mockResolvedValue({ id: 1 });

const mockChallengeService = jest.fn().mockImplementation(() => {
  return {
    getLooseChallenges: mockGetLooseChallenges,
    getSeries: mockGetSeries,
    createChallenge: mockCreateChallenge,
    createChallengeSeries: mockCreateChallengeSeries,
  };
});

jest.mock("../challenges.service.ts", () => ({
  ChallengesService: mockChallengeService,
  __esModule: true,
}));

import { app } from "../../../app";
import { IChallenge } from "../../../models/IChallenge";
import { IChallengeSeries } from "../../../models/IChallengeSeries";

describe("GET /challenges", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200", async () => {
    const response = await request(app).get("/challenges");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockLooseChallenges);
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockGetLooseChallenges).toHaveBeenCalledTimes(1);
  });

  it("should return 500 if service throws", async () => {
    mockGetLooseChallenges.mockRejectedValueOnce(new Error("Test error"));

    const response = await request(app).get("/challenges");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal Server Error" });
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockGetLooseChallenges).toHaveBeenCalledTimes(1);
  });
});

describe("GET /challenges/series", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200", async () => {
    const response = await request(app).get("/challenges/series");

    expect(response.status).toBe(200);
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockGetSeries).toHaveBeenCalledTimes(1);
    expect(response.body).toEqual(mockSeries);
  });

  it("should return 500 if service throws", async () => {
    mockGetSeries.mockRejectedValueOnce(new Error("Test error"));

    const response = await request(app).get("/challenges/series");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal Server Error" });
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
  });
});

describe("POST /challenges", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 201", async () => {
    const response = await request(app).post("/challenges").send({
      title: "Challenge 1",
      description: "Challenge 1 description",
    });

    expect(response.status).toBe(201);
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockCreateChallenge).toHaveBeenCalledTimes(1);
  });

  it("should return 500 if service throws", async () => {
    mockCreateChallenge.mockRejectedValueOnce(new Error("Test error"));

    const response = await request(app).post("/challenges").send({
      title: "Challenge 1",
      description: "Challenge 1 description",
    });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal Server Error" });
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockCreateChallenge).toHaveBeenCalledTimes(1);
  });

  describe("validation errors", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return 422 as validation error if title is missing", async () => {
      const response = await request(app).post("/challenges").send({
        description: "Challenge 1 description",
      });

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        errors: [
          {
            children: [],
            constraints: {
              isLength: "title must be longer than or equal to 5 characters",
              isNotEmpty: "title should not be empty",
            },
            property: "title",
            target: { description: "Challenge 1 description" },
          },
        ],
      });
    });

    it("should return 422 as validation error if description is missing", async () => {
      const response = await request(app).post("/challenges").send({
        title: "Challenge 1",
      });

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        errors: [
          {
            children: [],
            constraints: {
              isLength:
                "description must be longer than or equal to 5 characters",
              isNotEmpty: "description should not be empty",
            },
            property: "description",
            target: { title: "Challenge 1" },
          },
        ],
      });
    });

    it("shouldn't return validation error if seriesId is empty", async () => {
      const response = await request(app).post("/challenges").send({
        title: "Challenge 1",
        description: "Challenge 1 description",
      });

      expect(response.status).toBe(201);
    });
  });
});

describe("POST /challenges/series", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 201", async () => {
    const response = await request(app).post("/challenges/series").send({
      title: "Series 1",
      description: "Series 1 description",
    });

    expect(response.status).toBe(201);
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockCreateChallengeSeries).toHaveBeenCalledTimes(1);
  });

  it("should return 500 if service throws", async () => {
    mockCreateChallengeSeries.mockRejectedValueOnce(new Error("Test error"));

    const response = await request(app).post("/challenges/series").send({
      title: "Series 1",
      description: "Series 1 description",
    });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal Server Error" });
    expect(mockChallengeService).toHaveBeenCalledTimes(1);
    expect(mockCreateChallengeSeries).toHaveBeenCalledTimes(1);
  });

  describe("validation errors", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return 422 as validation error if title is missing", async () => {
      const response = await request(app).post("/challenges/series").send({
        description: "Series 1 description",
      });

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        errors: [
          {
            children: [],
            constraints: {
              isLength: "title must be longer than or equal to 5 characters",
              isNotEmpty: "title should not be empty",
            },
            property: "title",
            target: { description: "Series 1 description" },
          },
        ],
      });
    });

    it("should return 422 as validation error if description is missing", async () => {
      const response = await request(app).post("/challenges/series").send({
        title: "Series 1",
      });

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        errors: [
          {
            children: [],
            constraints: {
              isLength:
                "description must be longer than or equal to 5 characters",
              isNotEmpty: "description should not be empty",
            },
            property: "description",
            target: { title: "Series 1" },
          },
        ],
      });
    });
  });
});
