import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
<<<<<<< HEAD
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
=======
>>>>>>> 3e525248 (Haciendo test de login)
import { callProducts } from "../api/Products.js";
import '@testing-library/jest-dom';

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

  beforeAll(() => server.listen());

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

    const productTestResult = await callProducts(activeSessionToken);
    expect(productTestResult).toEqual(productListTest);
  });