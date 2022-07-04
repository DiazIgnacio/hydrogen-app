import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client';
import { productsPageDesktopData } from '../constants/index.server';

export default function ProductsPage() {
  return <ProductsPageDesktop {...productsPageDesktopData} />;
}
