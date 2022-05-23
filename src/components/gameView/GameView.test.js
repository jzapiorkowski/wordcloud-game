import { fireEvent, render, screen } from '@testing-library/react';
import GameView from './GameView';

jest.mock('./GameRules.json', () => {
  return [
    {
      question: 'select colors',
      all_words: ['black', 'yellow', 'green', 'sky', 'bicycle', 'pen'],
      good_words: ['black', 'yellow', 'green'],
    },
  ];
});

describe('GameView', () => {
  test('should render all words properly', () => {
    render(<GameView />);

    const question = screen.getByText('select colors');
    expect(question).toBeInTheDocument();

    const wordBlack = screen.getByText('black');
    expect(wordBlack).toBeInTheDocument();

    const wordYellow = screen.getByText('yellow');
    expect(wordYellow).toBeInTheDocument();

    const wordGreen = screen.getByText('green');
    expect(wordGreen).toBeInTheDocument();

    const wordSky = screen.getByText('sky');
    expect(wordSky).toBeInTheDocument();

    const wordBicycle = screen.getByText('bicycle');
    expect(wordBicycle).toBeInTheDocument();

    const wordPen = screen.getByText('pen');
    expect(wordPen).toBeInTheDocument();

    const button = screen.getByText('check answers');
    expect(button).toBeInTheDocument();
  });

  test('should change button text on first click', async () => {
    render(<GameView />);

    const checkAnswersButton = screen.getByText('check answers');
    fireEvent.click(checkAnswersButton);

    const finishGameButton = await screen.findByText('finish game');
    expect(finishGameButton).toBeInTheDocument();
  });

  test('should show answers for correct words when button "check answers" is clicked', () => {
    render(<GameView />);

    const button = screen.getByText('check answers');
    fireEvent.click(button);

    const goodInfo = screen.getAllByText('Good');

    expect(goodInfo.length).toEqual(3);
  });

  test('should show "bad" answer for bad words selected when button "check answers" is clicked', async () => {
    render(<GameView />);

    const wordPen = screen.getByText('pen');
    fireEvent.click(wordPen);

    const wordSky = screen.getByText('sky');
    fireEvent.click(wordSky);

    const button = screen.getByText('check answers');
    fireEvent.click(button);

    const badInfo = screen.getAllByText('Bad');
    expect(badInfo.length).toEqual(2);
  });
});
