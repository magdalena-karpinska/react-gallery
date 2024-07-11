import "./displayImages.scss";
import { Image } from "../../models/Image";
import { Link } from "@tanstack/react-router";

interface DisplayImagesProps {
  images: Image[];
}

export const DisplayImages = ({ images }: DisplayImagesProps) => {
  return (
    <>
      <div className="image-container">
        {images.map((image, index) => (
          <Link to={`/${image.id}`} params={{ id: image.id }} key={index}>
            <div className="image-wrapper">
              <div className="image">
                <img src={image.urls.small} alt="unsplash image" />
              </div>
              <p>{image.alt_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
