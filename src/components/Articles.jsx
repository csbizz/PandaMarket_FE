/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticlesTitle from './ArticlesTitle';

const style = {
  articles: css`
    height: 75.6rem;
  `,
  articlesTitleWrapper: css`
    margin-bottom: 2.4rem;
  `,
  articleList: css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .article {
      height: 13.8rem;
      background-color: #fcfcfc;
    }
  `,
};

export default function Articles() {
  return (
    <div id="articles" css={style.articles}>
      <div id="articlesTitleWrapper" css={style.articlesTitleWrapper}>
        <ArticlesTitle />
      </div>
      <div id="articleList" css={style.articleList}>
        <div className="article">asdf</div>
        <div className="article">asdf</div>
        <div className="article">asdf</div>
      </div>
    </div>
  );
}
