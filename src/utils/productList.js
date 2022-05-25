import React from "react";
import ProductCard from "./productCar";


function ProductList() {

    

    const products = [
        {
            name: "lamborgini",
            color: 'black-gray',
            speed: 350,
            inStock: true,
            image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/95475/exterior-right-front-three-quarter.jpeg?q=75'
        }, {
            name: "ferrari f1",
            color: 'blue-steel',
            speed: 264,
            inStock: true,
    
            image: 'https://imgd.aeplcdn.com/1280x720/cw/ec/33641/Ferrari-812-Exterior-123393.jpg?wm=0&q=75'
        }, {
            name: "bugatti",
            color: 'black',
            speed: 400,
            inStock: false,
    
            image: "https://media.architecturaldigest.com/photos/5ced629704c41e1a9b9a8bcf/16:9/w_2992,h_1683,c_limit/Bugatti-LVN-7%20%5BBugatti%5D.jpg"
        }
    ]

    const addToCart = [];
    
    const onAddClick= (car)=>{
        addToCart.push(car)
        console.log(addToCart)
    }


   return   <div>
       
       
        {
        products.map((car) => {
            return <ProductCard car = {car} onAddtoCart = {onAddClick}/>
        })
    }
    </div>
}


export default ProductList
