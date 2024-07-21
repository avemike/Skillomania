jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  DataSource: jest.fn().mockImplementation(() => ({
    initialize: jest.fn(),
  })),
  __esModule: true,
}));

console.log = jest.fn();
console.error = jest.fn();
console.warn = jest.fn();
