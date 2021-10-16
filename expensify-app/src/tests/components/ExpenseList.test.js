import React from 'react';
// import shallow from 'enzyme/build/shallow';
import ReactShallowRender from 'react-test-renderer/shallow';
import {ExpenseList} from '../../components/ExpenseList';

import expences from '../fixtuers/expenses';
// import "../setupTests";

test('should render ExpenseList with expenses', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<ExpenseList expenses={expences} />);
//     const wrapper = shallow ()
//     expect(wrapper).toMatchSnapshot();
expect(renderer.getRenderOutput()).toMatchSnapshot();
});


test ('should render ExpenseList with Empyty array', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<ExpenseList expenses={[]} />);
expect(renderer.getRenderOutput()).toMatchSnapshot();
});
