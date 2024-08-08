import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Accordion } from '@UI';

const sections = [
  { id: 1, title: 'Section 1', description: 'Description for section 1' },
  { id: 2, title: 'Section 2', description: 'Description for section 2' },
];

describe('Accordion Component', () => {
    // отображение заголовков
    it('Render titles', () => {
        render(<Accordion sections={sections} />);
        sections.forEach(section => {
            expect(screen.getByText(section.title)).toBeInTheDocument();
        });
    });

    // отображение описаний
    it('Toggle section description', () => {
        render(<Accordion sections={sections} />);
        // описания изначально не видны
        sections.forEach(section => {
            expect(screen.queryByText(section.description)).not.toBeInTheDocument();
        });
        fireEvent.click(screen.getByText('Section 1'));
        // описание первой секции теперь видно
        expect(screen.getByText('Description for section 1')).toBeInTheDocument();
        // описание второй секции не видно
        expect(screen.queryByText('Description for section 2')).not.toBeInTheDocument();
        fireEvent.click(screen.getByText('Section 1'));
        // описание первой секции не видно
        expect(screen.queryByText('Description for section 1')).not.toBeInTheDocument();
    });

    // только одна секция открыта
    it('One section is open', () => {
        render(<Accordion sections={sections} />);
        fireEvent.click(screen.getByText('Section 1'));
        // описание первой секции видно
        expect(screen.getByText('Description for section 1')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Section 2'));
        // описание первой секции не видно
        expect(screen.queryByText('Description for section 1')).not.toBeInTheDocument();
        // описание второй секции видно
        expect(screen.getByText('Description for section 2')).toBeInTheDocument();
    });
});