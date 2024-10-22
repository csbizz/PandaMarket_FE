/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import TagButton from '@/src/components/TagButton.jsx';
import useValidation from '@/src/hooks/useValidation.js';
import c from '@/src/constants.js';

const style = {
  registrationPage: css`
    padding-top: 2.6rem;
    padding-bottom: 16.2rem;

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
      line-height: 2.6rem;
    }

    input,
    textarea {
      margin-top: 1.6rem;
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

const emptyInputObj = {
  value: '',
  errMsg: '',
};

export default function RegistrationPage() {
  const validation = useValidation();
  const [nameObj, setNameObj] = useState({ name: 'name', ...emptyInputObj });
  const [descriptionObj, setDescriptionObj] = useState({ name: 'description', ...emptyInputObj });
  const [priceObj, setPriceObj] = useState({ name: 'price', ...emptyInputObj });
  const [tagObj, setTagObj] = useState({ name: 'tag', ...emptyInputObj });
  const [tags, setTags] = useState([]);
  const [validationCheck, setValidationCheck] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  const handleValidation = e => {
    const name = e.target.name;
    const value = e.target.value;

    // NOTE Validation
    const errMsg = validation(name, value);

    // NOTE count validation
    switch (name) {
      case 'name':
        setValidationCheck(prev => {
          return { ...prev, nameCheck: true };
        });
        break;
      case 'description':
        setValidationCheck(prev => {
          return { ...prev, descCheck: true };
        });
        break;
      case 'price':
        setValidationCheck(prev => {
          return { ...prev, priceCheck: true };
        });
        break;
      case 'tag':
        setValidationCheck(prev => {
          return { ...prev, tagCheck: true };
        });
        break;
    }

    // NOTE Set input Ojbect
    switch (name) {
      case 'name':
        setNameObj(prev => {
          return { ...prev, errMsg };
        });
        break;
      case 'description':
        setDescriptionObj(prev => {
          return { ...prev, errMsg };
        });
        break;
      case 'price':
        setPriceObj(prev => {
          return { ...prev, errMsg };
        });
        break;
      case 'tag':
        setTagObj(prev => {
          return { ...prev, errMsg };
        });
        break;
    }

    // NOTE errMsg가 없음 = validation을 통과함.
    return !errMsg;
  };
  const handleAddTag = e => {
    if (e.key === 'Enter') {
      if (tags.length >= 5)
        return setTagObj(prev => {
          return { ...prev, errMsg: '태그는 5개까지 입력 가능합니다.' };
        });
      if (tags.includes(e.target.value))
        return setTagObj(prev => {
          return { ...prev, errMsg: '같은 태그가 존재합니다' };
        });
      if (!handleValidation(e)) return;

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
    // NOTE 4개 항목의 최초 Validation이 진행되지 않았을 경우, false를 리턴.
    if (Object.keys(validationCheck).length !== 4) return setCanSubmit(false);

    // NOTE validation 통과 여부
    const isOk = !(nameObj.errMsg || descriptionObj.errMsg || priceObj.errMsg || tagObj.errMsg);

    // NOTE validation을 통과했는가? + 태그가 1개 이상인가?
    return setCanSubmit(isOk && tags.length > 0);
  }, [nameObj.errMsg, descriptionObj.errMsg, priceObj.errMsg, tagObj.errMsg, validationCheck]);

  return (
    <div id="registration" css={style.registrationPage}>
      <form>
        <div css={style.title}>
          <p>상품 등록하기</p>
          <button css={style.registButton} className="button" type="button" disabled={!canSubmit}>
            등록
          </button>
        </div>
        <div css={style.info}>
          <div css={style.inputWrap}>
            <label htmlFor="name" className="label">
              상품명
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="상품명을 입력해주세요"
              className={nameObj.errMsg ? `input error` : `input`}
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
            <label htmlFor="description" className="label">
              상품 소개
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="상품 소개를 입력해주세요"
              className={descriptionObj.errMsg ? 'input error' : 'input'}
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
            <label htmlFor="price" className="label">
              판매가격
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="판매 가격을 입력해주세요"
              className={priceObj.errMsg ? 'input error' : 'input'}
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
            <label htmlFor="tag" className="label">
              태그
            </label>
            <input
              id="tag"
              name="tag"
              type="text"
              placeholder="태그를 입력해주세요"
              className={tagObj.errMsg ? 'input error' : `input`}
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
    </div>
  );
}
