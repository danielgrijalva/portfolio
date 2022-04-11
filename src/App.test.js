import { render, screen } from "@testing-library/react";
import { Hello } from "./pages";

test("renders hello", () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
