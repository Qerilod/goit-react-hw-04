import s from "./ImageCard.module.css";

const ImageCard = ({ onClick, image }) => (
  <div className={s.container} onClick={() => onClick(image)}>
    <img className={s.Img} src={image.urls.small} alt={image.description} />
  </div>
);

export default ImageCard;
