import CartPageDesktop from '../components/CartPageDesktop/index.client';
import { cartPageDesktopData } from '../constants';

export default function Cart() {
  return <CartPageDesktop {...cartPageDesktopData} />;
}
