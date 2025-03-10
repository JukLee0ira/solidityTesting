import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";

describe("BlobFeatureTest", function () {
  // 修改为普通的 beforeEach 部署方式
  let blobFeatureTest: any;

  beforeEach(async function () {
    const BlobFeatureTest = await ethers.getContractFactory("BlobFeatureTest");
    blobFeatureTest = await BlobFeatureTest.deploy();
    console.log("address", blobFeatureTest.address);
  }); //TODO:拆分

  describe("基础功能测试", function () {
    it("应该能够获取chainId", async function () {
      const chainId = await blobFeatureTest.testconnect();
      expect(chainId).to.equal(63823);
      31137;
    });

    it("应该能够获取blob基础费用", async function () {
      const blobBaseFee = await blobFeatureTest.testBlobBaseFeeSolidity();
      // blob基础费用应该是一个非负数
      expect(blobBaseFee).to.be.gte(0);
    });

    it("应该能够获取blob哈希", async function () {
      const blobHash = await blobFeatureTest.testBlobHashSolidity(1);
      // blob哈希应该是一个32字节的值
      expect(blobHash).to.match(/^0x[0-9a-f]{64}$/i);
    });

    it("应该能使用Yul获取blob基础费用", async function () {
      const blobBaseFee = await blobFeatureTest.testBlobBaseFeeYul();
      // blob基础费用应该是一个非负数
      expect(blobBaseFee).to.be.gte(0);
    });

    it("应该能使用Yul获取blob哈希", async function () {
      const blobHash = await blobFeatureTest.testBlobHashYul();
      // blob哈希应该是一个32字节的值
      expect(blobHash).to.match(/^0x[0-9a-f]{64}$/i);
    });
  });
});
