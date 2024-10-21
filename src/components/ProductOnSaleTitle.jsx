/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import SortOrderSelect from './SortOrderSelect.jsx';
import { useViewport } from '../contexts/ViewportContext.jsx';
import c from '../constants.js';
import Link from 'next/link';

const style = {
  productOnSaleTitle: css`
    width: 120rem;
    height: 4.2rem;

    display: grid;
    gap: 1.2rem;
    grid-template-columns: 1fr 325px 133px 130px;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--gray-900);
    }

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      min-width: 69.5rem;
      max-width: calc(100vw - 4.8rem);

      grid-template-columns: 1fr 242px 133px 130px;
    }

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      width: 34.4rem;
      height: 9.2rem;

      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      column-gap: 1.4rem;
      row-gap: 0.8rem;
    }
  `,
  'search-query': css`
    height: 4.2rem;
    width: 32.5rem;
    border-radius: 12px;
    background-color: var(--gray-100);

    padding: 0.9rem 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    input {
      border: none;
      background-color: inherit;
      width: 100%;
      height: 100%;

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;

      &::placeholder {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.6rem;
        color: var(--gray-400);
      }

      &:focus {
        outline: 0;
        color: var(--gray-800);
      }
    }

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      width: 24.2rem;
    }

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      width: 28.8rem;
    }
  `,
  'regist-button': css`
    height: 4.2rem;
    background-color: var(--Primary-100);
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--gray-100);
    padding: 1.2rem 2.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      transform: translateX(-6.8rem);
    }
  `,
};

function ProductOnSaleTitle({ onSearch, onSortOrderChange }) {
  const viewport = useViewport();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = e => {
    if (e.key === 'Enter') onSearch(searchQuery);
  };

  const registBtn = (
    <Link href="/registration">
      <button css={style['regist-button']}>상품 등록하기</button>
    </Link>
  );
  const searchQry = (
    <div css={style['search-query']}>
      <label htmlFor="search">
        <img src="/Image/ic_search.svg" alt="searchIcon" />
      </label>
      <input
        id="search"
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
  const sortOrderSelect = <SortOrderSelect onChange={onSortOrderChange} />;

  return viewport === c.VIEWPORT.MOBILE ? (
    <div css={style.productOnSaleTitle}>
      <h3>판매 중인 상품</h3>
      {registBtn}
      {searchQry}
      {sortOrderSelect}
    </div>
  ) : (
    <div css={style.productOnSaleTitle}>
      <h3>판매 중인 상품</h3>
      {searchQry}
      {registBtn}
      {sortOrderSelect}
    </div>
  );
}

export default ProductOnSaleTitle;
