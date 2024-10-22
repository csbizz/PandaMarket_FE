/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';

const style = {
  BestArticles: css`
    height: 21.7rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 2.4rem;
    }

    #BestArticleList {
      display: flex;
      gap: 2.4rem;
    }
  `,
  BestArticle: css`
    width: 38.4rem;
    height: 16.9rem;
    background-color: var(--gray-50);
    padding: 0 2.4rem;

    .best {
      display: flex;
      justify-content: center;
      align-items: center;

      color: white;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 600;
      text-align: center;

      width: 10.2rem;
      padding: 0.2rem 2.4rem;
      border-bottom-right-radius: 16px;
      border-bottom-left-radius: 16px;
      background-color: var(--Primary-100);

      span {
        margin-left: 0.5rem;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin-top: 1.6rem;
      margin-bottom: 1.8rem;

      p {
        width: 25.6rem;

        color: var(--gray-800);
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 600;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;

      .nickname {
        margin-right: 0.8rem;
      }

      .heart {
        margin-left: 0.4rem;
      }
    }
  `,
};

function BestArticle() {
  return (
    <div className="article" css={style.BestArticle}>
      <div className="best">
        <Image src="/Image/ic_medal.png" alt="medal" width={16} height={16} />
        <span>Best</span>
      </div>
      <div className="content">
        <p>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
        <Image src="/Image/img_article_default.png" alt="default image" width={72} height={72} />
      </div>
      <div className="info">
        <div>
          <span className="nickname">총명한판다</span>
          <Image src="/Image/ic_heart.svg" alt="favorite heart" width={16} height={16} />
          <span className="heart">9999+</span>
        </div>
        <div>
          <p className="date">2024. 04. 16</p>
        </div>
      </div>
    </div>
  );
}

export default function BestArticles() {
  return (
    <div id="BestArticles" css={style.BestArticles}>
      <h2>베스트 게시글</h2>
      <div id="BestArticleList">
        <BestArticle />
        <BestArticle />
        <BestArticle />
      </div>
    </div>
  );
}
