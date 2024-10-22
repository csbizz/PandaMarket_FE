/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useViewport } from '../contexts/ViewportContext.jsx';
import c from '../constants.js';

const style = {
  sortOrder: css`
    height: 100%;
    width: 13rem;
    border-radius: 12px;
    border: 1px solid var(--gray-200);
    padding: 1.2rem 2rem;
    background-color: white;

    color: var(--gray-800);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      width: 4.2rem;

      justify-content: center;
    }
  `,

  sortOrderList: css`
    position: absolute;
    display: grid;
    grid-template-rows: repeat(2, 4.2rem);
    grid-gap: 0;
    margin-top: 0.8rem;
    width: 13rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--gray-200);
      border-bottom: 0;
      border-top-left-radius: 1.2rem;
      border-top-right-radius: 1.2rem;
      background-color: #ffffff;
      color: var(--gray-800);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;

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

function SortOrderSelect({ initialSortOrder = c.SORT_ORDER.RECENT, onChange }) {
  const viewport = useViewport();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const handleOrderChange = o => {
    setSortOrder(o);
    onChange(o);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div id="sortOrderSelect">
      <div id="sortOrder" css={style.sortOrder} onClick={toggleDropdown}>
        {viewport !== c.VIEWPORT.MOBILE && c.SORT_ORDER_MSG[sortOrder]}
        <img src={viewport !== c.VIEWPORT.MOBILE ? '/Image/ic_arrow_down.svg' : '/Image/ic_sort.svg'} alt="sortOrderImg" />
      </div>
      {dropdownOpen && (
        <ul id="sortOrderList" css={style.sortOrderList}>
          {Object.values(c.SORT_ORDER).map(o => {
            return (
              <li onClick={() => handleOrderChange(o)} key={o}>
                {c.SORT_ORDER_MSG[o]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SortOrderSelect;
