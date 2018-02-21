# DestructoChat
Self-Destructing Message App (MERN)

### Deployed Link
visit the live demo here: https://destructochat.herokuapp.com/

### Installing
1. Fork and/or clone the repo
2. Install dependencies and start express server which will run a build
```
npm install
npm start
```

## For development
3. To run webpack dev server and nodemon (best for most cases)
```
npm run webpack:dev
npm run node:watch

```
4. Alternatively you can run express server with nodemon and webpack with watch (w/o webpack dev server)
```
npm run node:watch
npm run node:webpack:watch

```
or to run them together
```
npm run node:dev
```

If you're not sure what to choose, option 3 is your best bet for development mode.

## Seed Database
5. To clear database and seed with a few sample comments you can run these commands. One reseeds on save, the other doesn't.

```
npm run seed
npm run seed:watch
```


## Important
6. Please look at the example.variables.env file. You will have to add your MongoDB uri and rename the file to variables.env to connect.

7. Currently socket.io is setup to connect to the deployed heroku server. If you would like to connect to your own server, then update the endpoint/socket address in /src/socketConnection.js

