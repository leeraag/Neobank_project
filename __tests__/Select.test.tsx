import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Select } from '@UI';

describe('Select Component', () => {
    const mockOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks(); // Очищаем мок перед каждым тестом
        render(
            <Select
                id="testSelect"
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                options={mockOptions}
            />
        );
    });

    // отображение элемента
    it('Render select', () => {
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
    });

    // отображение правильного количества options
    it('Render correct number of options', () => {
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(mockOptions.length);
    });

    // отображение правильного текста у option
    it('Displays correct option label', () => {
        mockOptions.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    // вызов onChange при выборе option
    it('Call onChange', () => {
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'option1' } });
        expect(mockOnChange).toHaveBeenCalled();
    });

    // вызов onBlur при потере фокуса select
    test('Call onBlur', () => {
        const select = screen.getByRole('combobox');
        fireEvent.blur(select);
        expect(mockOnBlur).toHaveBeenCalled();
    });
});