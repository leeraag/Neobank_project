import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Header } from "@UI";
import { headerlinks } from "@/constant";

describe('Header test', () => {
    // отображение header с лого и ссылками
    it('Renders Header', () => {
        render(<BrowserRouter><Header headerlinks={headerlinks} /></BrowserRouter>);
        // Логотип отображается
        const logo = screen.getByText('NeoBank');
        expect(logo).toBeInTheDocument();
        // Наличие ссылок
        headerlinks.forEach(link => {
            expect(screen.getByText(link.children)).toBeInTheDocument();
        });
    });

    // навигация
    it('Work navigation', () => {
        render(<BrowserRouter><Header headerlinks={headerlinks} /></BrowserRouter>);
        // Клик по ссылке
        const link = screen.getByText('Credit card');
        fireEvent.click(link);
        expect(window.location.pathname).toBe('/loan');
    });
});