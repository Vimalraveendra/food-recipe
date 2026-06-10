import "@testing-library/jest-dom";
import { server } from "./mocks/server";

//Start before tests
beforeAll(() => server.listen());

//Reset after each test
afterEach(() => server.resetHandlers(), sessionStorage.clear());

//Close after tests
afterAll(() => server.close());
