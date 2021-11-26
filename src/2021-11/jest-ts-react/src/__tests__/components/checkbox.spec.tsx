import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../../components/checkbox';

test('<Checkbox label="I Agree" /> set props label should worked', () => {
  render(<Checkbox label="I Agree" />);
  const el = document.querySelector('.rc-checkbox') as HTMLDivElement;
  const checkbox = el.querySelector('input') as HTMLInputElement;
  console.log(el.innerHTML, checkbox.checked);
  fireEvent.click(checkbox);
  console.log(el.innerHTML, checkbox.checked);
});
