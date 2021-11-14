import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from '../Button/Button';
import { animateScroll as scroll } from 'react-scroll';

class ImageGallery extends Component {
  state = {
    result: [],
    status: 'idle',
    error: null,
    showModal: false,
    src: '',
    page: 1,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  srcSet = event => {
    this.setState(() => ({
      src: event.target.dataset.source,
    }));
  };

  onLoadMoreClick = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));

    scroll.scrollToBottom({ duration: 2000 });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchValue;
    const newSearch = this.props.searchValue;
    const prevPage = prevState.page;

    let newPage;
    if (prevSearch !== newSearch) {
      newPage = this.props.page;
    } else {
      newPage = this.state.page;
    }

    if (prevSearch !== newSearch || prevPage !== newPage) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${newSearch}&page=${newPage}&key=21915406-973315f608c7e35a5d0268cdc&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Nothing was found'));
        })
        .then(({ hits }) => {
          if (hits.length === 0) {
            return Promise.reject(new Error('Nothing was found'));
          }
          if (prevSearch === newSearch && newPage !== 1) {
            this.setState({
              result: [...this.state.result, ...hits],
              status: 'resolved',
            });
          }

          if (prevSearch !== newSearch) {
            this.setState({ result: [], page: 1 });
            this.setState({
              result: [...hits],

              status: 'resolved',
            });
          }
        })

        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { error, result, showModal, status, src } = this.state;

    if (status === 'idle') {
      return <div style={{ textAlign: 'center' }}>Enter your search</div>;
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem
              srcSet={this.srcSet}
              openModal={this.toggleModal}
              result={result}
            />
          </ul>
          <Loader
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
            type="Grid"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem
              srcSet={this.srcSet}
              openModal={this.toggleModal}
              result={result}
            />
          </ul>

          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={src} alt="" />
            </Modal>
          )}

          <Button loadMore={this.onLoadMoreClick} />
        </>
      );
    }
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  page: PropTypes.number,
  searchValue: PropTypes.string,
};
