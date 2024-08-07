const mockJwt = {
  sign: jest.fn().mockReturnValue("token"),
};

jest.mock("jsonwebtoken", () => ({
  default: mockJwt,
  __esModule: true,
}));

const mockSessionRepository = {
  createSession: jest.fn().mockResolvedValue({ id: 1 }),
};

jest.mock("../sessions.repository", () => ({
  sessionsRepository: mockSessionRepository,
}));

import { sessionsService } from "../sessions.service";

describe("createSession func", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2020, 0, 1, 0));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return a session and set expires at as one hour later", async () => {
    const user = { id: 1 } as any;
    const session = await sessionsService.createSession({ user });

    expect(session).toEqual({
      session: {
        id: 1,
      },
      token: "token",
    });
    expect(mockJwt.sign).toHaveBeenCalledTimes(1);
    expect(mockSessionRepository.createSession).toHaveBeenCalledTimes(1);
    expect(mockSessionRepository.createSession).toHaveBeenCalledWith({
      expiresAt: new Date(2020, 0, 1, 1),
      user,
      token: "token",
    });
  });
});
