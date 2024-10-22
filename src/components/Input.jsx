/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const style = {
  input: css`
    label {
      line-height: 2.6rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 600;
      color: var(--error-red);
      margin-top: 0.8rem;
      margin-left: 1.6rem;

      &.tag-error {
        margin-bottom: 0.8rem;
      }
    }

    input,
    textarea {
      margin-top: 1.6rem;
    }
  `,
};

export default function Input({ inputObj, label, placeholder, onBlur, textarea = false }) {
  const { value: inputValue, name, type, errMsg } = inputObj;
  const classNames = errMsg ? 'input error' : 'input';
  const [value, setValue] = useState(inputValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleBlur = () => {
    onBlur({ value, name, type, errMsg });
  };

  return textarea ? (
    <div id="input" css={style.input}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={handleChange}
      ></textarea>
      <p>{errMsg}</p>
    </div>
  ) : (
    <div id="input" css={style.input}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={handleChange}
      />
      <p>{errMsg}</p>
    </div>
  );
}
