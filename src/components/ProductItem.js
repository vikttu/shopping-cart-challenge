import React from 'react'
//import axios from 'axios'
import shoppingBag from '../assets/shopping-bag.svg'

/*const productPlaceholder = {
    id: 1,
    name: 'Product',
    price: '123.00',
    quantity: 2,
}*/

function ProductItem(props){
    return(
        <div className="product-item">
            <img src={shoppingBag} alt="Product" height="75" width="150"/>
            <h4>{props.name}</h4>
            <p>$ {props.price} - {props.quantity} left</p>
            <button type="submit" className="buy-item" onClick={() => console.log('buy item working!')} >BUY</button>
        </div>
    )
}

export default ProductItem


/*
    export default class ProductItem extends React.Component {
        state = {
            products: [],
        }
    
        componentDidMount() {
            axios.get(`https://shielded-wildwood-82973.herokuapp.com/products.json`)
                .then(res => {
                    console.log(res)
                    this.setState({ products: res.data })
                })
        }
    
        render() {
            return(
                <div className="product-item">
                <img src={shoppingBag} alt="Product" height="75" width="150"/>
                {this.state.products.map(products => 
                <div>
                    <h4>{products.name}</h4>
                    <p>$ {products.price} - {products.available} left</p>
                </div>) }
                <button type="submit" className="buy-item" onClick={() => console.log('buy item working!')} >BUY</button>
                </div>            
            )
        }
    }
*/