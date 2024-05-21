import { screen, waitFor } from '@testing-library/react';
import { Menu } from './Menu';
import { renderComponent } from '../../tests/utils/component-renderer';
import userEvent from '@testing-library/user-event';

// Si cambia de idioma
const changeLanguageMock = vi.fn();

vi.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    }),
  };
});

describe('Menu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should call changeLanguage with es', async () => {
    renderComponent(<Menu />);

    const spanishLanguageButton = screen.getByText('Español');
    userEvent.click(spanishLanguageButton);

    await waitFor(() => {
      expect(changeLanguageMock).toHaveBeenCalledTimes(1);
      expect(changeLanguageMock).toBeCalledWith('es');
    });
  });

  it('Should call changeLanguage with en', async () => {
    renderComponent(<Menu />);

    const spanishLanguageButton = screen.getByText('Inglés');
    userEvent.click(spanishLanguageButton);

    await waitFor(() => {
      expect(changeLanguageMock).toHaveBeenCalledTimes(1);
      expect(changeLanguageMock).toBeCalledWith('en');
    });
  });

  it('Should call changeLanguage when click on Español', async () => {
    renderComponent(<Menu />);

    const spanishLanguageButton = screen.getByText('Sign up');
    userEvent.click(spanishLanguageButton);

    await waitFor(() => expect(screen.getByText('Nombre de usuario')).toBeInTheDocument());
  });
});
