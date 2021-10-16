import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';

import ExpenseDashboardPage from '../../components/ExpenseDashboard';


test('should render Header component', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<ExpenseDashboardPage/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});