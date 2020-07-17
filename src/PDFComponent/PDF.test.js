import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PDF from './PDF';

describe('Help component', () => {
  it('renders without crashing', () => {
    shallow(
      <BrowserRouter>
        <PDF />
      </BrowserRouter>);
  });
});
