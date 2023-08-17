import React from 'react'
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Main from "./Components/Main";
import Statistics from "./Components/Statistics";
import Card from "./Components/Card";
import BaseTag from "./Components/BaseTag";
import Footer from "./Components/Footer";
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Hero />
        <Main />
        <Statistics />
        <Card />
        <BaseTag />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
