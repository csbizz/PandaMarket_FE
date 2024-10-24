/** @jsxImportSource @emotion/react */
import DropdownMenu from '@/src/components/DropdownMenu';
import Input from '@/src/components/Input';
import c from '@/src/utils/constants';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Comment from './Comment';

const style = {
  articleDetailPage: css`
    padding-top: 3.4rem;
  `,
  article: css`
    #articleHeader {
      border-bottom: 1px solid var(--gray-200);
    }

    #title {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 700;
        color: var(--gray-800);
      }
    }

    #info {
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
      display: inline-flex;
      gap: 3.2rem;

      > div {
        display: flex;
        align-items: center;

        .nickname {
          margin-left: 1.6rem;
          margin-right: 0.8rem;

          font-size: 1.4rem;
          line-height: 2.4rem;
          font-weight: 500;
          color: var(--gray-600);
        }

        .date {
          font-size: 1.4rem;
          line-height: 2.4rem;
          font-weight: 400;
          color: var(--gray-400);
        }
      }

      hr {
        border-color: var(--gray-200);
      }

      button {
        padding: 0.4rem 1.2rem;
        border: 1px solid var(--gray-200);
        border-radius: 35px;
        display: flex;
        align-items: center;

        span {
          font-size: 1.6rem;
          line-height: 2.6rem;
          font-weight: 500;
          color: var(--gray-500);

          margin-left: 0.4rem;
        }
      }
    }

    #articleContent {
      margin-top: 2.4rem;

      p {
        font-size: 1.8rem;
        line-height: 2.6rem;
        font-weight: 400;
        color: var(--gray-800);
      }
    }
  `,
  comments: css`
    margin-top: 3.2rem;

    #commentsForm {
      button {
        display: block;
        margin-left: auto;

        padding: 1.2rem 2.3rem;
        border-radius: 8px;

        color: var(--gray-100);
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 600;
      }
    }

    #commentsList {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      #noComment {
        margin: 0 auto;
      }
    }
  `,
  returnButton: css`
    margin-top: 6.4rem;
    margin-bottom: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      padding: 1.2rem 6.4rem;
      border-radius: 40px;

      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 600;

      img {
        margin-left: 0.8rem;
      }
    }
  `,
};

function ModifyButton() {
  return (
    <div className="modify-button">
      <Image src="/Image/ic_kebab.png" alt="kebab button" width={24} height={24} />
    </div>
  );
}

export default function ArticleDetail() {
  const [commentObj, setCommentObj] = useState({ ...c.EMPTY_INPUT_OBJ, name: 'comment', type: 'text' });
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div id="articleDetailPage" css={style.articleDetailPage}>
      <div id="article" css={style.article}>
        <div id="articleHeader">
          <div id="title">
            <h1>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</h1>
            <DropdownMenu DropdownButton={<ModifyButton />} list={c.MODIFY} dictionary={c.MODIFY_MSG} />
          </div>

          <div id="info">
            <div>
              <Image src="/Image/ic_profile.png" alt="profile image" width={40} height={40} />
              <span className="nickname">총명한판다</span>
              <span className="date">2024. 01. 02</span>
            </div>

            <hr />

            <button type="button">
              <img src="/Image/ic_heart.png" alt="heart" width={32} height={32} />
              <span>123</span>
            </button>
          </div>
        </div>

        <div id="articleContent">
          <p>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
        </div>
      </div>

      <div id="comments" css={style.comments}>
        <form id="commentsForm">
          <Input inputObj={commentObj} label={'댓글달기'} placeholder={'댓글을 입력해주세요.'} textarea comment />
          <button type="button" className="button" disabled>
            등록
          </button>
        </form>

        <div id="commentsList">
          {isEmpty && <Image id="noComment" src="/Image/img_no_comments.png" alt="no comment Image" width={151} height={208} />}
          <Comment ModifyButton={<ModifyButton />} />
          <Comment ModifyButton={<ModifyButton />} />
          <Comment ModifyButton={<ModifyButton />} />
        </div>
      </div>

      <div id="returnButton" css={style.returnButton}>
        <button type="button" className="button">
          목록으로 돌아가기
          <Image src="/Image/ic_back.png" alt="return Image" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
