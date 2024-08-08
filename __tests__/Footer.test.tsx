import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "@UI";
import { footerlinks } from "@/constant";

describe('Footer test', () => {
    it('Renders Footer', () => {
        render(<BrowserRouter><Footer footerlinks={footerlinks} /></BrowserRouter>);
        // наличие ссылки логотипа
        const titleLink = screen.getByRole('link', { name: /neoflex/i });
        expect(titleLink).toBeInTheDocument();
        expect(titleLink).toHaveAttribute('href', 'https://www.neoflex.ru/');
        // наличие телефона и email
        expect(screen.getByText('+7 (495) 984 25 13')).toBeInTheDocument();
        expect(screen.getByText('info@neoflex.ru')).toBeInTheDocument();
        // наличие ссылок
        footerlinks.forEach(link => {
            expect(screen.getByText(link.children)).toBeInTheDocument();
        });
    });
});