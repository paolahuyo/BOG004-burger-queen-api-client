import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
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

it("User login whitout errors", async () =>{
    const history = createMemoryHistory()
    const  { debug } = render(
        <Router location={history.location} navigator={history}>
            <Login />
        </Router>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const pswInput = screen.getByPlaceholderText('Password')
    fireEvent.change(emailInput, {target: {value: 'grace.hopper@burguers.com'}})
    fireEvent.change(pswInput, {target: {value: '123456'}})
    const btnLogin = screen.getByText('Log In')
    fireEvent.click(btnLogin)
    await waitFor(() =>{
        debug()
        expect(history.location.pathname).toBe("/admin")
    })

})

it("User login whitout errors", async () =>{
    const history = createMemoryHistory()
    const  { debug } = render(
        <Router location={history.location} navigator={history}>
            <Login />
        </Router>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const pswInput = screen.getByPlaceholderText('Password')
    fireEvent.change(emailInput, {target: {value: 'burguerwaiter@burguers.com'}})
    fireEvent.change(pswInput, {target: {value: '123456'}})
    const btnLogin = screen.getByText('Log In')
    fireEvent.click(btnLogin)
    await waitFor(() =>{
        debug()
        expect(history.location.pathname).toBe("/waiter")
    })

})

it("User login whitout errors", async () =>{
    const history = createMemoryHistory()
    const  { debug } = render(
        <Router location={history.location} navigator={history}>
            <Login />
        </Router>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const pswInput = screen.getByPlaceholderText('Password')
    fireEvent.change(emailInput, {target: {value: 'burguerchef@burguers.com'}})
    fireEvent.change(pswInput, {target: {value: '123456'}})
    const btnLogin = screen.getByText('Log In')
    fireEvent.click(btnLogin)
    await waitFor(() =>{
        debug()
        expect(history.location.pathname).toBe("/kitchen")
    })

// })

