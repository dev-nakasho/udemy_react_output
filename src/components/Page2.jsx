import { useHistory } from "react-router";

export const Page2 = () => {
  const history = useHistory();
  const onClickDetailB = () => {
    console.log(history);
  };
  return (
    <>
      <h1>Page2です。</h1>
      <button onClick={onClickDetailB}>DetailB</button>
    </>
  );
};
