import { render, screen } from '@testing-library/react';
import DisplayIfWordIsChosenCorrectly from './DisplayIfWordIsChosenCorrectly';

const isWordChosenCorrectly = (word) => {
  return ['car', 'plane', 'bike'].includes(word) ? true : false;
};

describe('DisplayIfWordIsChosenCorrectly', () => {
  test('should render "Bad" when word is incorrect word is chosen', () => {
    render(
      <DisplayIfWordIsChosenCorrectly
        word='black'
        isClicked={true}
        isCorrectAnswer={isWordChosenCorrectly}
      />
    );

    const badInfo = screen.getByText('Bad');
    expect(badInfo).toBeInTheDocument();

    const goodInfo = screen.queryByText('Good');
    expect(goodInfo).toBeNull();
  });

  test('should render "Good" for correct words', () => {
    render(
      <DisplayIfWordIsChosenCorrectly
        word='car'
        isClicked={true}
        isCorrectAnswer={isWordChosenCorrectly}
      />
    );

    const badInfo = screen.queryByText('Bad');
    expect(badInfo).toBeNull();

    const goodInfo = screen.getByText('Good');
    expect(goodInfo).toBeInTheDocument();
  });

  test('should render nothing for incorrect unclicked words', () => {
    render(
      <DisplayIfWordIsChosenCorrectly
        word='black'
        isClicked={false}
        isCorrectAnswer={isWordChosenCorrectly}
      />
    );

    const badInfo = screen.queryByText('Bad');
    expect(badInfo).toBeNull();

    const goodInfo = screen.queryByText('Good');
    expect(goodInfo).toBeNull();
  });
});
