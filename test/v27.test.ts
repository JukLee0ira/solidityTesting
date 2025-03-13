import { expect } from "chai";
import { ethers } from "hardhat";
import { RequireWithErrorTest } from "../typechain-types";

describe("v0.8.27_RequireWithErrorTest", function () {
  let requireTest: RequireWithErrorTest;

  beforeEach(async function () {
    const RequireWithErrorTest = await ethers.getContractFactory(
      "RequireWithErrorTest"
    );
    requireTest = await RequireWithErrorTest.deploy();
    await requireTest.deployed();
  });

  it("it should revert with self-defined error when input value is less than or equal to 100", function () {
    expect(requireTest.testRequireWithError(50))
      .to.be.revertedWithCustomError(requireTest, "InvalidValue")
      .withArgs(50);
  });
});
