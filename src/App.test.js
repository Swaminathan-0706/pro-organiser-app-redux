import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Navbar Testing",()=>{
  test("should have home as well as createBoard for Navigation",()=>{
    const wrapper=mount(<App />);
    expect(wrapper.find("#list1").text()).toBe('Home');
    expect(wrapper.find("#list2").text()).toBe('Create a Board');
    expect(wrapper.find("#list3").text()).toBe('Sign Up');
    expect(wrapper.find("h1").text()).toBe('Pro-Organizer');
  });

});
