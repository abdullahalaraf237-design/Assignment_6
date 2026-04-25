import { useMemo } from 'react'
import productData from '../../assets/products/data.json'
import designTool from '../../assets/products/design-tool.png'
import operation from '../../assets/products/operation.png'
import portfolio from '../../assets/products/portfolio.png'
import shoppingCart from '../../assets/products/shopping-cart.png'
import socialMedia from '../../assets/products/social-media.png'
import writing from '../../assets/products/writing_2327400 1.png'
import CardTwo from '../card0.2/cardtwo'
 
export default function Card({ cartItems, showCart, setShowCart, onAddToCart, onRemoveFromCart, onCheckout }) {

  const productIcons = {
    designTool,
    operation,
    portfolio,
    shoppingCart,
    socialMedia,
    writing,
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartTotalAmount = useMemo(
    () => cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0),
    [cartItems],
  )

  const visibleProducts = showCart
    ? cartItems.map((item) => ({ ...item.product, quantity: item.quantity }))
    : productData

  return (
    <>
    <section className='pb-4'>
      <div className='mb-8 text-center'>
        <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Premium Digital Tools</h2>
        <p className='mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base'>
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className='mt-4 flex flex-wrap items-center justify-center gap-3'>
          <button
            onClick={() => setShowCart(false)}
            className={`btn min-w-28 rounded-full border-0 px-5 ${
              !showCart
                ? 'bg-linear-to-r text-white from-[#4F39F6] to-[#831C91]'
                : 'btn-outline border-[#4F39F6] text-[#4F39F6] hover:border-transparent hover:text-white hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#831C91]'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`btn min-w-28 rounded-full px-5 ${
              showCart
                ? 'bg-linear-to-r border-0 text-white from-[#4F39F6] to-[#831C91]'
                : 'btn-outline border-[#4F39F6] text-[#4F39F6] hover:border-transparent hover:text-white hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#831C91]'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>

        {cartCount > 0 && (
          <p className='mt-3 text-sm font-medium text-emerald-600'>
            {cartCount} item{cartCount > 1 ? 's' : ''} added to cart.
          </p>
        )}
      </div>

      {showCart ? (
        <div className='mx-auto w-full max-w-280 rounded-2xl bg-base-100 p-4 shadow-xl'>
          <div className='space-y-3'>
            {visibleProducts.map((product) => (
              <article
                key={product.id}
                className='card border border-base-200 bg-base-100'
              >
                <div className='flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between'>
                  <div className='flex items-center gap-3 sm:gap-4'>
                    <img
                      src={productIcons[product.iconKey]}
                      alt={product.name}
                      className='h-10 w-10 sm:h-12 sm:w-12'
                    />
                    <div className='space-y-0.5'>
                      <h3 className='text-sm font-semibold sm:text-base'>{product.name}</h3>
                      <p className='text-sm font-medium'>Amount: ${product.price * product.quantity}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveFromCart(product.id)}
                    className='btn btn-soft btn-error w-full sm:w-auto'
                  >
                    Removed
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length > 0 && (
            <>
              <div className='mt-4 flex items-center justify-between rounded-lg border border-base-200 bg-base-50 px-4 py-2'>
                <span className='text-base font-semibold'>Total</span>
                <span className='text-base font-bold'>${cartTotalAmount}</span>
              </div>

              <button
                onClick={onCheckout}
                className='btn mt-4 h-10 w-full border-0 text-white bg-linear-to-r from-[#4F39F6] to-[#831C91]'
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6'>
          {visibleProducts.map((product) => {
            const isInCart = cartItems.some((item) => item.product.id === product.id)

            return (
            <article
              key={product.id}
              className='card border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <div className='card-body'>
                <div className='relative'>
                  {product.tag && (
                    <div className='absolute -top-4 right-0'>
                      <span className='badge badge-primary'>{product.tag}</span>
                    </div>
                  )}
                  <div className='flex justify-center mb-4'>
                    <img
                      src={productIcons[product.iconKey]}
                      alt={product.name}
                      className='h-16 w-16 sm:h-20 sm:w-20'
                    />
                  </div>
                </div>

                <h3 className='card-title text-lg justify-center'>{product.name}</h3>

                <p className='text-sm text-gray-600 text-center'>
                  {product.description}
                </p>

                <div className='divider my-2'></div>

                <div className='text-center mb-4'>
                  <span className='text-2xl font-bold'>${product.price}</span>
                  <span className='text-sm text-gray-600 ml-1'>/{product.period}</span>
                </div>

                <div className='mb-4'>
                  <h4 className='font-semibold text-sm mb-2'>Features:</h4>
                  <ul className='text-sm space-y-1'>
                    {product.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2'>
                        <span className='text-primary'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  disabled={isInCart}
                  className={`btn w-full border-0 ${
                    isInCart
                      ? 'btn-disabled cursor-not-allowed bg-base-300 text-base-content/70'
                      : 'text-white bg-linear-to-r from-[#4F39F6] to-[#831C91] hover:shadow-lg'
                  }`}
                >
                  {isInCart ? 'Added' : 'Buy now'}
                </button>
              </div>
            </article>
            )
          })}
        </div>
      )}

      <CardTwo showCart={showCart} visibleProducts={visibleProducts} />
    </section>
    </>
  )
}
