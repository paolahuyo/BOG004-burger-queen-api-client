import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { addItemToCartTest } from "./CartContext";

it("add products to cart", async () =>{
    const product = 
    {
        amount: 1,
        dateEntry: "2022-03-05 15:14:10",
        id: 1,
        image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
        name: "Sandwich de jamón y queso",
        price: 1000,
        type: "Desayuno",
    }


const cartItems = [
        {
            0:{
                amount: 1,
                dateEntry: "2022-03-05 15:14:10",
                id: 1,
                image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
                name: "Sandwich de jamón y queso",
                price: 1000,
                type: "Desayuno",
            }
        }
]

const reponse = [
    {
        amount: 2,
        dateEntry: "2022-03-05 15:14:10",
        id: 1,
        image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
        name: "Sandwich de jamón y queso",
        price: 1000,
        type: "Desayuno",    
    }
]
    await waitFor(() =>{
        addItemToCartTest(cartItems, product);
        console.log("a ver:", addItemToCartTest(cartItems, product))
        expect(addItemToCartTest(cartItems, product)).toBe(reponse)
    })
})