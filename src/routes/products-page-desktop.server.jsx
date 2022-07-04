import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client';
import { productsPageDesktopData } from '../constants/index';

export default function ProductsPage() {
  return <ProductsPageDesktop {...productsPageDesktopData} />;
}
