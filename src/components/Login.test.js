import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import axios from 'axios';

// npm test -- login.test.js

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockUseNavigate,
}));

const userMock = {};
const dispatchMock = () => { };

test('toAccess', async () => {
    axios.post.mockResolvedValue({
        data: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJ3YWl0ZXJAYnVyZ3VlcnMuY29tIiwiaWF0IjoxNjU0NjIzNjM2LCJleHAiOjE2NTQ2MjcyMzYsInN1YiI6IjMifQ.Yo3LoRg1w4LmIZseiW53MdfY7WMLQK8XFhtfGdOLspY",
            user: {
                email: "grace.hopper@burguers.com",
                roles: {
                    admin: true
                },
                id: 2
            }
        }
    });
    const history = createMemoryHistory()
    const { debug } = render(
        <Router location={history.location} navigator={history} value={{
            user: userMock,
            dispatch: dispatchMock
        }}>
            < Login />
        </Router>
    );

    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
        debug()
        expect(mockUseNavigate).toHaveBeenCalledWith("/admin", { replace: true });
    });
});;


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

it("Admin user login without errors", async () =>{
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

it("Waiter user login without errors", async () =>{
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

it("Chef user login without errors", async () =>{
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

<<<<<<< HEAD
})

=======
})
>>>>>>> a4900eea (Haciendo test de login)
