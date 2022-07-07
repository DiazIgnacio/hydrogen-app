import ProductsPageDesktop from '../components/ProductsPageDesktop/index.client'
import { productsPageDesktopData } from '../constants/index.server'

import { useShopQuery, gql } from '@shopify/hydrogen'

const queryString = gql`
  {
    products(first: 100) {
      edges {
        node {
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
    const { description, priceRange, title, images } = node
    return {
      title,
      description,
      price: priceRange.maxVariantPrice.amount,
      imageSrc: images.nodes[0].src
    }
  })

  return (
    <ProductsPageDesktop {...productsPageDesktopData} products={products} />
  )
}
