import { Watch } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => (
  <div className={s.loader}>
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#0D9FE7"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
