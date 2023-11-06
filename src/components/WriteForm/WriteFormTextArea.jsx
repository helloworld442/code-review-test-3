import styled from "styled-components";
import "../../utils/hightlight.css";
import { useState } from "react";
import useTextArea from "./useTextArea";
import useHightlightText from "./useHightLightText";

export default function WriteFormTextArea({ name, value, error, label, onChange }) {
  const textareaRef = useTextArea(value);
  const [isOpen, setIsOpen] = useState(false);
  const { hightlightText, hightlightRegex, checkFn, printFn } = useHightlightText(value);

  const onToggleButton = () => setIsOpen(!isOpen);

  return (
    <WriteFormTextAreaBox>
      <WriteFormTextAreaLabel>{label}</WriteFormTextAreaLabel>

      <WriteFormTextAreaDesc>
        <span id={isOpen ? "active" : ""} onClick={onToggleButton}>
          미리보기
        </span>
      </WriteFormTextAreaDesc>

      <WriteFormTextAreaContent>
        <div className="textarea-box">
          <FormTextAreaPre>
            <code dangerouslySetInnerHTML={{ __html: hightlightRegex }} />
          </FormTextAreaPre>
          <FormTextArea
            ref={textareaRef}
            name={name}
            value={value}
            onChange={(e) => {
              onChange(e);
              checkFn(e);
            }}
            spellCheck="false"
          />
        </div>

        {isOpen && (
          <WriteFormTextAreaView>
            <code dangerouslySetInnerHTML={{ __html: hightlightText }} />
          </WriteFormTextAreaView>
        )}
      </WriteFormTextAreaContent>
    </WriteFormTextAreaBox>
  );
}

const WriteFormTextAreaBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const WriteFormTextAreaLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const WriteFormTextAreaDesc = styled.div`
  margin-bottom: 12px;
  border-bottom: 2px solid #e8e8e8;

  span {
    display: inline-block;
    padding: 12px;
    font-size: 0.9rem;
    font-weight: 550;
    font-family: "Pretendard";
    cursor: pointer;
  }

  #active {
    border-bottom: 3px solid rgb(64, 58, 107, 0.8);
  }
`;

const WriteFormTextAreaContent = styled.div`
  display: flex;
  gap: 12px;

  .textarea-box {
    position: relative;
    width: 100%;
    min-height: 400px;
    box-sizing: border-box;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    background: #fff;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none;

    pre,
    textarea {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const FormTextAreaPre = styled.pre`
  width: 100%;
  padding: 14px 12px;
  box-sizing: border-box;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
  caret-color: #333;
  white-space: pre-wrap;
  overflow-y: hidden;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 14px 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: transparent;
  background: transparent;
  caret-color: #333;
  line-height: 1.5rem;
  resize: none;
  z-index: 1;
  white-space: pre-wrap;
  overflow-y: hidden;
  letter-spacing: 1px;
`;

const WriteFormTextAreaView = styled.pre`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding: 14px 12px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
  background: #fff;
  line-height: 1.5rem;
  white-space: pre-wrap;
  overflow-y: scroll;
  letter-spacing: 1px;
`;
