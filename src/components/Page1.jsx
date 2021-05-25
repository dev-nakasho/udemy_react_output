import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // const { state } = useLocation();
  const history = useHistory();
  const onClickDetailA = () =>
    // history.push({ pathname: "/page1/detailA", state: state });
    history.push("/page1/detailA");
  const onClickDetailB = () => history.push("/page1/detailB");
  return (
    <>
      <h1>Page1です。</h1>
      <button onClick={onClickDetailA}>詳細A</button>
      <br />
      <button onClick={onClickDetailB}>詳細B</button>
      <br />
      <Link to="/">ホームへ</Link>
    </>
  );
};
