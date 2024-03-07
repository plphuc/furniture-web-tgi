import './App.css';
import './index.css';

import Header from 'components/Header/Header';
import Cover from 'components/Cover/Cover';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <div className="contentWrapper blueWrapper">
        <div className="contentContainer">
          <div className="utilityItem">
            <div className="logoItem"></div>
            <div className="infoItem">
              <div className="headerItem">Free Delivery</div>
              <div className="descItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className="utilityItem">
            <div className="logoItem"></div>
            <div className="infoItem">
              <div className="headerItem">Support 24/7</div>
              <div className="descItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className="utilityItem">
            <div className="logoItem"></div>
            <div className="infoItem">
              <div className="headerItem">100% Authentic</div>
              <div className="descItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
      <div className='contentWrapper greyWrapper'>
      <div className='contentContainer'>
        <span className='titleContent'>Inspiration Collection</span>
        <span className='descContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      </div>
    </div>
  );
}

export default App;
