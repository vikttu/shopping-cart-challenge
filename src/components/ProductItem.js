import React from 'react'
import shoppingBag from '../assets/shopping-bag.svg'

let disabledState = false

class ProductItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            product: props
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if (this.state.product.available === 0){
            return (disabledState = true)
        }
        this.setState(prevState =>{
            return {
                product: {
                    name: prevState.product.name,
                    price: prevState.product.price,
                    available: prevState.product.available - 1
                }
            }
        })
    }

    render(){
        return(
            <div className="product-item" >
                <img src={shoppingBag} alt="Product" height="75" width="150"/>
                <h4>{this.state.product.name}</h4>
                <p>$ {this.state.product.price} - {this.state.product.available} (kg) left</p>
                <button type="submit" className="buy-item" onClick={this.handleClick} disabled={disabledState}>BUY</button>
            </div>
        )
    }
} 

/*
function ProductItem(props){
    return(
        <div className="product-item">
        <img src={shoppingBag} alt="Product" height="75" width="150"/>
        <h4>{props.name}</h4>
        <p>$ {props.price} - {props.available} left</p>
        <button type="submit" className="buy-item" onClick={() => console.log('buy item working!')} >BUY</button>
        </div>
        )
    }
    
*/

export default ProductItem
