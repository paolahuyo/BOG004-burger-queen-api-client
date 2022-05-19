import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

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
    console.log(errMsg.textContent)
    expect(errMsg.textContent).toBe('El usuario o contraseña son erroneos')
});
