import "../../assets/Style/ImageModal.css";
import React from "react";

interface ImageModalProps {
  imgSrc: string;
  altText: string;
  onClose: () => void;
  name: string;
  recettedDescription: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imgSrc,
  altText,
  onClose,
  name,
  recettedDescription,
}) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          ✕
        </button>
        <img src={imgSrc} alt={altText} />
        <figcaption>{name}</figcaption>
        <h3>Recette :</h3>
        <p className="recettedDescription">{recettedDescription}</p>
      </div>
    </div>
  );
};

export default ImageModal;
