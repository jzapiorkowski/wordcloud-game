import { render, screen } from '@testing-library/react';
import GameSummary from './GameSummary';

describe('GameSummary', () => {
  test('Should render proper nickname and score', () => {
    const score = 5;
    render(<GameSummary nickname='John' gameScore={score} />);

    const congratulations = screen.getByText('Congratulations, John!');
    expect(congratulations).toBeInTheDocument();

    const usersScore = screen.getByText(`${score} points`);
    expect(usersScore).toBeInTheDocument();
  });
});
