import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Checkbox } from '@UI'

describe('Checkbox Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear(); // Очищаем мок перед каждым тестом
  });

  // отображение чекбокса
  it('Render checkbox', () => {
    render(<Checkbox label="Test" isChecked={false} onChange={mockOnChange} />);
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).not.toBeChecked();
  });

  // изменение состояния когда checked
  it('Call onChange when checkbox is checked', () => {
    render(<Checkbox label="Test Checkbox" isChecked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true); // Проверяем, что onChange был вызван с true
  });

  // изменение состояния когда не checked
  it('Calls onChange when checkbox is unchecked', () => {
    render(<Checkbox label="Test Checkbox" isChecked={true} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(false); // Проверяем, что onChange был вызван с false
  });

  // изменение состояния чекбокса
  it('Update checkbox state', () => {
    const { rerender } = render(<Checkbox label="Test Checkbox" isChecked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    rerender(<Checkbox label="Test Checkbox" isChecked={true} onChange={mockOnChange} />);
    expect(checkbox).toBeChecked();
    // Изменяем состояние обратно на false
    rerender(<Checkbox label="Test Checkbox" isChecked={false} onChange={mockOnChange} />);
    expect(checkbox).not.toBeChecked();
  });
});