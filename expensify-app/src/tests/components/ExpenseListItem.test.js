import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';
import ExpenseListItem from '../../components/ExpenseListItem';
import expences from '../fixtuers/expenses';

test('should render ExpenseList with Item', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<ExpenseListItem {...expences[1]} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});