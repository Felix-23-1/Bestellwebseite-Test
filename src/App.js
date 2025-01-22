import React, { Component } from 'react';
import Navbar from './componets/Navbar';
import Product from './componets/Product';
import './App.css';
import ShoppingCard from './componets/shopping-card';


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
             <div className='product-list'>
          <Product
          onAdd={() => this.addItem (1, 'Pizza',10 )}
            className="product-pizza"
            image="/assets/img/pizza.jpg"
            title="Leckere Pizza"
            text="Unsere hausgemachte Pizza mit frischen Zutaten."
          />
          <Product
          onAdd={() => this.addItem (1, 'Sushi', 12)}
            className="product-sushi"
            image="/assets/img/sushi.jpg"
            title="Frisches Sushi"
            text="Frisch zubereitetes Sushi, perfekt für Liebhaber."
          />
          <Product
          onAdd={() => this.addItem (1, 'Burger', 9 )}
            className="product-burger"
            image="/assets/img/burger.jpg"
            title="Saftiger Burger"
            text="Ein klassischer Burger, der jeden Geschmack trifft."  
          />
          <Product
          onAdd={() => this.addItem (1, 'Bowl', 14 )}
            className="product-bowl"
            image="/assets/img/vegan.jpg"
            title="Frische Bowl"
            text="Frische Bowls für alle, die gesund essen möchten."
            />
        </div>
        {/* Bereich für den Warenkorb */}
        <div className="Shopping-card">
        <ShoppingCard items={this.state.items} />
       </div>

        </div>
        </React.Fragment>
      
    );
  }
}


export default App;
