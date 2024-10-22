/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = {
  articlePost: css`
    padding-top: 2.4rem;

    .title {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 700;
        color: var(--gray-800);
      }

      button {
        padding: 1.2rem 2.3rem;
        border-radius: 8px;

        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 600;
        color: var(--gray-100);
      }
    }

    form {
      margin-top: 3.2rem;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        label {
          font-size: 1.8rem;
          line-height: 2.6rem;
          font-weight: 700;
          color: var(--gray-800);
        }
      }
    }
  `,
};
export default function ArticlePost() {
  return (
    <div id="articlePost" css={style.articlePost}>
      <div className="title">
        <span>게시글 쓰기</span>
        <button type="button" className="button" disabled>
          등록
        </button>
      </div>
      <form>
        <div>
          <label htmlFor="title">*제목</label>
          <input type="text" id="title" />
        </div>
      </form>
    </div>
  );
}
