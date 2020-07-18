import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import DieuHuongURL from './components/DieuHuongURL';

class App extends React.Component {
  render() {
    // filmData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div className="App">
        <Header />
        <Image />
        <DieuHuongURL />
        <Footer />
      </div>
    );
  }
}

export default App;
