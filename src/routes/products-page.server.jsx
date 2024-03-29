import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client'
import {
  productsPageDesktopData,
  productsPageMobileData,
  productsPageTabletData
} from '../constants/index.server'

import { useShopQuery, gql } from '@shopify/hydrogen'
import ProductsPageTablet from '../components/ProductsPageTablet/index.client'
import ProductsPageMobile from '../components/ProductsPageMobile/index.client'

const queryString = gql`
  {
    products(first: 100) {
      edges {
        node {
          id
          description
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          title
          images(first: 1) {
            nodes {
              src
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`

export default function ProductsPage() {
  const { data } = useShopQuery({
    query: queryString
  })

  const products = data.products.edges.map(({ node }) => {
    const { description, priceRange, title, images, variants } = node
    return {
      title,
      description,
      price: priceRange.maxVariantPrice.amount,
      imageSrc: images.nodes[0].src,
      variantId: variants.edges[0].node.id
    }
  })

  return (
    <>
      <div className="hidden 2xl:block">
        <ProductsPageDesktop {...productsPageDesktopData} products={products} />
      </div>
      <div className="hidden lg:block 2xl:hidden">
        <ProductsPageTablet {...productsPageTabletData} products={products} />
      </div>
      <div className="lg:hidden">
        <ProductsPageMobile {...productsPageMobileData} products={products} />
      </div>
    </>
  )
}
