this repository is used to store test code, test the features of different versions of the solidity compiler and language features on xdc.

### Testing features of v0.8.24

#### Language Features

- [ ] Testing `block.blobbasefee`: global function, retrieve the blob base fee of the current block.

* [ ] Testing `blobhash(uint)`: global function, retrieving versioned hashes of blobs, akin to the homonymous Yul builtin.
* [ ] Testing `blobbasefee()`: Yul builtin, retrieve the blob base fee of the current block.
* [ ] Testing `blobhash()`: Yul builtin, retrieve the versioned hashes of blobs associated with the transaction.
* [ ] Testing `mcopy()`: Yul builtin, cheaply copy data between memory areas.
* [ ] Testing `tload()`and `tstore()`: Yul builtin, load and store data from transient storage.

#### Compiler Features  

- [ ] if support the EVM version "Cancun".
- [ ] if support the `bytes.concat` except when string literals are passed as arguments.
- [ ] Test `--asm-json` output option.
- [ ] Testing warning feature when comparison of internal function pointers produce unexpected results.

### Testing features of v0.8.25

#### Language Features

- [ ] Code Generator: Use `MCOPY` instead of `MLOAD/MSTORE` loop when copying byte arrays.

#### Compiler Features

- [ ] EVM: Set default EVM version to `cancun`.
- [ ] Yul Analyzer: Emit transient storage warning only for the first occurrence of `tstore`.

### Testing features of v0.8.26

#### Language Features

- [ ] Introduce a new overload `require(bool, Error)` that allows usage of `require` functions with custom errors. This feature is available in the via-ir pipeline only.

#### Compiler Features

- [ ] SMTChecker: Create balance check verification target for CHC engine.
- [ ] Yul IR Code Generation: Cheaper code for reverting with errors of a small static encoding size.
- [ ] Yul Optimizer: New, faster default optimizer step sequence.

### Testing features of v0.8.27

#### Language Features

- [ ] Accept declarations of state variables with transient data location (parser support only, no code generation yet).
- [ ] Make require(bool, Error) available when using the legacy pipeline.
- [ ] Yul: Parsing rules for source location comments have been relaxed: Whitespace between the location components as well as single-quoted code snippets are now allowed.

#### Compiler Features

- [ ] Commandline Interface: Add --transient-storage-layout output.
- [ ] Commandline Interface: Allow the use of --asm-json output option in assembler mode to export EVM assembly of the contracts in JSON format.
- [ ] Commandline Interface: Do not perform IR optimization when only unoptimized IR is requested.
- [ ] Constant Optimizer: Uses PUSH0 if supported by the selected evm version.
- [ ] Error Reporting: Unimplemented features are now properly reported as errors instead of being handled as if they were bugs.
- [ ] EVM: Support for the EVM version "Prague".
- [ ] Peephole Optimizer: PUSH0, when supported, is duplicated explicitly instead of using DUP1.
- [ ] Peephole Optimizer: Remove identical code snippets that terminate the control flow if they occur one after another.
- [ ] SMTChecker: Add CHC engine check for underflow and overflow in unary minus operation.
- [ ] SMTChecker: Replace CVC4 as a possible BMC backend with cvc5.
- [ ] Standard JSON Interface: Add transientStorageLayout output.
- [ ] Standard JSON Interface: Do not perform IR optimization when only unoptimized IR is requested.
- [ ] Yul: Drop the deprecated typed Yul dialect that was only accessible via --yul in the CLI.
- [ ] Yul: The presence of types in untyped Yul dialects is now a parser error.
- [ ] Yul Optimizer: Caching of optimized IR to speed up optimization of contracts with bytecode dependencies.
- [ ] Yul Optimizer: The optimizer now treats some previously unrecognized identical literals as identical.

### Testing features of v0.8.28

#### Language Features

- [ ] Introduce a new overload `require(bool, Error)` that allows usage of `require` functions with custom errors. This feature is available in the via-ir pipeline only.

#### Compiler Features

- [ ] SMTChecker: Create balance check verification target for CHC engine.
- [ ] Yul IR Code Generation: Cheaper code for reverting with errors of a small static encoding size.
- [ ] Yul Optimizer: New, faster default optimizer step sequence.
