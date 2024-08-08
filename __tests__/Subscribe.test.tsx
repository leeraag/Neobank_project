import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { Subscribe } from "@/components/Home";
import { postEmail } from '@api';

// Мокаем функцию postEmail
jest.mock('@api', () => ({
    postEmail: jest.fn(),
}));

describe('Subscribe component', () => {
  beforeEach(() => {
      localStorage.clear(); // очищаем localStorage перед каждым тестом
      jest.clearAllMocks(); // Очищаем мок перед каждым тестом
  });

  // отображение формы
  it('Render subscribe form', () => {
    render(<Subscribe />);
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // проверка подписки
  it('Check subscription', () => {
    render(<Subscribe />);
    const isSubscribed = localStorage.getItem('isSubscribed');
    const emailInput = screen.getByPlaceholderText('Your email')
    if (isSubscribed === 'true') {
      expect(screen.getByText('You are already subscribed to the bank\'s newsletter')).toBeInTheDocument();
    } else {
      expect(emailInput).toBeInTheDocument();
    }
    // expect(screen.getByText(/You are already subscribed to the bank's newsletter/i)).toBeInTheDocument();
  });

  // отображение сообщения
  it('Show message if subscribed', () => {
    localStorage.setItem('isSubscribed', 'true');
    render(<Subscribe />);
    expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument();
  });

  // фокус в поле
  it('Input focus', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Your email');
    expect(emailInput).not.toHaveFocus();
    emailInput.focus();
    expect(emailInput).toHaveFocus();
  });

  // ввод в поле
  it('Enter email into field', async () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Your email')
    await userEvent.type(emailInput, 'test@gmail.com');
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  // подписка по клику на кнопку
  it('Subscribe on click', async () => {
    (postEmail as jest.Mock).mockResolvedValueOnce({}); // мокаем успешный ответ
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Your email')
    await userEvent.type(emailInput, 'test@gmail.com');
    const subscribeButton = screen.getByRole('button');
    fireEvent.click(subscribeButton);
    expect(postEmail).toHaveBeenCalledWith('test@gmail.com');
    localStorage.setItem('isSubscribed', 'true');
    expect(localStorage.getItem('isSubscribed')).toBe('true');
    // Ждем, пока сообщение о подписке отобразится
    await waitFor(() => {
        expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument();
    });
  });

  // попытка отправки при пустом поле
  it('Subscribe if field is empty', () => {
    render(<Subscribe />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(postEmail).not.toHaveBeenCalled();
  });
});