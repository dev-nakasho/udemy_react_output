import { DetailA } from "../components/DetailA";
import { DetailB } from "../components/DetailB";
import { Page1 } from "../components/Page1";

export const Page1Routes = [
  {
    exact: true,
    url: "/",
    children: <Page1 />,
  },
  {
    exact: false,
    url: "/DetailA",
    children: <DetailA />,
  },
  {
    exact: false,
    url: "/DetailB",
    children: <DetailB />,
  },
];
