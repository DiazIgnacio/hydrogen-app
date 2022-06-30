import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client';
import { productsPageDesktopData } from '../App.server';

export default function ProductsPage() {
  return <ProductsPageDesktop {...productsPageDesktopData} />;
}
