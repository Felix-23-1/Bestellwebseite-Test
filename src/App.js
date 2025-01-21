import React, { Component } from 'react';
import Navbar from './componets/Navbar';
import Product from './componets/Product-anzeige';
import './App.css';
import ShoppingCard from './componets/shopping-bag';
import products from './componets/products';


class App extends Component {
  state = {
    items: []
  };

  addItem = (amount, name, price) => {
    const current = [...this.state.items];
  
   const existingItem =current.find(item => item.name === name)
    if (existingItem) {
      existingItem.amount += amount;
    } else current.push ({
      amount,
      name,
      price,
    });
  
   
    this.setState({ items: current }, () => {
      console.log("Aktualisierter Zustand:", this.state.items); 
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          {/* Bereich für die Produktliste */}
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

          {/* Bereich für den Warenkorb */}
          <div>
            <ShoppingCard items={this.state.items} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;