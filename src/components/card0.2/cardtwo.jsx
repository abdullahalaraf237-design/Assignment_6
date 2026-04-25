export default function CardTwo({ showCart, visibleProducts }) {
  return (
    <>
      {showCart && visibleProducts.length === 0 && (
        <div className='rounded-xl border border-dashed border-base-300 bg-base-100 px-6 py-8 text-center'>
          <h3 className='text-xl font-semibold'>Your cart is empty</h3>
          <p className='mt-2 text-sm text-gray-600'>Add items from Products to see them here.</p>
        </div>
      )}
    </>
  )
}

