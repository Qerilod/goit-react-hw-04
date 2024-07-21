import React, { useEffect } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import s from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, onRequestClose, image, searchQuery }) => {
  useEffect(() => {
    if (isOpen && !image && searchQuery) {
      toast.error("This didn't work.");
      onRequestClose();
    }
  }, [isOpen, image, onRequestClose, searchQuery]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={s.container}>
        <img
          className={s.modalImg}
          src={image.urls.regular}
          alt={image.description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
