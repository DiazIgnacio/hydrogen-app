import React from 'react';
import HomePageDesktop from '../components/HomePageDesktop/index.client';
import { homePageDesktopData } from '../constants/index';

export default function Home() {
  return <HomePageDesktop {...homePageDesktopData} />;
}
