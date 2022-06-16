import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Card from '../components/Card.jsx';
import { CartProvider } from '../Context/CartContext.jsx';
import { createMemoryHistory } from 'history';
import Waiter from '../pages/Waiter.jsx';

describe('Waiter page', ()=> {

  sessionStorage.user = JSON.stringify({
      'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJ3YWl0ZXJAYnVyZ3VlcnMuY29tIiwiaWF0IjoxNjU0NzkzNjMyLCJleHAiOjE2NTQ3OTcyMzIsInN1YiI6IjMifQ.VGyJFzhg9XbYM_ZB4jQZAxOvTmQx5Zu6U9rt95vWIhs',
    });

    const server = setupServer(
      rest.get('http://localhost:8080/products', (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(allProducts)
        );
      })
    );

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

  it('Testing the elements inside waiter', async () => {
      const history = createMemoryHistory()
      const { debug } = render(
          <Router location={history.location} navigator={history}>
              <CartProvider>
                  <Waiter>
                      <Card/>
                  </Waiter>
              </CartProvider>
          </Router>
      )

      const btnSendOrder = screen.getByText('Send Order')
      await waitFor(() =>{
      debug();
      expect(btnSendOrder).toBeInTheDocument();
      })
    })

})


  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

it('Testing the elements inside waiter', async () => {
    const history = createMemoryHistory()
    const { debug } = render(
        <Router location={history.location} navigator={history}>
            <CartProvider>
                <Waiter>
                    <Card/>
                </Waiter>
            </CartProvider>
        </Router>
    )

    const btnSendOrder = screen.getByText('Send Order')
    await waitFor(() =>{
    debug();
    expect(btnSendOrder).toBeInTheDocument();
    })
  })

