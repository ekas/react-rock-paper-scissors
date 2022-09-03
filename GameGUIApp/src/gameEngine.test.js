import { getGameResult } from "./gameEngine";

describe("Test All Game Result Scenarios", () => {
  it("Should Paper Object Beat Rock Object", () => {
    expect(getGameResult("paper", "rock")).toBe(true);
  });

  it("Should Paper Object Beat Scissors Object", () => {
    expect(getGameResult("paper", "scissors")).toBe(false);
  });

  it("Should Rock Object Beat Paper Object", () => {
    expect(getGameResult("rock", "paper")).toBe(false);
  });

  it("Should Rock Object Beat Scissors Object", () => {
    expect(getGameResult("rock", "scissors")).toBe(true);
  });

  it("Should Scissors Object Beat Rock Object", () => {
    expect(getGameResult("scissors", "rock")).toBe(false);
  });

  it("Should Scissors Object Beat Paper Object", () => {
    expect(getGameResult("scissors", "paper")).toBe(true);
  });

  it("Should Test Tie Rounds", () => {
    expect(getGameResult("paper", "paper")).toBe(undefined);
    expect(getGameResult("rock", "rock")).toBe(undefined);
    expect(getGameResult("scissors", "scissors")).toBe(undefined);
  });
});
