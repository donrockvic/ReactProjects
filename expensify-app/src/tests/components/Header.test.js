import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';
// import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
// import "../setupTests";

import Header from '../../components/Header';

test('Should render Header correctly', () => {
    // using enzyme
    // const wrapper = shallow(<Header/>)
    // expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    
    // usin React-test-renderer
    const renderer = new ReactShallowRender();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});


















// react-test-renderer