import MainSwiper from './swiper';
import Offers from './offers';
import {
    HomeMain,
    Menu,
    Header,
    Offer,
    User,
} from './styles';

export default function index() {
  return (
    <>
        <HomeMain>
            <Menu>menu</Menu>
            <Header>home</Header>
            <MainSwiper />
            <Offers />
            <User>user</User>
        </HomeMain>
    </>
  );
}