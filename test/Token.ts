import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import assert from "assert";

describe("GTXToken", function () {
  let gtxToken: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    const GTXTokenFactory = await ethers.getContractFactory("GTXToken");
    [owner, addr1, addr2] = await ethers.getSigners();
    gtxToken = await GTXTokenFactory.deploy(1000000);
    await gtxToken.deployed();
  });

  it("Should have correct name and symbol", async function () {
    assert.strictEqual(await gtxToken.name(), "Gatox");
    assert.strictEqual(await gtxToken.symbol(), "GTX");
  });

  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerAddress = await owner.getAddress();
    const ownerBalance = await gtxToken.balanceOf(ownerAddress);
    assert((await gtxToken.totalSupply()).eq(ownerBalance));
  });

  it("Should transfer tokens between accounts", async function () {
    const addr1Address = await addr1.getAddress();
    await gtxToken.transfer(addr1Address, 50);
    const addr1Balance = await gtxToken.balanceOf(addr1Address);
    assert(addr1Balance.eq(50));

    const addr2Address = await addr2.getAddress();
    await gtxToken.connect(addr1).transfer(addr2Address, 50);
    const addr2Balance = await gtxToken.balanceOf(addr2Address);
    assert(addr2Balance.eq(50));
  });
});