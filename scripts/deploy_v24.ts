import { ethers } from "hardhat";

async function main() {
  // 部署BlobFeatureTest
  const BlobFeatureTest = await ethers.getContractFactory("BlobFeatureTest");
  const blobFeatureTest = await BlobFeatureTest.deploy();
  await blobFeatureTest.deployed();
  console.log(`BlobFeatureTest deployed to ${blobFeatureTest.address}`);

  // 部署BytesConcatTest
  const BytesConcatTest = await ethers.getContractFactory("BytesConcatTest");
  const bytesConcatTest = await BytesConcatTest.deploy();
  await bytesConcatTest.deployed();
  console.log(`BytesConcatTest deployed to ${bytesConcatTest.address}`);

  // 部署FunctionPointerTest
  const FunctionPointerTest = await ethers.getContractFactory(
    "FunctionPointerTest"
  );
  const functionPointerTest = await FunctionPointerTest.deploy();
  await functionPointerTest.deployed();
  console.log(`FunctionPointerTest deployed to ${functionPointerTest.address}`);

  // 部署TransientStorageTest
  const TransientStorageTest = await ethers.getContractFactory(
    "TransientStorageTest"
  );
  const TransientStorageTest = await TransientStorageTest.deploy();
  await TransientStorageTest.deployed();
  console.log(
    `TransientStorageTest deployed to ${TransientStorageTest.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
