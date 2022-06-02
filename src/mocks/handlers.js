import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('http://localhost:8080/login', (req, res, ctx)  => {
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
            ctx.status(200),
        )
    }),

    // Handles a GET /user request
    rest.get('http://localhost:8080/users', (req, res, ctx) =>{
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        if(!isAuthenticated){
            return res(
                ctx.status(404),
                ctx.json({
                    errorMessage: 'Not authorized',
                })
            )
        }

    return res(
        ctx.status(200),
        ctx.json({
            roles: "admin",
        })
    )
    }),
  ]