import React from "react";
import {screen, render, waitFor} from '@testing-library/react';
import Kitchen from "./Kitchen";
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router } from 'react-router-dom';
import { CartProvider } from '../Context/CartContext.jsx';
import { createMemoryHistory } from 'history';

sessionStorage.user = JSON.stringify({
    'accessToken': 'tokentokitchen',
  });

    const server = setupServer(
    rest.get('http://localhost:8080/orders', (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json()
      );
    })
  );

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

it('Must display the tittle kitchen', async () =>{

        const history = createMemoryHistory()
        const { debug } = render(
        <Router location={history.location} navigator={history}>
            <CartProvider>
                <Kitchen/>
            </CartProvider>
        </Router>
    )

    await waitFor(() =>{
        debug();
        expect(screen.queryByText(/kitchen/i)).toBeInTheDocument();
    })
})