/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import c from '@/src/utils/constants';

const style = {
  dropdownMenu: css`
    position: absolute;
    display: grid;
    grid-template-rows: repeat(2, 4.2rem);
    grid-gap: 0;
    margin-top: 0.8rem;
    width: 13rem;
    z-index: 9999;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--gray-200);
      border-bottom: 0;

      background-color: #ffffff;
      color: var(--gray-800);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;

      &:first-child {
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;
      }

      &:last-child {
        border-bottom: 1px solid var(--gray-200);
        border-bottom-left-radius: 1.2rem;
        border-bottom-right-radius: 1.2rem;
      }

      &:hover {
        background-color: var(--Primary-100);
        color: var(--gray-50);
        border: none;
      }
    }

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      transform: translateX(-8.8rem);
    }
  `,
};

export default function DropdownMenu({ list, dictionary, onClick }) {
  return (
    <ul id="dropdownMenu" css={style.dropdownMenu}>
      {Object.values(list).map(item => {
        return (
          <li onClick={() => onClick(item)} key={item}>
            {dictionary[item]}
          </li>
        );
      })}
    </ul>
  );
}
