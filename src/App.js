
import './App.css';
import Content from './containers/Content';
import Header from './containers/Header'
import HeaderBottom from './containers/HeaderBottom/HeaderBottom'
import Ratings from './containers/Ratings';
import Reviews from './containers/Reviews'
import Suggested from './containers/Suggested';

function App() {
  return (
    <div className="app">
      <Header />
      <HeaderBottom />
      <Content />
      <Ratings />
      <Reviews />
      <Suggested />
    </div>
  );
}

export default App;
