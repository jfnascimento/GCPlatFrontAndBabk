import MainSwiper from './swiper';
import {
    HomeMain,
    Menu,
    Header,
    Offer,
    User,
} from './styled';

export default function index() {
  return (
    <>
        <HomeMain>
            <Menu>menu</Menu>
            <Header>home</Header>
            <MainSwiper />
            <Offer>offer</Offer>
            <User>user</User>
        </HomeMain>
    </>
  );
}