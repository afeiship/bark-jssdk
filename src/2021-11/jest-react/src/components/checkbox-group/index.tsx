import React, { useState } from 'react';

type Props = {
  labelOn: string;
  labelOff: string;
};

export const CheckboxGroup = ({ labelOn, labelOff }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};
