import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CartProvider } from '../Context/CartContext';
import Cart from './Cart';

describe('Cart Component', ()=> {

  sessionStorage.user = JSON.stringify({
      accessToken: 'tokenfortest',
    });

    const allProducts = [
        {
            "id": 1,
            "name": "Sandwich de jamón y queso",
            "price": 1000,
            "image": "https://banhmibaycafe.com.au/wp-content/uploads/2022/01/Sandwich.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 2,
            "name": "Café americano",
            "price": 500,
            "image": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Coffee-PNG/Cup_of_Coffee_PNG_Vector_Clipart.png?m=1507172107",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 3,
            "name": "Agua 500ml",
            "price": 500,
            "image": "https://www.picng.com/upload/water_bottle/png_water_bottle_17064.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 4,
            "name": "Agua 750ml",
            "price": 700,
            "image": "https://www.picng.com/upload/water_bottle/png_water_bottle_17064.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 5,
            "name": "Café con leche",
            "price": 700,
            "image": "https://cdn.picpng.com/cup__mug_coffee/photo-cup--mug-coffee-26997.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 6,
            "name": "Jugo de frutas natural",
            "price": 700,
            "image": "https://www.pngplay.com/wp-content/uploads/9/Fruit-Juice-PNG-Photo-Image.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 7,
            "name": "Hamburguesa simple",
            "price": 1000,
            "image": "https://img.cppng.com/download/2020-06/6-2-burger-png-image.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 8,
            "name": "Hamburguesa doble",
            "price": 1500,
            "image": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/DoubleCheesburger_ProductDetail_500x540_1.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 9,
            "name": "Papas fritas",
            "price": 500,
            "image": "https://pngimg.com/uploads/fries/fries_PNG97884.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 10,
            "name": "Aros de cebolla",
            "price": 500,
            "image": "https://static.wixstatic.com/media/c79f9d_b25f2544dd0d4281be792a30f3171f2f~mv2.png/v1/fill/w_180,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tinseltown%20Onion%20Rings.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 11,
            "name": "Bebida/gaseosa 750ml",
            "price": 1000,
            "image": "https://carta.menu/storage/media/dishes_main/1301413/coke20500ml-500x500-1531911519.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        },
        {
            "id": 12,
            "name": "Bebida/gaseosa 500ml",
            "price": 700,
            "image": "https://carta.menu/storage/media/dishes_main/1301413/coke20500ml-500x500-1531911519.png",
            "type": "Almuerzo",
            "dateEntry": "2022-03-05 15:14:10"
        }
        ]

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

    it('Evaluates the total of an order', async () => {
      const activeSession = JSON.parse(sessionStorage.user);
      const activeSessionToken = activeSession.accessToken;
      let cartItems = [
          {
            amount: 2,
            dateEntry: '2022-03-05 15:14:10',
            id: 6,
            image: 'https://www.pngplay.com/wp-content/uploads/9/Fruit-Juice-PNG-Photo-Image.png',
            name: 'Jugo de frutas natural',
            price: 700,
            type: 'Desayuno'
          },
          {
            amount: 1,
            dateEntry: '2022-03-05 15:14:10',
            id: 9,
            image: 'https://pngimg.com/uploads/fries/fries_PNG97884.png',
            name: 'Papas fritas',
            price: 500,
            type: 'Almuerzo',
          },
          {
            amount: 1,
            dateEntry: '2022-03-05 15:14:10',
            id: 12,
            image: 'https://carta.menu/storage/media/dishes_main/1301413/coke20500ml-500x500-1531911519.png',
            name: 'Bebida/gaseosa 500ml',
            price: 700,
            type: 'Almuerzo'
          }
      ];

      let totalOrder = '2600';

      const history = createMemoryHistory()
      const { debug } = render(
          <Router location={history.location} navigator={history}>
              <CartProvider>
                <Cart/>
              </CartProvider>
          </Router>
      )
        //falta hacer la correcta evaluación mockeando lo que pasa cartItems para que el total sea el equivalente a lo que se veria en pantalla
      await waitFor(() =>{
        debug();
        })
    })

    it('Btn Send Order to be in the document', async () => {

      const history = createMemoryHistory()
      const { debug } = render(
          <Router location={history.location} navigator={history}>
              <CartProvider>
                <Cart/>
              </CartProvider>
          </Router>
      )

      await waitFor(() =>{
        debug();
        const btnSendOrder = screen.getByText('Send Order')
        expect(btnSendOrder).toBeInTheDocument();
      })
    })
  })