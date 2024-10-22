/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = {
  tagButton: css`
    background-color: var(--gray-100);
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0.6rem 1.2rem 0.6rem 1.6rem;
    border-radius: 26px;

    height: 3.6rem;

    img {
      margin-left: 0.8rem;
    }
  `,
};

function TagButton({ name, onClick }) {
  const handleClick = () => onClick(name);

  return (
    <button id="tagButton" css={style.tagButton} type="button" onClick={handleClick}>
      {`#${name}`}
      <img src="/Image/ic_X.png" alt="X" />
    </button>
  );
}

export default TagButton;
