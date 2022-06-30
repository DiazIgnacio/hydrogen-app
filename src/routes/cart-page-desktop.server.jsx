import CartPageDesktop from '../components/CartPageDesktop/index.client';
import { cartPageDesktopData } from '../App.server';

export default function Cart() {
  return <CartPageDesktop {...cartPageDesktopData} />;
}
