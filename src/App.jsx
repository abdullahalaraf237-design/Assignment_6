import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navebar from './components/Navebar/Navebar'
import Banar from './components/Banar/Banar'
import Card from './components/card/Card'
import Seccird from './components/section2./seccird'
import Lastsec from './components/lastsection/lastsec'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false)
      return
    }

    const handleWindowLoad = () => {
      setIsLoading(false)
    }

    window.addEventListener('load', handleWindowLoad)

    return () => window.removeEventListener('load', handleWindowLoad)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [isLoading])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.find((item) => item.product.id === product.id)

      if (itemExists) {
        return currentItems.map((item) => (
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      }

      return [...currentItems, { product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.product.id !== productId))
  }

  const handleCheckout = () => {
    setCartItems([])
  }

  return (
    <div className='mx-auto w-11/12 max-w-7xl pb-12'>
      <Navebar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      {isLoading ? (
        <div className='mt-12 flex justify-center'>
          <span className='loading loading-dots loading-xl'></span>
        </div>
      ) : (
        <main className='mt-6 space-y-10 sm:mt-8 sm:space-y-14'>
          <Banar />
          <Card
            cartItems={cartItems}
            showCart={showCart}
            setShowCart={setShowCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
          <Seccird />
          <Lastsec />
        </main>
      )}
    </div>
  )
}

export default App
