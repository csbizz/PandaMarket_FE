/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArticlesTitle from './ArticlesTitle';
import c from '../constants';
import { useState } from 'react';
import Image from 'next/image';

const style = {
  articlesTitleWrapper: css`
    margin-bottom: 2.4rem;
  `,
  articleList: css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  `,
  article: css`
    height: 13.8rem;
    background-color: #fcfcfc;

    .content {
      margin-bottom: 1.6rem;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 600;
        color: var(--gray-800);
      }
    }

    .info {
      margin-bottom: 2.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        align-items: center;
      }

      span {
        margin-left: 0.8rem;
      }
    }
  `,
};

function Article() {
  return (
    <div className="article" css={style.article}>
      <div className="content">
        <p>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
        <Image src="/Image/img_article_default.png" alt="default image" width={72} height={72} />
      </div>
      <div className="info">
        <div>
          <Image src="/Image/ic_profile.png" alt="profile image" width={24} height={24} />
          <span className="nickname">총명한판다</span>
          <span className="date">2024. 04. 16</span>
        </div>
        <div>
          <Image src="/Image/ic_heart.svg" alt="favorite heart" width={16} height={16} />
          <span className="heart">9999+</span>
        </div>
      </div>
    </div>
  );
}

export default function Articles() {
  const [sortOrder, setSortOrder] = useState(c.SORT_ORDER.RECENT);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => setSearchQuery(query);
  const handleSortOrderChange = order => setSortOrder(order);

  return (
    <div id="articles">
      <div id="articlesTitleWrapper" css={style.articlesTitleWrapper}>
        <ArticlesTitle onSearch={handleSearch} onSortOrderChange={handleSortOrderChange} />
      </div>
      <div id="articleList" css={style.articleList}>
        <Article />
      </div>
    </div>
  );
}
