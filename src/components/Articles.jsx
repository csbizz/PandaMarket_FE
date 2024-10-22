/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticlesTitle from './ArticlesTitle';
import c from '../constants';
import { useState } from 'react';

const style = {
  articles: css``,
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
  const [sortOrder, setSortOrder] = useState(c.SORT_ORDER.RECENT);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => setSearchQuery(query);
  const handleSortOrderChange = order => setSortOrder(order);

  return (
    <div id="articles" css={style.articles}>
      <div id="articlesTitleWrapper" css={style.articlesTitleWrapper}>
        <ArticlesTitle onSearch={handleSearch} onSortOrderChange={handleSortOrderChange} />
      </div>
      <div id="articleList" css={style.articleList}>
        <div className="article">asdf</div>
      </div>
    </div>
  );
}
