# MomDad'Z booking management system with data analytics

Project in Action - [MomDad'z](https://www.momdadz.com/)

#### Run The App Locally

make sure to install node in you pc
https://nodejs.org/en

#install dependencies
```sh
npm run install-client --force
npm run install --force
```

- create an 'env file'
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME, PORT=5000
- JWT_SECRET is compose of 256 bit key can be random numbers and letter
- JWT_LIFETIME is duration of the token example:1d
```sh
PORT=5000
MONGO_URL=<YOUR_MONGODB_DATABASE>
JWT_SECRET=<YOUR_JWT_SECRET>
JWT_LIFETIME=<YOUR_JWT_LIFETIME>
```


```sh
npm start
```

- visit url http://localhost:3000/
