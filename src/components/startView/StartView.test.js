import { render, screen, fireEvent } from '@testing-library/react';
import StartView from './StartView';

describe('StartView', () => {
  test('Should render proper properly', () => {
    render(<StartView />);

    const title = screen.getByText('Wordcloud game');
    expect(title).toBeInTheDocument();

    const nicknameInput = screen.getByPlaceholderText(
      'Enter your nickname here...'
    );
    expect(nicknameInput).toBeInTheDocument();

    const startGameButton = screen.getByRole('button', { name: 'play' });
    expect(startGameButton).toBeInTheDocument();
  });

  test('should display info on clicking button with no nickname set', async () => {
    render(<StartView nickname='' />);

    const startGameButton = screen.getByRole('button', { name: 'play' });
    fireEvent.click(startGameButton);

    const noNicknameError = await screen.findByText('Set your nickname first!');
    expect(noNicknameError).toBeInTheDocument();
  });
});
