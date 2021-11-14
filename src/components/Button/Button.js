import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ loadMore }) {
  return (
    <button type="button" onClick={loadMore} className={s.Button}>
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
