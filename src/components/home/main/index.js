import {
    HomeMain,
    Menu,
    Header,
    Swipers,
    Offer,
    User,
} from './styled';

export default function index() {
  return (
    <>
        <HomeMain>
            <Menu>menu</Menu>
            <Header>home</Header>
            <Swipers>swipers</Swipers>
            <Offer>offer</Offer>
            <User>user</User>
        </HomeMain>
    </>
  );
}