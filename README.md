# Creating a contract with a smart contract

I was struggling with testing in truffle smart contracts that are deploying other smart contracts.

In the beginning, I thought that truffle Javascript testing only recognizes addresses as contracts if deployed through Truffle migrations, but **It's not true!**

In this project, I deploy a contract MomContract which within its constructor deploys a daughter contract.

```javascript
 daughter = new DaughterContract(_daughtersName, _daughtersAge);
```

## Deployment

```bash
npm install -g truffle
npm install -g ganache-cli
npm install
ganache-cli # Start a blockchian
truffle compile
truffle migrate
truffle test
```

Output:

```javascript
Contract: momContract
    moms attributes
      ✓ has the correct name
    creating daughter
      ✓ should create daughter with the correct name
      ✓ should create daughter on a correct address


  3 passing (534ms)
```
