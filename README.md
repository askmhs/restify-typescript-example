# Restify TypeScript Example
### Getting Started:
- Clone this repository
- Change directory by running `cd restify-typescript-example` command
- Run `npm install` to install dependencies
- Edit the ENV variable values inside `.env` file and adjust Your configuration
- Run server: `npm start`

### Available Endpoints:
- Get list user
> GET `/user`

- Get detail user by user ID
> GET `/user/:id`

- Create new user
> POST `/user`
```
Request body:
- name: string
- email: string
- phone: string
```

- Update user
> PUT `/user/:id`
```
Request body:
- name?: string
- email?: string
- phone?: string
```

- Delete user
> DEL `/user/:id`