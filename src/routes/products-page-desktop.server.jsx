import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client';
import { productsPageDesktopData } from '../constants';

export default function ProductsPage() {
  return <ProductsPageDesktop {...productsPageDesktopData} />;
}
