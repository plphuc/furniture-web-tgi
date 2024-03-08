import Header from 'components/Header/Header';
import Cover from 'components/Cover/Cover';
import {
  beautyItem,
  browseTheRangeItem1,
  browseTheRangeItem2,
  browseTheRangeItem3,
  ig1,
  ig2,
  ig3,
  ig4,
  inspiration1,
  inspiration2,
  inspiration3,
  purchaseSecurely,
  shipFromWarehouse,
  styleYourRoom,
} from 'assets/images';
import './App.css';
import './index.css';

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
      <div className="flexWrapper flexColumnWrapper  greyWrapper">
        <div className="contentContainer flexWrapper flexColumnWrapper">
          <span className="titleContent">Inspiration Collection</span>
          <span className="descContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="imagesContainer">
          <div className="imageItem">
            <img src={inspiration1} alt="inspiration item 1" />
          </div>
          <div className="imageItem">
            <img src={inspiration2} alt="inspiration item 2" />
          </div>
          <div className="imageItem">
            <img src={inspiration3} alt="inspiration item 3" />
          </div>
        </div>
      </div>
      <div className="flexWrapper blueWrapper">
        <div className="contentContainer flexWrapper flexColumnWrapper">
          <span className="titleContent">Beautify Your Space</span>
          <span className="descContent">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </span>
          <button>
            <a href="/">Learn more</a>
          </button>
        </div>
        <div className="imagesContainer">
          <div className="imageItem">
            <img src={beautyItem} alt="beauty item 1" />
          </div>
        </div>
      </div>
      <div className="flexWrapper greyWrapper">
        <div className="contentContainer flexWrapper flexColumnWrapper">
          <span className="titleContent">Browse The Range</span>
          <span className="descContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <button>
            <a href="/">Learn more</a>
          </button>
        </div>
        <div className="imagesContainer">
          <div className="imageItem">
            <img src={browseTheRangeItem1} alt="Browse The Range Item 1" />
          </div>
          <div className="imageItem">
            <img src={browseTheRangeItem2} alt="Browse The Range Item 2" />
          </div>
          <div className="imageItem">
            <img src={browseTheRangeItem3} alt="Browse The Range Item 3" />
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="flexWrapper greyWrapper">
        <div className="contentContainer flexWrapper flexColumnWrapper">
          <span className="titleContent">How It Works</span>
          <span className="descContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="imagesContainer">
          <div className="imageItem">
            <img src={purchaseSecurely} alt="Purchase Securely Item 1" />
          </div>
          <div className="imageItem">
            <img src={shipFromWarehouse} alt="Ships From Warehouse Item 2" />
          </div>
          <div className="imageItem">
            <img src={styleYourRoom} alt="Style Your Room Item 3" />
          </div>
        </div>
      </div>
      <div className="flexWrapper blueWrapper">
        <div className="contentContainer flexWrapper flexColumnWrapper">
          <span className="titleContent">Join Our Mailing List</span>
          <span className="descContent">
            Sign up to receive inspiration, product updates, and special offers
            from our team.
          </span>
        </div>
        <div className="formWrapper">
          <form>
            <div className="inputWrapper">
              <input type="text" id="email" placeholder="example@gmail.com" />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="darkBlueWrapper flexWrapper">
        <div className="contentContainer">
          <div className="titleContent">
            <span>Beauty Care</span>
          </div>
          <div className="descContent">
            <span>
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </span>
          </div>
          <div className="titleContent">
            <span>Follow Us</span>
          </div>
        </div>
        <div className="instaShopWrapper">
          <div className="titleContent">
            <span>Instagram Shop</span>
          </div>
          <div className="instaShopImageContainer">
            <div className="instaShopImageItem">
              <img src={ig1} alt="Insta Shop 1" />
            </div>
            <div className="instaShopImageItem">
              <img src={ig2} alt="Insta Shop 2" />
            </div>
            <div className="instaShopImageItem">
              <img src={ig3} alt="Insta Shop 3" />
            </div>
            <div className="instaShopImageItem">
              <img src={ig4} alt="Insta Shop 4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
