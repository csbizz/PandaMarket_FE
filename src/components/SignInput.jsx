/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = {
  signInput: css`
    label {
      font-size: 1.8rem;
      line-height: 2.148rem;
      font-weight: 700;
      color: var(--gray-800);
    }

    p {
      font-size: 1.5rem;
      line-height: 1.79rem;
      font-weight: 600;
      color: var(--error-red);
      margin-top: 0.8rem;
      margin-left: 1.6rem;
    }

    .input-wrap {
      position: relative;

      img {
        position: absolute;
        right: 2.4rem;
        bottom: 1.6rem;
      }
    }

    input {
      width: 100%;
      border-radius: 1.2rem;
      height: 5.6rem;
      margin-top: 1.6rem;
      padding: 2.4rem 1.6rem;
      background-color: var(--gray-100);
      border: 0;

      &:focus {
        outline: thin solid var(--Primary-100);
      }

      &.error {
        outline: thin solid var(--error-red);
      }
    }
  `,
};

function SignInput({ label, type, placeholder }) {
  return (
    <div css={style.signInput}>
      <label htmlFor={`for_${type}`}>{label}</label>
      <div className="input-wrap">
        <input id={`for_${type}`} type={type} placeholder={placeholder} />
        {type === 'password' && <img src="/Image/btn_visibility_on_24px.png" alt="비밀번호 표시" />}
      </div>
      <p></p>
    </div>
  );
}

export default SignInput;

{
  /* <div className="label-wrap">
  <label className="input__id">
    이메일
    <br />
    <input
      type="email"
      placeholder="이메일을 입력해주세요"
      className="js-input__id"
    />
    <p className="error-msg js-error-msg"></p>
  </label>
</div> */
}
