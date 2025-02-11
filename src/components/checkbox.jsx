import React, { useEffect, useState } from 'react';

const CHECKBOX_LS_KEY = 'scalekit-docs-checkboxes';

function getStoredValue(cbId) {
  if (typeof window === 'undefined') return false;
  try {
    const data = JSON.parse(window.localStorage.getItem(CHECKBOX_LS_KEY)) || {};
    return data[cbId] || false;
  } catch (e) {
    return false;
  }
}

function setStoredValue(cbId, value) {
  if (typeof window === 'undefined') return;
  try {
    const data = JSON.parse(window.localStorage.getItem(CHECKBOX_LS_KEY)) || {};
    data[cbId] = value;
    window.localStorage.setItem(CHECKBOX_LS_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save checkbox state:', e);
  }
}

export default function LabeledCheckbox({ children, id }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(getStoredValue(id));
  }, [id]);

  const onChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    setStoredValue(id, newValue);
  };

  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
