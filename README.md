# Creating smart contracts using another smart contracts in solidity

I was struggling with testing in truffle smart contracts which are deploying other smart contracts.

At the beginning I thought that truffle Javascript testing only recognize addresses as contracts if deployed through Truffle migrations, but It's not true!

In this project I deploy a contract MomContract which within it's constructor deploys a daughter contract.

```javascript
 daughter = new DaughterContract(_daughtersName, _daughtersAge);
```

## Deployment

```bash
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
