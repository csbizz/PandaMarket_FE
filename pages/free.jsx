/** @jsxImportSource @emotion/react */
import BestArticles from '@/src/components/BestArticles';
import Articles from '@/src/components/Articles';
import { css } from '@emotion/react';

const style = {
  freeBoard: css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
  `,
  bestArticlesWrapper: css`
    margin-top: 2.4rem;
    margin-bottom: 4rem;
  `,
  articlesWrapper: css`
    margin-top: 4rem;
    margin-bottom: 29.3rem;
  `,
};

function FreeBoard() {
  return (
    <main id="freeBoard" css={style.freeBoard}>
      <div id="bestArticlesWrapper" css={style.bestArticlesWrapper}>
        <BestArticles />
      </div>
      <div id="articlesWrapper" css={style.articlesWrapper}>
        <Articles />
      </div>
    </main>
  );
}

export default FreeBoard;
