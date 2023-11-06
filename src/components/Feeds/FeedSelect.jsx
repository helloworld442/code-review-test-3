import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down-solid.svg";
import { useState } from "react";

export default function FeedSelect({ trigger, items, onToggleSelect }) {
  const [isOpen, onOpen, onClose] = useSelect({ triggerFn: onToggleSelect });

  return (
    <StFeedSelect>
      <FeedSelectTrigger onClick={onOpen}>
        {trigger}
        <ArrowDown />
      </FeedSelectTrigger>
      {isOpen && (
        <FeedSelectMenu>
          {items.map((item) => (
            <FeedSelectItem key={item} onClick={() => onClose(item)}>
              {item}
            </FeedSelectItem>
          ))}
        </FeedSelectMenu>
      )}
    </StFeedSelect>
  );
}

function useSelect({ triggerFn }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = (item) => {
    triggerFn(item);
    setIsOpen(false);
  };

  return [isOpen, onOpen, onClose];
}

const StFeedSelect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 180px;
  border: 2px solid #ccc;
  border-radius: 4px;
  z-index: 50;
`;

const FeedSelectTrigger = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 650;
  font-family: sans-serif;

  svg {
    margin-left: 48px;
    width: 1rem;
    height: 1rem;
  }
`;

const FeedSelectMenu = styled.ul`
  background: #fff;
`;

const FeedSelectItem = styled.li`
  padding: 12px;
  font-size: 1rem;
  font-weight: 650;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    background: rgb(64, 58, 107, 0.1);
  }
`;
