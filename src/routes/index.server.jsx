import React from 'react'
import HomePageDesktop from '../components/HomePageDesktop/index.client'
import {
  homePageDesktopData,
  homePageTabletData
} from '../constants/index.server'

import { useShopQuery, gql } from '@shopify/hydrogen'
import HomePageTablet from '../components/HomePageTablet/index.client'
import HomePageMenuCloseMobile from '../components/HomePageMenuCloseMobile/index.client'

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

export default function Home() {
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
    products && (
      <>
        <div className="hidden 2xl:block">
          <HomePageDesktop
            {...homePageDesktopData}
            products={products.slice(0, 5)}
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <HomePageTablet
            {...homePageTabletData}
            products={products.slice(0, 5)}
          />
        </div>
        <div className="lg:hidden">
          <HomePageMenuCloseMobile
            {...HomePageMenuCloseMobile}
            products={products}
          />
        </div>
      </>
    )
  )
}
