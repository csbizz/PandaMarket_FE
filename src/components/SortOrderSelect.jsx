/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useViewport } from '../contexts/ViewportContext.jsx';
import c from '../utils/constants.js';
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';
import { useDropdown } from '../contexts/DropdownContext';

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
};

function DropdownButton() {
  const viewport = useViewport();
  const { dropdownOpen, setDropdownOpen, item: sortOrder = c.SORT_ORDER.RECENT } = useDropdown();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div id="sortOrder" css={style.sortOrder} onClick={toggleDropdown}>
      {viewport !== c.VIEWPORT.MOBILE && c.SORT_ORDER_MSG[sortOrder]}
      <Image
        src={viewport !== c.VIEWPORT.MOBILE ? '/Image/ic_arrow_down.png' : '/Image/ic_sort.png'}
        alt="sortOrderImg"
        width={24}
        height={24}
      />
    </div>
  );
}

export default function SortOrderSelect() {
  return (
    <div id="sortOrderSelect">
      <DropdownMenu DropdownButton={<DropdownButton />} list={c.SORT_ORDER} dictionary={c.SORT_ORDER_MSG} />
    </div>
  );
}
