import CartPageDesktop from '../components/CartPageDesktop/index.client';
import { cartPageDesktopData } from '../constants/index';

export default function Cart() {
  return <CartPageDesktop {...cartPageDesktopData} />;
}
