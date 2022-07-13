import React from 'react'
import renderHydrogen from '@shopify/hydrogen/entry-server'
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen'
import CartProvider from './components/CartProvider.client'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProvider>
          <Router>
            <FileRoutes />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  )
}

export default renderHydrogen(App)
