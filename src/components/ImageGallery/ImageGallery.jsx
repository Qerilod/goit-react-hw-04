import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  } else {
    return (
      <ul className={s.list}>
        {images.map((image) => (
          <li className={s.listItem} key={image.id}>
            <div>
              <ImageCard image={image} onClick={onImageClick} />
            </div>
          </li>
        ))}
      </ul>
    );
  }
};

export default ImageGallery;
