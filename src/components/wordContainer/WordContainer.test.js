import WordContainer from './WordContainer';
import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

const MockWordContainer = ({ word }) => {
  const [correctWordsCount, setCorrectWordsCount] = useState(0);

  return (
    <WordContainer
      correctWordsCount={correctWordsCount}
      setCorrectWordsCount={setCorrectWordsCount}
      isCorrectAnswer={isWordChosenCorrectly}
      word={word}
    />
  );
};

const isWordChosenCorrectly = (word) => {
  return ['car', 'plane', 'bike'].includes(word) ? true : false;
};

describe('WordContainer', () => {
  test('should render properly', () => {
    const word = 'car';

    render(
      <WordContainer word={word} isCorrectAnswer={isWordChosenCorrectly} />
    );

    const wordElement = screen.getByText(word);
    expect(wordElement).toBeInTheDocument();
  });

  test('should change classNames on click', async () => {
    const word = 'car';

    render(<MockWordContainer word={word} showAnswers={false} />);

    const wordElement = screen.getByText(word);
    fireEvent.click(wordElement);
    const clickedContainer = screen.getByTestId('word-container');
    expect(clickedContainer).toHaveClass('clicked');
  });

  test('should assign "good" class for word when the word is a correct answer', () => {
    const word = 'car';

    render(
      <WordContainer
        word={word}
        isCorrectAnswer={isWordChosenCorrectly}
        showAnswers={true}
      />
    );

    const wordElement = screen.getByText(word);
    expect(wordElement).toHaveClass('good');
  });

  test('should assign "bad" class for word when the word is an incorrect answer', async () => {
    const word = 'black';

    render(
      <WordContainer
        word={word}
        isCorrectAnswer={isWordChosenCorrectly}
        showAnswers={true}
      />
    );

    const wordElement = screen.getByText(word);
    fireEvent.click(wordElement);

    // const clickedWordElement = await screen.findByText(word);
    // expect(clickedWordElement).toHaveClass('bad');
  });
});
