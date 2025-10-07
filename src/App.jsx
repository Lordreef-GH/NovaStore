import React from 'react'
import products from './products'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>NovaStore</h1>
        <p className="subtitle">Simple product listing</p>
      </header>
      <main className="grid">
        {products.map(p => (
          <article key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <div className="content">
              <h3>{p.name}</h3>
              <p className="desc">{p.description}</p>
              <div className="row">
                <span className="price">${p.price.toFixed(2)}</span>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </main>
      <footer>
        <small>© {new Date().getFullYear()} NovaStore</small>
      </footer>
    </div>
  )
}
