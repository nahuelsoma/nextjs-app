import React, { useState, useEffect, FunctionComponent } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Product from 'components/Product/Product'

const HomePage: FunctionComponent = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await window.fetch('api/avo')
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    }

    fetchProducts();

  }, [])

  return (
    <>
      <Navbar />
      <h1>Next.js!</h1>
      <div className="main">
        {products?.map((product, key) => (
          <div key={key}>
            <Product id={product.id} name={product.name} price={product.price} sku={product.sku} image={product.image} />
          </div>
        ))}
        <style jsx>{`
        .main {
          padding: 10px;
          display: grid;
          grid-template-columns: repeat(2, auto); 
          gap: 1rem;
        }
      `}</style>
      </div>
    </>
  )
}

export default HomePage
