declare const abi: [
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      },
      {
        internalType: "address";
        name: "caller";
        type: "address";
      }
    ];
    name: "AccessDenied";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "delegator";
        type: "address";
      },
      {
        internalType: "address";
        name: "delegatee";
        type: "address";
      }
    ];
    name: "DelegationNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "FieldLayoutLib_InvalidLength";
    type: "error";
  },
  {
    inputs: [];
    name: "FieldLayoutLib_StaticLengthDoesNotFitInAWord";
    type: "error";
  },
  {
    inputs: [];
    name: "FieldLayoutLib_StaticLengthIsZero";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "functionSelector";
        type: "bytes4";
      }
    ];
    name: "FunctionSelectorExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "functionSelector";
        type: "bytes4";
      }
    ];
    name: "FunctionSelectorNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }
    ];
    name: "InsufficientBalance";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "contractAddress";
        type: "address";
      },
      {
        internalType: "bytes4";
        name: "interfaceId";
        type: "bytes4";
      }
    ];
    name: "InterfaceNotSupported";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "InvalidSelector";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "module";
        type: "string";
      }
    ];
    name: "ModuleAlreadyInstalled";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "PackedCounter_InvalidLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "ResourceExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "ResourceNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "uint256";
        name: "start";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "end";
        type: "uint256";
      }
    ];
    name: "Slice_OutOfBounds";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_InvalidDataLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "system";
        type: "address";
      }
    ];
    name: "SystemExists";
    type: "error";
  },
  {
    inputs: [];
    name: "_msgSender";
    outputs: [
      {
        internalType: "address";
        name: "sender";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "_msgValue";
    outputs: [
      {
        internalType: "uint256";
        name: "value";
        type: "uint256";
      }
    ];
    stateMutability: "pure";
    type: "function";
  },
  {
    inputs: [];
    name: "_world";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "interfaceId";
        type: "bytes4";
      }
    ];
    name: "supportsInterface";
    outputs: [
      {
        internalType: "bool";
        name: "";
        type: "bool";
      }
    ];
    stateMutability: "pure";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes16";
        name: "fromNamespace";
        type: "bytes16";
      },
      {
        internalType: "address";
        name: "toAddress";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }
    ];
    name: "transferBalanceToAddress";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes16";
        name: "fromNamespace";
        type: "bytes16";
      },
      {
        internalType: "bytes16";
        name: "toNamespace";
        type: "bytes16";
      },
      {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }
    ];
    name: "transferBalanceToNamespace";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;