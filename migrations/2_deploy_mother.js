const MomContract = artifacts.require("MomContract.sol");

module.exports = async function(deployer) {
  const _momsName = "Alice";
  const _momsAge = 50;
  const _daughtersName = "Berta";
  const _daughtersAge = 20;

  await deployer.deploy(
    MomContract,
    _momsName,
    _momsAge,
    _daughtersName,
    _daughtersAge
  );

  const mother = await MomContract.deployed();

  return true;
};
