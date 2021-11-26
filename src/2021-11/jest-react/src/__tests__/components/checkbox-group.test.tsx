import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { CheckboxGroup } from '../../components/checkbox-group';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxGroup labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));
  expect(queryByLabelText(/on/i)).toBeTruthy();
});
