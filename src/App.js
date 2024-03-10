import Header from 'components/Header/Header';
import Cover from 'components/Cover/Cover';
import { ReactComponent as Delivery } from './assets/svg/delivery.svg';
import { ReactComponent as Support247 } from './assets/svg/support247.svg';
import { ReactComponent as Authentic } from './assets/svg/authentic.svg';
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

import './index.scss';
import './App.scss';
import './responsive.scss';
import PrimaryButton from 'commonComponents/PrimaryButton/PrimaryButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <div className="utilityWrapper blueWrapper flexWrapper">
        <div className="container utilityContainer flexWrapper">
          <div className="utilityItem flexWrapper">
            <div className="logoItem">
              <Delivery />
            </div>
            <div className="infoItem">
              <div className="headerItem">Free Delivery</div>
              <div className="descriptionItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className="utilityItem flexWrapper">
            <div className="logoItem">
              <Support247 />
            </div>
            <div className="infoItem">
              <div className="headerItem">Support 24/7</div>
              <div className="descriptionItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className="utilityItem flexWrapper">
            <div className="logoItem">
              <Authentic />
            </div>
            <div className="infoItem authenContainer">
              <div className="headerItem">100% Authentic</div>
              <div className="descriptionItem">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentWrapper greyWrapper">
        <div className="container">
          <div className="flexWrapper flexColumnWrapper">
            <span className="titleContent">Inspiration Collection</span>
            <span className="descriptionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="imagesContainer inspirationContainer">
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
      </div>
      <div className="contentWrapper blueWrapper">
        <div className="container beautySpaceContainer">
          <div className="contentWrapper flexWrapper flexColumnWrapper beautySpaceWrapper">
            <span className="titleContent beautySpaceTitle">
              Beautify Your Space
            </span>
            <span className="descriptionContent beautySpaceDescription">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </span>
            <div className="learnMoreButtonContainer">
              <PrimaryButton text="LEARN MORE" />
            </div>
          </div>
          <div className="imagesContainer beautySpaceImageWrapper">
            <div className="beautySpaceImageContainer">
              <img src={beautyItem} alt="Beauty Item" />
            </div>
          </div>
        </div>
      </div>
      <div className="contentWrapper flexWrapper flexColumnWrapper greyWrapper">
        <div className="container">
          <div className="flexWrapper flexColumnWrapper">
            <span className="titleContent">Browse The Range</span>
            <span className="descriptionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="imagesContainer flexWrapper">
            <div className="imageItem flexWrapper flexColumnWrapper">
              <img src={browseTheRangeItem1} alt="Browse The Range Item 1" />
              <span className="browseTheRangeTitle">Dining</span>
            </div>
            <div className="imageItem flexWrapper flexColumnWrapper">
              <img src={browseTheRangeItem2} alt="Browse The Range Item 2" />
              <span className="browseTheRangeTitle">Living</span>
            </div>
            <div className="imageItem flexWrapper flexColumnWrapper">
              <img src={browseTheRangeItem3} alt="Browse The Range Item 3" />
              <span className="browseTheRangeTitle">Bedroom</span>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="contentWrapper flexWrapper greyWrapper flexColumnWrapper">
        <div className="container">
          <div className="flexWrapper flexColumnWrapper">
            <span className="titleContent">How It Works</span>
            <span className="descriptionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="imagesContainer flexWrapper container howItWorksWrapper">
            <div className="imageItem flexWrapper flexColumnWrapper">
              <div className="howItWorksImageContainer">
                <img src={purchaseSecurely} alt="Purchase Securely Item 1" />
                <div className="howItWorksIndexContainer">
                  <span>1.</span>
                </div>
              </div>
              <div className="howItWorksContent flexWrapper flexColumnWrapper">
                <span className="howItWorksTitle">Purchase Securely</span>
                <span className="howItWorksDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
            <div className="imageItem flexWrapper flexColumnWrapper">
              <div className="howItWorksImageContainer">
                <img
                  src={shipFromWarehouse}
                  alt="Ships From Warehouse Item 2"
                />
                <div className="howItWorksIndexContainer">
                  <span>2.</span>
                </div>
              </div>
              <div className="howItWorksContent flexWrapper flexColumnWrapper">
                <span className="howItWorksTitle">Ships From Warehouse</span>
                <span className="howItWorksDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
            <div className="imageItem flexWrapper flexColumnWrapper">
              <div className="howItWorksImageContainer">
                <img src={styleYourRoom} alt="Style Your Room Item 3" />
                <div className="howItWorksIndexContainer">
                  <span>3.</span>
                </div>
              </div>
              <div className="howItWorksContent flexWrapper flexColumnWrapper">
                <span className="howItWorksTitle">Style Your Room</span>
                <span className="howItWorksDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentWrapper flexWrapper blueWrapper flexColumnWrapper">
        <div className="flexWrapper flexColumnWrapper">
          <span className="titleContent">Join Our Mailing List</span>
          <span className="descriptionContent">
            Sign up to receive inspiration, product updates, <br /> and special
            offers from our team.
          </span>
        </div>
        <div className="formWrapper">
          <form>
            <div className="inputWrapper">
              <input type="text" id="email" placeholder="example@gmail.com" />
              <button className="submitButton">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footerWrapper darkBlueWrapper">
        <div className="container flexWrapper">
          <div className="contentWrapper footerContentWrapper">
            <div className="footerTitle">
              <span>Beauty Care</span>
            </div>
            <div className="descriptionContent footerDescription">
              <span>
                Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </span>
            </div>
            <div className="footerTitle">
              <span>Follow Us</span>
            </div>
          </div>
          <div className="instaShopWrapper flexWrapper flexColumnWrapper">
            <div className="footerTitle">
              <span>Instagram Shop</span>
            </div>
            <div className="instaShopImageContainer flexWrapper">
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
        </div>
      </footer>
    </div>
  );
}

export default App;
