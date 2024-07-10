import './displayImages.scss';
import { Image } from '../../models/Image';

interface DisplayImagesProps {
  images: Image[];
}

export const DisplayImages = ({ images }: DisplayImagesProps) => {
  return (
    <>
      <div className='image-container'>
        {images.map((image, index) => (
          <div className='image-wrapper' key={index}>
            <div className='image'>
              <img src={image.urls.small} alt='unsplash image' />
            </div>
            <p>{image.alt_description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
