import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  handleSearchFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue, page } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery searchValue={searchValue} page={page} />
        <ToastContainer autoClose={3000} position={'top-center'} />
      </div>
    );
  }
}

export default App;
