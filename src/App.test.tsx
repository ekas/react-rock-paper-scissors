import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, Router, useLocation } from "react-router-dom";

test("Should render App.tsx and verifies content for default route", () => {
  const { container } = render(<App />, { wrapper: BrowserRouter });

  // verify page content for default route
  expect(screen.getByText(/Rock Paper Scissors/i)).toBeInTheDocument();
  expect(screen.getByText(/Player vs Computer/i)).toBeInTheDocument();
  expect(screen.getByText(/Computer vs Computer/i)).toBeInTheDocument();

  // verify page content for default route
  const buttons = container.getElementsByClassName("landing-button");
  expect(buttons.length).toBe(2);
});
