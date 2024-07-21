import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => (
  <span className={s.container}>
    <button className={s.btn} onClick={onClick}>
      Load more
    </button>
  </span>
);

export default LoadMoreBtn;
