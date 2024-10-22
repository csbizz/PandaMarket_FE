/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import TagButton from '@/src/components/TagButton.jsx';
import useValidation from '@/src/hooks/useValidation.js';
import c from '@/src/constants.js';

const style = {
  registrationPage: css`
    margin: 2.6rem auto 16.2rem auto;
    max-width: 120rem;
    width: 100%;
    height: 83rem;

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      margin: 1.8rem auto 19.4rem auto;
      height: 80.6rem;
      padding: 0 2.4rem;
    }

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      margin: 2.4rem auto 18.6rem auto;
      padding: 0 1.6rem;
    }
  `,
  title: css`
    display: flex;
    justify-content: space-between;
    height: 4.2rem;

    margin-bottom: 2.4rem;

    p {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--gray-800);
    }
  `,
  registButton: css`
    padding: 1.2rem 2.3rem;
    border-radius: 8px;

    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--gray-100);
  `,
  info: css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      gap: 2.4rem;
    }
  `,
  inputWrap: css`
    label {
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 700;
      color: var(--gray-800);
    }

    input {
      width: 100%;
      border-radius: 12px;
      height: 5.6rem;
      padding: 1.6rem 2.4rem;
      background-color: var(--gray-100);
      border: 0;
      margin-top: 1.6rem;

      &:focus {
        outline: thin solid var(--Primary-100);
      }

      &.error {
        outline: thin solid var(--error-red);
      }
    }

    textarea {
      width: 100%;
      border-radius: 12px;
      height: 28.2rem;
      padding: 1.6rem 2.4rem;
      background-color: var(--gray-100);
      border: 0;
      margin-top: 1.6rem;

      &:focus {
        outline: thin solid var(--Primary-100);
      }

      &.error {
        outline: thin solid var(--error-red);
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 600;
      color: var(--error-red);
      margin-top: 0.8rem;
      margin-left: 1.6rem;

      &.tag-error {
        margin-bottom: 0.8rem;
      }
    }
  `,
  tagButtonWrap: css`
    margin-top: 1.4rem;
  `,
};

const init = {
  value: '',
  isOK: true,
  errMsg: '',
};

function RegistrationPage() {
  const validation = useValidation();
  const [nameObj, setNameObj] = useState({ name: 'name', ...init });
  const [descriptionObj, setDescriptionObj] = useState({
    name: 'description',
    ...init,
  });
  const [priceObj, setPriceObj] = useState({ name: 'price', ...init });
  const [tagObj, setTagObj] = useState({ name: 'tag', ...init });
  const [tags, setTags] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleValidation = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        return validation(name, value, setNameObj);
      case 'description':
        return validation(name, value, setDescriptionObj);
      case 'price':
        return validation(name, value, setPriceObj);
      case 'tag':
        return validation(name, value, setTagObj);
      default:
    }
  };
  const handleAddTag = e => {
    if (e.key === 'Enter') {
      if (!handleValidation(e)) return;
      if (tags.includes(e.target.value))
        return setTagObj(prev => {
          return { ...prev, errMsg: '같은 태그가 존재합니다' };
        });

      setTags(prev => [...prev, e.target.value]);
      setTagObj(prev => {
        return { ...prev, value: '' };
      });
    }
  };
  const handleRemoveTag = name => {
    const idx = tags.findIndex(t => t === name);
    const newTags = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
    setTags(newTags);
  };

  useEffect(() => {
    setCanSubmit(nameObj.isOK && descriptionObj.isOK && priceObj.isOK && tagObj.isOK);
  }, [nameObj.isOK, descriptionObj.isOK, priceObj.isOK, tagObj.isOK]);

  useEffect(() => setCanSubmit(false), []); // 최초 렌더링시 등록 버튼 비활성화

  return (
    <main id="registration" css={style.registrationPage}>
      <form>
        <div css={style.title}>
          <p>상품 등록하기</p>
          <button css={style.registButton} className="button" type="button" disabled={!canSubmit}>
            등록
          </button>
        </div>
        <div css={style.info}>
          <div css={style.inputWrap}>
            <label htmlFor="name">상품명</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="상품명을 입력해주세요"
              className={nameObj.isOK ? '' : 'error'}
              value={nameObj.value}
              onChange={e =>
                setNameObj(prev => {
                  return { ...prev, value: e.target.value };
                })
              }
              onBlur={handleValidation}
            />
            <p>{nameObj.errMsg}</p>
          </div>
          <div css={style.inputWrap}>
            <label htmlFor="description">상품 소개</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="10"
              placeholder="상품 소개를 입력해주세요"
              className={descriptionObj.isOK ? '' : 'error'}
              value={descriptionObj.value}
              onChange={e =>
                setDescriptionObj(prev => {
                  return { ...prev, value: e.target.value };
                })
              }
              onBlur={handleValidation}
            ></textarea>
            <p>{descriptionObj.errMsg}</p>
          </div>
          <div css={style.inputWrap}>
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="판매 가격을 입력해주세요"
              className={priceObj.isOK ? '' : 'error'}
              value={priceObj.value}
              onChange={e =>
                setPriceObj(prev => {
                  return { ...prev, value: e.target.value };
                })
              }
              onBlur={handleValidation}
            />
            <p>{priceObj.errMsg}</p>
          </div>
          <div css={style.inputWrap}>
            <label htmlFor="tag">태그</label>
            <input
              id="tag"
              name="tag"
              type="text"
              placeholder="태그를 입력해주세요"
              className={tagObj.isOK ? '' : `${style.error}`}
              value={tagObj.value}
              onChange={e =>
                setTagObj(prev => {
                  return { ...prev, value: e.target.value };
                })
              }
              onBlur={handleValidation}
              onKeyDown={handleAddTag}
            />
            <p className="tag-error">{tagObj.errMsg}</p>
            <div className="tag-button-wrap" css={style.tagButtonWrap}>
              {tags.map(tag => (
                <TagButton name={tag} key={tag} onClick={handleRemoveTag} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default RegistrationPage;
