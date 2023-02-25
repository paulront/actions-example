import {  render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('Counter test' , () => {
  it('should render Counter', () => {
    render(<Counter/>);

    const target = screen.getByRole('button', {name : '+'});

    userEvent.click(target);

    expect(screen.getByText('1')).toBeTruthy();
  })
})