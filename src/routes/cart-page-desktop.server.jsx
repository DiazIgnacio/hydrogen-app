import CartPageDesktop from '../components/CartPageDesktop/index.client';
import { cartPageDesktopData } from '../constants/index.client';

export default function Cart() {
  return <CartPageDesktop {...cartPageDesktopData} />;
}
