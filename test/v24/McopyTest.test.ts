import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";

describe("McopyTest", function () {
  let mcopyTest: any;

  before(async function () {
    const McopyTest = await ethers.getContractFactory("McopyTest");
    mcopyTest = await McopyTest.deploy();
    await mcopyTest.deployed(); // 确保合约已部署
    console.log("address", mcopyTest.address);
  });

  describe("测试mcopy()", function () {
    it("预期值为0x50", async function () {
      const copiedData = await mcopyTest.testMcopy();
      // 应该返回32字节的值
      const expectedData = ethers.utils.hexZeroPad("0x50", 32);
      expect(copiedData).to.equal(expectedData);
    });
  });
});
