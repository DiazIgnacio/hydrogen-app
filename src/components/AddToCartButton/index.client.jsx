import { AddToCartButton as HydrogenAddToCartButton } from '@shopify/hydrogen/client'

const AddToCartButton = ({ product }) => (
  <HydrogenAddToCartButton
    variantId={product.variantId}
    quantity={1}
    accessibleAddingToCartLabel="Adding item to your cart"
    className="px-4 py-2 text-white bg-blue-400 hover:bg-blue-500 border-none transition-all rounded-xl mt-4 w-full mx-6"
  >
    Add to Cart
  </HydrogenAddToCartButton>
)

export default AddToCartButton
