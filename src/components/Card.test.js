import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
<<<<<<< HEAD
import { CartProvider } from '../Context/CartContext';
=======
<<<<<<< HEAD
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
=======
>>>>>>> 3e525248 (Haciendo test de login)
>>>>>>> efaa7766 (Haciendo test de login)
import { callProducts } from "../api/Products.js";
import Card from '../components/Card'

describe('Card Component, card products', ()=> {

  sessionStorage.user = JSON.stringify({
      accessToken: 'tokenfortest',
    });

    const server = setupServer(
      rest.get('http://localhost:8080/products', (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            {
              id: 1,
              name: 'Sandwich de jamón y queso',
              price: 1000,
              image: 'https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png',
              type: 'Desayuno',
              dataEntry: '2022-03-05 15:14:10'
            },
          ])
        );
      })
    );

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('response of products to NewOrder component', async () => {
      const activeSession = JSON.parse(sessionStorage.user);
      const activeSessionToken = activeSession.accessToken;
      let productListTest = [
        {
          id: 1,
          name: 'Sandwich de jamón y queso',
          price: 1000,
          image: 'https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png',
          type: 'Desayuno',
          dataEntry: '2022-03-05 15:14:10'
        },
      ];

      let productTestResult = [];

      await callProducts(activeSessionToken).then((res) => {
        productTestResult = res.data;
      })
      expect(productTestResult).toEqual(productListTest);
    });

    it('Testing the elements inside Card', async () => {
      const history = createMemoryHistory()
      const { debug } = render(
          <Router location={history.location} navigator={history}>
              <CartProvider>
                <Card/>
              </CartProvider>
          </Router>
      )

      await waitFor(() =>{
        debug();
        const btnAddToCart = screen.getByText('Add To Cart')
        expect(btnAddToCart).toBeInTheDocument();
      })
    })
  })