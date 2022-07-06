import React from 'react';
import HomePageDesktop from '../components/HomePageDesktop/index.client';
import { homePageDesktopData } from '../constants/index.server';

import { useShopQuery, gql } from '@shopify/hydrogen';

const queryString = gql`
  {
    shop {
      name
    }
  }
`;

export default function Home() {
  const { data } = useShopQuery({
    query: queryString,
  });

  console.log(data);

  return <HomePageDesktop {...homePageDesktopData} />;
}
