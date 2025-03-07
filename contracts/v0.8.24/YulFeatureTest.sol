// SPDX-License-Identifier: MIT
pragma solidity =0.8.24;

contract YulFeatureTest {

    
    function testTstore() public {
        assembly {
            tstore(0, 0x1234)
        }
    }

     function testTload() public view returns (uint256) {
        uint256 storedValue;
        assembly {
            storedValue := tload(0)
        }
        return storedValue;
    }

} 