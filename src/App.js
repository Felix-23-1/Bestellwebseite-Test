import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Product from './components/Product-anzeige';
import './App.css';
import ShoppingCard from './components/shopping-bag';
import products from './components/products';
import Pricing from './pages/pricing';


class App extends Component {
  state = {
    items: []
  };

  addItem = (amount, name, price) => {
    const current = [...this.state.items];

    // Prüfen, ob das Produkt bereits existiert
    const existingItem = current.find(item => item.name === name);
    if (existingItem) {
      existingItem.amount += amount;
    } else {
      current.push({
        amount,
        name,
        price,
      });
    }

    this.setState({ items: current }, () => {
      console.log("Aktualisierter Zustand:", this.state.items);
    });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          
          
          {/* Hauptseite */}
          <Route
            path="/"
            element={
              <div className="main-container">
                {/* Produktliste */}
                <div className="product-list">
                  {products.map(product => (
                    <Product
                      key={product.id}
                      onAdd={() => this.addItem(1, product.name, product.price)}
                      className={product.className}
                      image={product.image}
                      title={product.name}
                      text={product.description}
                    />
                  ))}
                </div>
                
                {/* Warenkorb */}
                <div className="shopping-card">
                  <ShoppingCard items={this.state.items} />
                </div>
              </div>
            }
          />
          
          {/* Pricing Seite */}
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
