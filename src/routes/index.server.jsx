import React from 'react'
import HomePageDesktop from '../components/HomePageDesktop/index.client'
import { homePageDesktopData } from '../constants/index.server'

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

export default function Home() {
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

  return <HomePageDesktop {...homePageDesktopData} products={products} />
}
