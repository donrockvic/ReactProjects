import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';

import NotFoundPage from '../../components/404';
 

test('should render Not found page', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<NotFoundPage/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});