import React from 'react'
import axios from 'axios'

import ProductItem from './ProductItem'

class ProductsList extends React.Component {
    
    constructor() {
        super()
        this.state = {
            products: [],
        }

    }
    
    componentDidMount() { 
        axios.get(`https://shielded-wildwood-82973.herokuapp.com/products.json`)
        .then(res => (
            this.setState({ products: res.data.products })))
            .catch((error) => this.setState({error: "Service not working. Try again later"}))
    }
    
    render() {
        if (this.state.error){
            return(
                <h1>Service not working. Try again later </h1>
            )
        }
        return(
            <div className="products-list">
            {
                this.state.products.map(products => 
                    <ProductItem 
                    key={products.id} 
                    id={products.id}
                    name={products.name} 
                    price={products.price} 
                    available={products.available}  />) 
            }
            </div>
        )
    }
}
export default ProductsList