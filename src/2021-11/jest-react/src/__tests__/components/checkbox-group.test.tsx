import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckboxGroup } from '../../components/checkbox-group';

describe('<LoginForm />', () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    // ???
    const comp = render(
      <CheckboxGroup />,
    );

    console.log(comp);

  });
});