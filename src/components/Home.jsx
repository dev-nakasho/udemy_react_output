import { useContext } from "react";
import { useHistory } from "react-router";
import { CountContext } from "../providers/CountProvider";
import { PrimaryButton } from "./atoms/button/PrimaryButton";

export const Home = () => {
  const history = useHistory();
  const onClickPage1 = () => history.push("/page1");
  const onClickPage2 = () => history.push("/page2");

  const { count, setCount } = useContext(CountContext);
  const countUp = () => setCount(count + 1);
  return (
    <>
      <h1>Homeページです。</h1>
      <p>{count}</p>
      <PrimaryButton countUp={countUp}>Count Up</PrimaryButton>
      <br />
      <br />
      <button onClick={onClickPage1}>Page1</button>
      <br />
      <button onClick={onClickPage2}>Page2</button>
    </>
  );
};
