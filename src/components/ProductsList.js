import React from 'react'
import axios from 'axios'

import shoppingBag from '../assets/shopping-bag.svg'
//import ProductItem from './ProductItem'
//import productsArray from './products-array'

/*This component creates the products in a more dynamic way fetching external data*/
/*
function ProductsList(){
    
    const productsComponents = productsArray.map(product => <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        quantity={product.quantity} />)
        
        return(
            <div className="products-list">
            {productsComponents}
            </div>
            )
        }
        
        */

        
class ProductsList extends React.Component {
    
    constructor() {
        super()
        this.state = {
            products: [],
        }

    }
    
    componentDidMount() {
        const self = this; 
        axios.get(`https://shielded-wildwood-82973.herokuapp.com/products.json`)
        .then(res => (
            self.setState({ products: res.data.products })
                ).catch((error) => self.setState({error: "Service not working. Try again later"})) )
    }
    
    render() {
        return(
            <div className="products-list">
            {
                this.state.products.map(products => 
                    <div>
                        <div className="product-item">
                        <img src={shoppingBag} alt="Product" height="75" width="150"/>
                            <h4>{products.name}</h4>
                            <p>$ {products.price} - {products.available} left</p>
                            <button type="submit" className="buy-item" onClick={() => console.log('buy item working!')} >BUY</button>
                        </div>            
                    </div>) 
            }
            </div>
        )
    }
}
export default ProductsList