import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/gameView/GameRules.json', () => {
  return [
    {
      question: 'select colors',
      all_words: ['black', 'yellow', 'green', 'sky', 'bicycle', 'pen'],
      good_words: ['black', 'yellow', 'green'],
    },
  ];
});

describe('App', () => {
  test('should render StartView at the beggining', () => {
    render(<App />);

    const title = screen.getByText('Wordcloud game');
    expect(title).toBeInTheDocument();

    const nicknameInput = screen.getByPlaceholderText(
      'Enter your nickname here...'
    );
    expect(nicknameInput).toBeInTheDocument();

    const startGameButton = screen.getByRole('button', { name: 'play' });
    expect(startGameButton).toBeInTheDocument();
  });

  test('should render GameView when nickname is submitted', async () => {
    render(<App />);

    const nicknameInput = screen.getByPlaceholderText(
      'Enter your nickname here...'
    );
    fireEvent.change(nicknameInput, { target: { value: 'john' } });

    const startGameButton = screen.getByRole('button', { name: 'play' });
    fireEvent.click(startGameButton);

    const question = await screen.findByText('select colors');
    expect(question).toBeInTheDocument();
  });

  test('should show GameSummary after nickname is set and finish game button is clicked', async () => {
    render(<App />);

    const nicknameInput = screen.getByPlaceholderText(
      'Enter your nickname here...'
    );
    fireEvent.change(nicknameInput, { target: { value: 'john' } });

    const startGameButton = screen.getByRole('button', { name: 'play' });
    fireEvent.click(startGameButton);

    const checkAnswersButton = await screen.findByText('check answers');
    fireEvent.click(checkAnswersButton);

    const finishGameButton = await screen.findByText('finish game');
    fireEvent.click(finishGameButton);

    const congratulations = await screen.findByText('Congratulations, john!');
    expect(congratulations).toBeInTheDocument();
  });

  test('should count points correctly', async () => {
    render(<App />);

    const nicknameInput = screen.getByPlaceholderText(
      'Enter your nickname here...'
    );
    fireEvent.change(nicknameInput, { target: { value: 'john' } });

    const startGameButton = screen.getByRole('button', { name: 'play' });
    fireEvent.click(startGameButton);

    const wordBlack = screen.getByText('black');
    fireEvent.click(wordBlack);

    const wordYellow = screen.getByText('yellow');
    fireEvent.click(wordYellow);

    const wordBicycle = screen.getByText('bicycle');
    fireEvent.click(wordBicycle);

    const checkAnswersButton = await screen.findByText('check answers');
    fireEvent.click(checkAnswersButton);

    const finishGameButton = await screen.findByText('finish game');
    fireEvent.click(finishGameButton);

    const pointsElement = await screen.findByText('2 points');
    expect(pointsElement).toBeInTheDocument();
  });
});
