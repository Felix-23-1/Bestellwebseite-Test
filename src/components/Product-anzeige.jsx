
import React, { Component } from 'react';


class Product extends Component {
    state = {};
    render() {
        const { image, title, text, className } = this.props; 
        return (
            <div className={`card ${className}`} style={{ width: '18rem' }}> 
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <button onClick={this.props.onAdd}className="btn btn-primary">Bestellen</button>
                </div>
            </div>
        );
    }
}

export default Product;