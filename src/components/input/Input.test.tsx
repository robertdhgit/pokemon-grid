import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { describe, expect, test } from "vitest";

describe('Input component', () => {
  test("renders input with placeholder", () => {
    render(<Input placeholder="Your name" />);
    const inputElement = screen.getByPlaceholderText("Your name");
    expect(inputElement).toBeInTheDocument();
  });
})
