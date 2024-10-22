/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = {
  BestArticles: css`
    height: 217px;

    h2 {
      font-size: 20px;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 24px;
    }

    #BestArticleList {
      display: flex;
      gap: 24px;

      .article {
        width: 384px;
        height: 169px;
        background-color: var(--gray-50);
      }
    }
  `,
};

export default function BestArticles() {
  return (
    <div id="BestArticles" css={style.BestArticles}>
      <h2>베스트 게시글</h2>
      <div id="BestArticleList">
        <div className="article">asdf</div>
        <div className="article">asdf</div>
        <div className="article">asdf</div>
      </div>
    </div>
  );
}
