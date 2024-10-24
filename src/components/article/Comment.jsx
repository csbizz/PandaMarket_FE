/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DropdownMenu from '../DropdownMenu';
import c from '@/src/utils/constants';

const style = {
  comment: css`
    min-height: 10rem;
    background-color: #fcfcfc;
    border-bottom: 1px solid var(--gray-200);

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 1.4rem;
        line-height: 2.4rem;
        font-weight: 400;
        color: var(--gray-800);
      }
    }

    .info {
      margin-top: 2.4rem;
      display: flex;

      > div {
        display: inline-block;
        margin-left: 0.8rem;

        > span {
          display: block;
          font-size: 1.2rem;
          line-height: 1.8rem;
          font-weight: 400;

          &.nickname {
            color: var(--gray-600);
          }

          &.time {
            margin-top: 0.4rem;
            color: var(--gray-400);
          }
        }
      }
    }
  `,
};

export default function Comment({ ModifyButton }) {
  return (
    <div className="comment" css={style.comment}>
      <div className="content">
        <p>혹시 사용기간이 어떻게 되실까요?</p>
        <DropdownMenu DropdownButton={ModifyButton} list={c.MODIFY} dictionary={c.MODIFY_MSG} />
      </div>

      <div className="info">
        <img src="/Image/ic_profile.png" alt="profile Image" width={32} height={32} />
        <div>
          <span className="nickname">똑똑한판다</span>
          <span className="time">1시간 전</span>
        </div>
      </div>
    </div>
  );
}
