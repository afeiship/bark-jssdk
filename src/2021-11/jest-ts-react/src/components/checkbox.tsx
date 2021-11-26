import React, { useState, useEffect } from 'react';

export type StandardEventTarget = {
  target: {
    value: any;
  };
};

type Props = {
  label?: string;
  value?: boolean;
  onChange?: (e: StandardEventTarget) => void;
};

const defaults = {
  onChange: () => {},
};

export const Checkbox = (inProps: Props) => {
  const { label, value, onChange } = { ...defaults, ...inProps };
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value!);
  }, [value]);

  useEffect(() => {
    onChange!({ target: { value: checked } });
  }, [checked]);

  return (
    <label className="rc-checkbox">
      <input
        type="checkbox"
        checked={!!checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        data-role="checkbox"
      />
      <span>{label}</span>
    </label>
  );
};
