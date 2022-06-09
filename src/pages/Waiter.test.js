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

sessionStorage.user = JSON.stringify({
    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJ3YWl0ZXJAYnVyZ3VlcnMuY29tIiwiaWF0IjoxNjU0NzkzNjMyLCJleHAiOjE2NTQ3OTcyMzIsInN1YiI6IjMifQ.VGyJFzhg9XbYM_ZB4jQZAxOvTmQx5Zu6U9rt95vWIhs',
  });

// const allProducts = [
//     {
//       "id": 1,
//       "name": "Sandwich de jamón y queso",
//       "price": 1000,
//       "image": "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
//       "type": "Desayuno",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 2,
//       "name": "Café americano",
//       "price": 500,
//       "image": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Coffee-PNG/Cup_of_Coffee_PNG_Vector_Clipart.png?m=1507172107",
//       "type": "Desayuno",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 3,
//       "name": "Agua 500ml",
//       "price": 500,
//       "image": "https://www.picng.com/upload/water_bottle/png_water_bottle_17064.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 4,
//       "name": "Agua 750ml",
//       "price": 700,
//       "image": "https://www.picng.com/upload/water_bottle/png_water_bottle_17064.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 5,
//       "name": "Café con leche",
//       "price": 700,
//       "image": "https://cdn.picpng.com/cup__mug_coffee/photo-cup--mug-coffee-26997.png",
//       "type": "Desayuno",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 6,
//       "name": "Jugo de frutas natural",
//       "price": 700,
//       "image": "https://www.pngplay.com/wp-content/uploads/9/Fruit-Juice-PNG-Photo-Image.png",
//       "type": "Desayuno",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 7,
//       "name": "Hamburguesa simple",
//       "price": 1000,
//       "image": "https://img.cppng.com/download/2020-06/6-2-burger-png-image.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 8,
//       "name": "Hamburguesa doble",
//       "price": 1500,
//       "image": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/DoubleCheesburger_ProductDetail_500x540_1.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 9,
//       "name": "Papas fritas",
//       "price": 500,
//       "image": "https://pngimg.com/uploads/fries/fries_PNG97884.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 10,
//       "name": "Aros de cebolla",
//       "price": 500,
//       "image": "https://static.wixstatic.com/media/c79f9d_b25f2544dd0d4281be792a30f3171f2f~mv2.png/v1/fill/w_180,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tinseltown%20Onion%20Rings.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 11,
//       "name": "Bebida/gaseosa 750ml",
//       "price": 1000,
//       "image": "https://carta.menu/storage/media/dishes_main/1301413/coke20500ml-500x500-1531911519.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     },
//     {
//       "id": 12,
//       "name": "Bebida/gaseosa 500ml",
//       "price": 700,
//       "image": "https://carta.menu/storage/media/dishes_main/1301413/coke20500ml-500x500-1531911519.png",
//       "type": "Almuerzo",
//       "dateEntry": "2022-03-05 15:14:10"
//     }
//   ]

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