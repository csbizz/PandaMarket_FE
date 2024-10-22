/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { priceFunc } from '../utils/utils.js';
import c from '../constants.js';
import Image from 'next/image';

const style = {
  card: css`
    display: grid;
    gap: 1.6rem;
    grid-template-rows: 1fr auto;

    .imageWrapper {
      width: 22.1rem;
      aspect-ratio: 1/1;
      position: relative;

      border-radius: 16px;

      @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
        &.best {
          width: 343px;
          border-radius: 19.46px;
        }
      }

      @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
        width: 16.8rem;
        border-radius: 12px;
      }
    }
  `,
  info: css`
    height: 8rem;

    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `,
  title: css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--gray-800);
  `,
  price: css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--gray-800);
  `,
  favorite: css`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--gray-600);

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
};

function ProductCard({ item, type }) {
  const { favoriteCount, price, name, images } = item;
  const imgUrl = images?.length ? images[0] : '/Image/img_default.png';
  const priceString = priceFunc(price);

  return (
    <div id="productCard" css={style.card}>
      <div className="imageWrapper">
        <Image fill src={imgUrl} alt={name} className={`${type}`} />
      </div>
      <div css={style.info}>
        <h5 css={style.title}>{name}</h5>
        <p css={style.price}>{priceString}원</p>
        <p css={style.favorite}>
          <img src="/Image/ic_heart.svg" alt="favorite heart" /> {favoriteCount}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
