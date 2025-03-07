import { expect } from "chai";
import { ethers } from "hardhat";
import { TransientStorageTest } from "../../typechain-types";

describe("TransientStorageTest", function () {
  let yulFeatureTest: TransientStorageTest;

  beforeEach(async function () {
    const TransientStorageTest = await ethers.getContractFactory(
      "TransientStorageTest"
    );
    yulFeatureTest = await TransientStorageTest.deploy();
    await yulFeatureTest.deployed();
  });

  it("initial value should be 0", async function () {
    const initialStoredValue = await yulFeatureTest.testTload();
    expect(initialStoredValue).to.equal(0);
  });

  it("should store the value 0x1234 in storage slot 0", async function () {
    const storedValue = await yulFeatureTest.callStatic.testTstore();
    expect(storedValue).to.equal(0x1234);
  });
});
