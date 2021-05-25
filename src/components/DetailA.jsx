import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../providers/CountProvider";
import { PrimaryButton } from "./atoms/button/PrimaryButton";
// import { SecondoryButton } from "./atoms/button/SecondoryButton";

export const DetailA = () => {
  const { count, setCount } = useContext(CountContext);
  // const countUp3 = () => setCount(count + 3);
  const countUp10 = () => setCount(count + 10);
  return (
    <>
      <h1>DetailAページです。</h1>
      <p>{count}</p>
      <PrimaryButton countUp={countUp10}>Count Up</PrimaryButton>
      <br />
      <br />
      <Link to="/page1">前へ</Link>
      <br />
      <Link to="/">ホームへ</Link>
    </>
  );
};
