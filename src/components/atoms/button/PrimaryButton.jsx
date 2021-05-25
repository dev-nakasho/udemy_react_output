import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children, countUp } = props;
  return <SButton onClick={countUp}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  &:hover {
    background-color: #4ba84b;
  }
`;
