import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ result, openModal, srcSet }) {
  function onClick(event) {
    openModal();
    srcSet(event);
  }

  return (
    <>
      {result.map(el => {
        return (
          <li onClick={onClick} key={el.id} className={s.ImageGalleryItem}>
            <img
              src={el.webformatURL}
              data-source={el.largeImageURL}
              alt=""
              className={s.ImageGalleryItemImage}
            />
          </li>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  srcSet: PropTypes.func,
  openModal: PropTypes.func,
  result: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
};
