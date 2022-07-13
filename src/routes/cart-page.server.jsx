import CartPageDesktop from '../components/CartPageDesktop/index.client'
import CartPageTablet from '../components/CartPageTablet/index.client'
import {
  cartPageDesktopData,
  cartPageTabletData
} from '../constants/index.server'

export default function Cart() {
  return (
    <>
      <div className="hidden 2xl:block">
        <CartPageDesktop {...cartPageDesktopData} />
      </div>
      <div className="2xl:hidden">
        <CartPageTablet {...cartPageTabletData} />
      </div>
    </>
  )
}
