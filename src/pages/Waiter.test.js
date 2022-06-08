import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import Waiter from "./Waiter.jsx"
import {CartProvider} from '../Context/CartContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const products = [
  {
      "id": 1,
      "name": "Sandwich de jamón y queso",
      "price": 1000,
      "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
      "type": "Desayuno",
      "dateEntry": "2022-03-05 15:14:10"
  },
  {
      "id": 2,
      "name": "Café americano",
      "price": 500,
      "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
      "type": "Desayuno",
      "dateEntry": "2022-03-05 15:14:10"
  },
  {
      "id": 3,
      "name": "Agua 500ml",
      "price": 500,
      "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
      "type": "Almuerzo",
      "dateEntry": "2022-03-05 15:14:10"
  }
]

const userMock = {
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJ3YWl0ZXJAYnVyZ3VlcnMuY29tIiwiaWF0IjoxNjU0NjIzNjM2LCJleHAiOjE2NTQ2MjcyMzYsInN1YiI6IjMifQ.Yo3LoRg1w4LmIZseiW53MdfY7WMLQK8XFhtfGdOLspY",
  "user": {
    "email": "burguerwaiter@burguers.com",
    "roles": {
      "waiter": true
    },
    "id": 3
  }
};

const server = setupServer(
  rest.get('http://localhost:8080/products', (req, res, ctx) => {
      return res(ctx.json(products)) //Texto en la vista
  }),
  rest.get('http://localhost:8080/users', (req, res, ctx) => {
      return res(ctx.json(userMock)) //Texto en la vista
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("testiando pantalla waiter", () =>{
  const userMock = {
    email: 'burguerwaiter@burguers.com',
};
  test("se muestran los productos", async () =>{
    render(
      <Router>
          <CartProvider.Provider value={{
              user: userMock,
          }}>
              <Waiter />
          </CartProvider.Provider>
      </Router>
  )
    await waitFor(() =>{
      const cards = screen.getAllByTestId('card-show');
      expect(cards.length).toEqual(products.length)
    })
  })
})

// sessionStorage.user = JSON.stringify({
//     accessToken: 'tokenfortest',
//   });

//   const server = setupServer(
//     rest.get('http://localhost:8080/products', (_req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json([
//           {
//             id: 1,
//             name: 'Sandwich de jamón y queso',
//             price: 1000,
//             image: 'https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png',
//             type: 'Desayuno',
//             dataEntry: '2022-03-05 15:14:10'
//           },
//         ])
//       );
//     })
//   );

//   beforeAll(() => server.listen());

//   it('response of products to NewOrder component', async () => {
//     const activeSession = JSON.parse(sessionStorage.user);
//     const activeSessionToken = activeSession.accessToken;
//     let productListTest = [
//       {
//         id: 1,
//         name: 'Sandwich de jamón y queso',
//         price: 1000,
//         image: 'https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png',
//         type: 'Desayuno',
//         dataEntry: '2022-03-05 15:14:10'
//       },
//     ];

//     const productTestResult = await callProducts(activeSessionToken);
//     expect(productTestResult).toEqual(productListTest);
//   });