import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

/**
 *
 * this component is used to display animations to target components;
 *
 * @param {() => void} children
 *
 * @returns ReactComponent
 */

export default function CSSTransition({ children }) {
  const isActive = useCSSTransition();

  return <CSSTransitionComponent $isActive={isActive}>{children}</CSSTransitionComponent>;
}

function useCSSTransition() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsActive(true);
    }, 50);

    return () => clearTimeout(timeId);
  }, []);

  return isActive;
}

const CSSTransitionComponent = styled.div`
  opacity: 0;

  ${(props) =>
    props.$isActive &&
    css`
      opacity: 1;
      transition: all 0.5s ease-in-out;
    `}
`;
