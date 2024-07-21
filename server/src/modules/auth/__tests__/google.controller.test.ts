import request from "supertest";

const mockEmail = "some_email@email.com";
const mockPayload = {
  email_verified: true,
  given_name: "Given name",
  family_name: "Family name",
  email: mockEmail,
};

const mockGetPayload = jest.fn().mockReturnValue(mockPayload);

jest.mock("google-auth-library", () => ({
  OAuth2Client: jest.fn().mockImplementation(() => ({
    verifyIdToken: jest.fn().mockResolvedValue({
      getPayload: mockGetPayload,
    }),
  })),
}));

const mockGetUser = jest.fn().mockResolvedValue({ id: 1 });
const mockInsertUser = jest.fn().mockResolvedValue({ id: 1 });

jest.mock("../../users/users.repository", () => ({
  usersRepository: {
    getUser: mockGetUser,
    insertUser: mockInsertUser,
  },
}));

const mockCreateSession = jest.fn().mockResolvedValue({ token: "token" });

jest.mock("../../sessions/sessions.service", () => ({
  sessionsService: {
    createSession: mockCreateSession,
  },
}));

import { app } from "../../../app";

describe("POST /google-auth", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and call getUser once with email", async () => {
    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(mockGetUser).toHaveBeenCalledTimes(1);
    expect(mockInsertUser).not.toHaveBeenCalled();
    expect(mockGetUser).toHaveBeenCalledWith({ email: mockEmail });
  });

  it("should return 500 if email not found in payload", async () => {
    mockGetPayload.mockReturnValueOnce({
      email_verified: true,
    });

    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(400);
  });

  it("should return 500 if email not verified", async () => {
    mockGetPayload.mockReturnValueOnce({
      email_verified: false,
      email: "some_email@email.com",
    });

    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(400);
  });

  it("should insert new user if user does not exists", async () => {
    mockGetUser.mockResolvedValueOnce(null);

    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(200);
    expect(mockInsertUser).toHaveBeenCalledTimes(1);
    expect(mockInsertUser).toHaveBeenCalledWith({
      email: mockPayload.email,
      firstName: mockPayload.given_name,
      lastName: mockPayload.family_name,
      authSource: "google",
    });
  });

  it("should insert new user with unknown firstName and lastName if they are not provided by oauth", async () => {
    mockGetPayload.mockReturnValueOnce({
      email_verified: true,
      email: mockPayload.email,
    });
    mockGetUser.mockResolvedValueOnce(null);

    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(200);
    expect(mockInsertUser).toHaveBeenCalledTimes(1);
    expect(mockInsertUser).toHaveBeenCalledWith({
      email: mockPayload.email,
      firstName: "Unknown",
      lastName: "Unknown",
      authSource: "google",
    });
  });

  it("should create session", async () => {
    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(200);
    expect(mockCreateSession).toHaveBeenCalledTimes(1);
  });

  it("should return 500 if user is not created and is not found", async () => {
    mockGetUser.mockResolvedValueOnce(null);
    mockInsertUser.mockResolvedValueOnce(null);

    const response = await request(app).post("/google-auth").send({
      credential: "abc",
      client_id: "123",
    });

    expect(response.status).toBe(500);
  });
});
