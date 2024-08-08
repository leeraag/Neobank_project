import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from '@UI'

describe('Button test', () => {
    const mockOnClick = jest.fn();
    beforeEach(() => {
        mockOnClick.mockClear(); // Очищаем мок перед каждым тестом
    });

    // отображение правильного текста
    it('Render with correct text', () => {
        render(<Button className="testClass">Test</Button>);
        const button = screen.getByText("Test");
        expect(button).toBeInTheDocument();
    });

    // отображение правильного className
    it('Is correct className', () => {
        render(<Button className="testClass">Test</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('testClass');
    });

    // клик по кнопке
    it('Click event', () => {
        render(<Button className="testClass" onClick={mockOnClick}>Test</Button>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    // не отрабатывает клик, если нет обработчика 
    it('Without onClick', () => {
        render(<Button className="testClass">Test</Button>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    // проверка с type
    it('Render with type', () => {
        render(<Button className="testClass" type="submit">Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });
});