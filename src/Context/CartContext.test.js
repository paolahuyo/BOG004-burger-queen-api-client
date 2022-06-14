import React from "react";
<<<<<<< HEAD
import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { addItemToCartTest } from "./CartContext";

describe('Context functions', ()=> {

    it("add products to cart", () =>{
        const product = {
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
=======
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
>>>>>>> 4431672c (creando nuevos test)
                amount: 1,
                dateEntry: "2022-03-05 15:14:10",
                id: 1,
                image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
                name: "Sandwich de jamón y queso",
                price: 1000,
                type: "Desayuno",
<<<<<<< HEAD
            },
            {
                amount: 2,
                dateEntry: "2022-03-05 15:14:10",
                id: 2,
                image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.pngjjj",
                name: "Pan con arroz",
                price: 2000,
                type: "Almuerzo",
            }
        ]
    
        const responseAdd = [
            {
                amount: 2,
                dateEntry: '2022-03-05 15:14:10',
                id: 1,
                image: 'https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png',
                name: 'Sandwich de jamón y queso',
                price: 1000,
                type: 'Desayuno',
            },
            {
                amount: 2,
                dateEntry: "2022-03-05 15:14:10",
                id: 2,
                image: "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.pngjjj",
                name: "Pan con arroz",
                price: 2000,
                type: "Almuerzo",
            }
        ]
    
        waitFor(() =>{
            addItemToCartTest(cartItems, product);
            console.log('RESPUESTA TEST', addItemToCartTest(cartItems, product))
            expect(addItemToCartTest(cartItems, product)).toBe(responseAdd)
        })
    })
    
    it("Deletes a product in cart", () =>{
        
        const product = {
            amount: 1,
            dateEntry: '2022-03-05 15:14:10',
            id: 6,
            image: 'https://www.pngplay.com/wp-content/uploads/9/Fruit-Juice-PNG-Photo-Image.png',
            name: 'Jugo de frutas natural',
            price: 700,
            type: 'Desayuno',
        }
    
        const cartItems = [
            {
                amount: 1,
                dateEntry: '2022-03-05 15:14:10',
                id: 6,
                image: 'https://www.pngplay.com/wp-content/uploads/9/Fruit-Juice-PNG-Photo-Image.png',
                name: 'Jugo de frutas natural',
                price: 700,
                type: 'Desayuno',
            }
        ]
    
        const responseDelete = []
    
       waitFor(() =>{
            deleteItemToCartTest(cartItems, product);
            console.log('RESPUESTA delete', deleteItemToCartTest(cartItems, product))
            expect(deleteItemToCartTest(cartItems, product)).toBe(responseDelete)
        })
    })

})

=======
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
>>>>>>> 4431672c (creando nuevos test)
