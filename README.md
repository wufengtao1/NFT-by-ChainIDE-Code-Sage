#### Backend
1. ask

`
Provide an example of an NFT metadata service using the Express framework. The service should include a feature to query the details of two different planets, with the descriptions presented in a visualized manner, and return the metadata in JSON format.`

2. Create a folder called 'backend', then add a file named `server.js` and paste the code into this file

3. open sandbox

```
cd backend
npm init -y
yarn add express
node server.js
```

4. Forward port 3000

#### Contract

1. ask

`
Provide an example of a simple NFT contract written in Solidity that overrides the _baseURI() function, renames the private _baseURI variable to _myBaseURI, and includes a mint() function that automatically assigns the tokenId.
`

2. Create a folder called 'contracts', then create a file named `SimpleNFT.sol`, paste the code into this file, then compile,deploy this contract to testnet with params for baseUri:`portforwardPath + "/planets/"`,ex:`https://sandbox-462b47ed7bda42c1a3e0627df87d0edd-binance-3000.uat-sandbox.chainide.com/planets/`

#### Frontend

1. ask

`Provide an App.js file using React, which includes a connection to MetaMask using ethers.js and a function for minting an NFT (Only the "address" parameter).`

2. init react app

```
npx create-react-app frontend -y
```

3. then, copy generated frontend code to `frontend/src/App.js`
3. Define contractaddress and contractABI in `frontend/src/App.js`

5. start frontend

```
cd frontend
yarn add ethers@5.7.2
yarn start
```

6. Forward port 3001
7. Open port forwarded link and start minting.
