import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

describe('Build project', () => {
  configure({adapter: new Adapter()});
    test('should build the project and render sample text', async () => {
      // Mock
      const renderApp = shallow(<App />);
      expect(renderApp.find('h1').exists()).toBe(true);

    });
  });
  