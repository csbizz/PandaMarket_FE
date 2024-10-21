//     <script type="module" src="../src/js/login.js"></script>
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import SignInput from '@/src/components/SignInput.jsx';
import SignLayout from '@/src/layouts/SignLayout';

function LoginPage() {
  return (
    <SignLayout>
      <main
        css={css`
          height: calc(100vh - 23rem - var(--adjust-vh));
        `}
      >
        <form id="loginField">
          <SignInput label="이메일" type="email" placeholder="이메일을 입력해주세요" />
          <SignInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" />
          <button id="loginButton" type="button" disabled>
            로그인
          </button>
        </form>
        <section className="sns-login">
          <span>간편 로그인하기</span>
          <div>
            <Link href="https://www.google.com/">
              <img src="/Image/GoogleBtn.png" alt="구글 버튼" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <img src="/Image/KakaoTalkBtn.png" alt="카카오톡 버튼" />
            </Link>
          </div>
        </section>
        <section className="footer-link">
          <p>
            판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
          </p>
        </section>
        {/* <div class="modal off">
        <div class="modal-content">
          <p>비밀번호가 일치하지 않습니다.</p>
          <div class="button">확인</div>
        </div>
      </div> */}
      </main>
    </SignLayout>
  );
}

export default LoginPage;
