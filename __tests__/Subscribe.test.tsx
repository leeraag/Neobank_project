import React from "react";
import { render, screen } from "@testing-library/react";
import { Subscribe } from "../src/components/Home";
import userEvent from "@testing-library/user-event";

test('Enter email into field', async () => {
  render(<Subscribe />);
  const inputNode = screen.getByPlaceholderText('Your email')
  await userEvent.type(inputNode, 'test@gmail.com');
  expect(inputNode).toHaveValue('test@gmail.com');
});