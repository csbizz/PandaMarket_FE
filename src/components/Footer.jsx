/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import c from '../constants.js';
import Link from 'next/link';

const style = {
  footer: css`
    height: 16rem;
    background-color: var(--gray-900);
    padding: 3.2rem 20rem 10.8rem 20rem;
    color: var(--gray-400);

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
  `,
  footerLink: css`
    display: flex;
    gap: 3rem;
    color: var(--gray-200);
  `,
  snsLink: css`
    display: flex;
    gap: 1.2rem;

    img {
      width: 20px;
      height: 20px;
    }
  `,
};

function Footer() {
  return (
    <footer css={style.footer}>
      <div>
        <p>©codeit - 2024</p>
      </div>
      <div id="footerLink" css={style.footerLink}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/faq">FAQ</Link>
      </div>
      <div id="snsLink" css={style.snsLink}>
        <Link href="https://www.facebook.com/">
          <img src="/Image/ic_facebook.png" alt="facebook" />
        </Link>
        <Link href="https://twitter.com/home">
          <img src="/Image/ic_twitter.png" alt="twitter" />
        </Link>
        <Link href="https://www.youtube.com/">
          <img src="/Image/ic_youtube.png" alt="youtube" />
        </Link>
        <Link href="https://www.instagram.com/">
          <img src="/Image/ic_instagram.png" alt="instagram" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
