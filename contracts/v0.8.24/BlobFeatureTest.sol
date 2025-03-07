// SPDX-License-Identifier: MIT
pragma solidity =0.8.24;

contract BlobFeatureTest {
	function testconnect() public view returns (uint256) {
		return block.chainid;
	}
    // Test block.blobbasefee
    function testBlobBaseFee() external view returns (uint256 blobBaseFee) {
        blobBaseFee = block.blobbasefee;
        return blobBaseFee;
    }

    // Test blobhash(uint)
    function testBlobHash(uint256 index) public view returns (bytes32) {
       return blobhash(index);

    }
} 