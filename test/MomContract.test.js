const DaughterContract = artifacts.require("DaughterContract");
const MomContract = artifacts.require("MomContract");

require("chai").should();

contract("momContract", accounts => {
  const _momsName = "Alice";
  const _momsAge = 50;
  const _daughtersName = "Berta";
  const _daughtersAge = 20;

  const [owner, ...otherAccounts] = accounts;

  beforeEach(async function() {
    this.mom = await MomContract.new(
      _momsName,
      _momsAge,
      _daughtersName,
      _daughtersAge,
      {
        from: owner
      }
    );
    
    this.daughterAddress = await this.mom.daughterAddress();

    this.daughter = await DaughterContract.at(this.daughterAddress);
    //this.daughter = await DaughterContract.at(this.mom.daughter().address);
  });

  describe("moms attributes", () => {
    it("has the correct name", async function() {
      const name = await this.mom.name();
      name.should.equal(_momsName);
    });
  });

  describe("creating daughter", () => {
    it("should create daughter with the correct name", async function() {
      const name = await this.daughter.name();
      name.should.equal(_daughtersName);
    });

    it("should create daughter on a correct address", async function() {
      this.daughterAddress.should.equal(this.daughter.address);
    });
  });

  
});
