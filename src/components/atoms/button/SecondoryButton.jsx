import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondoryButton = (props) => {
  const { children, countUp } = props;
  return <SButton onClick={countUp}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  &:hover {
    background-color: #2323df;
  }
`;
