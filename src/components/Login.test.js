import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Login from './Login'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

// npm test -- login.test.js

it('Componente login', async () => {
    const history = createMemoryHistory()
    const { debug } = render(
        <Router location={history.location} navigator={history}>
            <Login />
        </Router>
    )
    const emailInput = screen.getByPlaceholderText('Email')
    const pswInput = screen.getByPlaceholderText('Password')
    fireEvent.change(emailInput, {target: {value: 'paola@gmail.com'}})
    fireEvent.change(pswInput, {target: {value: '13234567'}})
    const btnLogin = screen.getByText('Log In')
    fireEvent.click(btnLogin)
    let errMsg;
    await waitFor(() => errMsg = screen.getByTestId('login-error-message'));
    debug()
    expect(errMsg.textContent).toBe('The email or password is wrong')
});

// it("User login whitout errors", () =>{
//     render(<Login />);

//     userEvent.type(screen.getByPlaceholderText('Email'), 'grace.hopper@burguers.com');
//     userEvent.type(screen.getAllByPlaceholderText('Password'), '123456');

//     userEvent.click(screen.getAllByRole('button'), {name: 'Log In'});

//     expect(screen)

// })

