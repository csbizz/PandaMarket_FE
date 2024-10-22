/** @jsxImportSource @emotion/react */
import BestArticles from '@/src/components/BestArticles';
import Articles from '@/src/components/Articles';
import { css } from '@emotion/react';

const style = {
  freeBoard: css`
    margin: 0 auto;
    min-height: calc(var(--adjust-vh));
    padding-top: 2.4rem;
  `,
  bestArticlesWrapper: css`
    margin-bottom: 4rem;
  `,
  articlesWrapper: css`
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  `,
};

function FreeBoard() {
  return (
    <div id="freeBoard" css={style.freeBoard}>
      <div id="bestArticlesWrapper" css={style.bestArticlesWrapper}>
        <BestArticles />
      </div>
      <div id="articlesWrapper" css={style.articlesWrapper}>
        <Articles />
      </div>
    </div>
  );
}

export default FreeBoard;
