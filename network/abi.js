const DNSAddr = "0xaf60faa5cd840b724742f1af116168276112d6a6"
const Registry = "0xD78653669fd3df4dF8F3141Ffa53462121d117a4"
const NodeRegistry = "0xc4b466f63c0A31302Bc8A688A7c90e1199Bb6f84"
const DiodeToken = "0x434116a99619f2B465A137199C38c1Aab0353913"
const FleetFactory = "0xa21D0a54dFee3Ff4B9f82959C09B538863744839"
let DNSActive = {};
let DNSCache = {}
let DNSAlias = {
    "0x937c492a77ae90de971986d003ffbc5f8bb2232c": "EU1",
    "0xae699211c62156b8f29ce17be47d2f069a27f2a6": "EU2",
    "0xceca2f8cf1983b4cf0c1ba51fd382c2bc37aba58": "US1",
    "0x7e4cd38d266902444dc9c8f7c0aa716a32497d0b": "US2",
    "0x68e0bafdda9ef323f692fc080d612718c941d120": "AS1",
    "0x1350d3b501d6842ed881b59de4b95b27372bfae8": "AS2",
    Registry: "Registry",
    DNSAddr: "BNS",
    "0xbada81fae68925fec725790c34b68b5faca90d45": "Faucet 1",
    "0x34e3961098de3348b465cc82791bd0f7ebce3ecd": "Faucet 2",
    "0xc0c416b326133d74335e6828d558efe315bd597e": "Faucet 3",
    "0x58cc80f5526594f07f33fd4be4aef153bab602b2": "Faucet 4",
    "0x45aa0730cf4216f7195fc1f5903a171a1faa5209": "Faucet 5"
}

const PredefinedGraphicColors = ['#F15C2E', '#0272FF', "#38AB66", "#161C2A", "#969FA8",
    '#D15B2E', '#9279FF', "#88AA76", "#1952AA", "#00445B"];
const FleetHash = "0x7e9d94e966d33cff302ef86e2337df8eaf9a6388d45e4744321240599d428343"
const NullHash = "0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
const NullValue = "0x0000000000000000000000000000000000000000000000000000000000000000"
const NullAddr = "0x0000000000000000000000000000000000000000"
const NOT_FOUND_INDEX = -1

const ACCOUNTS_FILTER_MAP = {
    "fleets": "Fleet",
    "contracts": "Contract",
    "wallets": "Wallet"
}

const ACCOUNTS_ALL_FILTER = "All"

var fleetMethods = {
    "deviceWhitelist": {
        name: "deviceWhitelist",
        type: "function",
        inputs: [{
            type: "address",
            name: "device"
        }],
    },

    "accessWhitelist": {
        name: "accessWhitelist",
        type: "function",
        inputs: [{
            type: "address",
            name: "device"
        }, {
            type: "address",
            name: "client"
        }],
    },

    "SetAccessWhitelist": {
        name: "SetAccessWhitelist",
        type: "function",
        inputs: [{
            type: "address",
            name: "device"
        },
        {
            type: "address",
            name: "device2"
        },
        {
            type: "bool",
            name: "allowed"
        }]
    },
    "SetDeviceWhitelist": {
        name: "SetDeviceWhitelist",
        type: "function",
        inputs: [{
            type: "address",
            name: "device"
        },
        {
            type: "bool",
            name: "allowed"
        }]
    },

}

var registryMethods = {
    "Version": {
        name: "Version",
        type: "function",
        inputs: [],
        outputs: [{
            type: "uint256",
            name: "version"
        }]
    },
    "Epoch": {
        name: "Epoch",
        type: "function",
        inputs: [],
        outputs: [{
            type: "uint256",
            name: "epoch"
        }]
    },
    "FleetArray": {
        name: "FleetArray",
        type: "function",
        inputs: [],
        outputs: [{
            type: "address[]",
            name: "fleets"
        }]
    },
    "GetFleet": {
        name: "GetFleet",
        type: "function",
        inputs: [{
            type: "address",
            name: "fleet"
        }],
        outputs: [{
            internalType: "struct Fleet",
            name: "",
            type: "tuple",
            components: [
                { type: "bool", name: "exists" },
                { type: "uint256", name: "currentBalance" },
                { type: "uint256", name: "withdrawRequestSize" },
                { type: "uint256", name: "withdrawableBalance" },
                { type: "uint256", name: "currentEpoch" },
                { type: "uint256", name: "score" }
            ]
        }]
    },
    "ContractStake": {
        name: "ContractStake",
        type: "function",
        inputs: [
            { type: "address", name: "fleet" },
            { type: "uint256", name: "amount" }
        ],
        outputs: []
    },
    "GetClientScore": {
        name: "GetClientScore",
        type: "function",
        inputs: [
            { type: "address", name: "fleet" },
            { type: "address", name: "nodeAdress" },
            { type: "address", name: "clientAddress" }
        ],
        outputs: [{
            type: "uint256",
            name: "score"
        }]
    },
    "RelayArray": {
        name: "RelayArray",
        type: "function",
        inputs: [],
        outputs: [{
            type: "address[]",
            name: "relays"
        }]
    },
    "RelayRewards": {
        name: "RelayRewards",
        type: "function",
        inputs: [{
            type: "address",
            name: "relay"
        }],
        outputs: [{
            type: "uint256",
            name: "rewards"
        }]
    },
    "GetNode": {
        name: 'GetNode',
        type: 'function',
        inputs: [
            { type: 'address', name: 'fleet' },
            { type: 'address', name: 'node' }
        ],
        outputs: [{
            internalType: "struct Node",
            name: "",
            type: "tuple",
            components: [
                { type: "address", name: "node" },
                { type: "uint256", name: "score" }
            ]
        }]
    }
}

var nodeRegistryMethods = {
    "nodes": {
        name: "nodes",
        type: "function",
        inputs: [{type: "address", name: "node" }],
        outputs: [{
            internalType: "struct Node",
            name: "",
            type: "tuple",
            components: [
                { type: "address", name: "accountant" },
                { type: "address", name: "node" },
                { type: "uint256", name: "stake" }
            ]
        }]
    }
}

var dnsMethods = {
    "Resolve": {
        name: 'Resolve',
        type: 'function',
        inputs: [{
            type: 'string',
            name: 'name'
        }]
    },
    "ResolveEntry": {
        name: 'ResolveEntry',
        type: 'function',
        inputs: [{
            type: 'string',
            name: 'name'
        }],
        outputs: [{
            components: [
                {
                    internalType: "address",
                    name: "destination",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string"
                },
                {
                    internalType: "address[]",
                    name: "destinations",
                    type: "address[]"
                },
                {
                    internalType: "string[]",
                    name: "properties",
                    type: "string[]"
                },
                {
                    internalType: "uint256",
                    name: "lockEnd",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "leaseEnd",
                    type: "uint256"
                }
            ],
            internalType: "struct IBNS.BNSEntry",
            name: "",
            type: "tuple"
        }],
    },
   
    "Register": {
        name: 'Register',
        type: 'function',
        inputs: [{
            type: 'string',
            name: 'name'
        }, {
            type: 'address',
            name: 'destination'
        }]
    },
    "Unregister": {
        name: 'Unregister',
        type: 'function',
        inputs: [{
            type: 'string',
            name: 'name'
        }]
    },
    "TransferOwner": {
        name: 'TransferOwner',
        type: 'function',
        inputs: [{
            type: 'string',
            name: 'name'
        }, {
            type: 'address',
            name: 'new_owner'
        }]
    },
    "Version": {
        name: 'Version',
        type: 'function',
        inputs: []
    },
    "names": {
        name: 'names',
        type: 'function',
        inputs: [{
            type: 'bytes32',
            name: 'hash'
        }],
        outputs: [{
            components: [
                {
                    internalType: "address",
                    name: "destination",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string"
                },
                {
                    internalType: "uint256",
                    name: "lockEnd",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "leaseEnd",
                    type: "uint256"
                }
            ],
            internalType: "struct IBNS.BNSEntry",
            name: "",
            type: "tuple"
        }],
    },
    "namesIndex": {
        name: 'namesIndex',
        type: 'function',
        inputs: [{
            type: 'uint256',
            name: 'index'
        }],
        outputs: [{
            type: 'bytes32',
            name: 'hash'
        }]
    },
    "AllNames": {
        name: 'AllNames',
        type: 'function',
        inputs: [],
        outputs: [{
            type: 'bytes32[]',
            name: 'hashes'
        }]
    },
    "AllNamesLength": {
        name: 'AllNamesLength',
        type: 'function',
        inputs: [],
        outputs: [{
            type: 'uint256',
            name: 'length'
        }]
    }
}

var bridgeInMethods = {
    "inTxsAt": {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chain",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "inTxsAt",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "destination",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "historyHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumber",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BridgeIn.InTransaction",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "inTxsLength": {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chain",
                "type": "uint256"
            }
        ],
        "name": "inTxsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
}

var bridgeOutMethods = {
    "txsAt": {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chain",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "txsAt",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "destination",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "historyHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct BridgeOutNative.Transaction",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "txsLength": {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chain",
                "type": "uint256"
            }
        ],
        "name": "txsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
}

var fleetFactoryMethods = {
    "CreateFleetContract": {
        name: "CreateFleetContract",
        type: "function",
        inputs: [
            { type: "address", name: "_operator" },
            { type: "address", name: "_accountant" }
        ],
        outputs: [{
            type: "address",
            name: ""
        }]
    },
    "GetCreatorFleetContractCount": {
        name: "GetCreatorFleetContractCount",
        type: "function",
        inputs: [{
            type: "address",
            name: "_creator"
        }],
        outputs: [{
            type: "uint256",
            name: ""
        }]
    },
    "GetCreatorFleetContract": {
        name: "GetCreatorFleetContract",
        type: "function",
        inputs: [
            { type: "address", name: "_creator" },
            { type: "uint256", name: "_index" }
        ],
        outputs: [{
            type: "address",
            name: ""
        }]
    },
    "GetOperatorFleetContractCount": {
        name: "GetOperatorFleetContractCount",
        type: "function",
        inputs: [{
            type: "address",
            name: "_operator"
        }],
        outputs: [{
            type: "uint256",
            name: ""
        }]
    },
    "GetOperatorFleetContract": {
        name: "GetOperatorFleetContract",
        type: "function",
        inputs: [
            { type: "address", name: "_operator" },
            { type: "uint256", name: "_index" }
        ],
        outputs: [{
            type: "address",
            name: ""
        }]
    },
    "GetAccountantFleetContractCount": {
        name: "GetAccountantFleetContractCount",
        type: "function",
        inputs: [{
            type: "address",
            name: "_accountant"
        }],
        outputs: [{
            type: "uint256",
            name: ""
        }]
    },
    "GetAccountantFleetContract": {
        name: "GetAccountantFleetContract",
        type: "function",
        inputs: [
            { type: "address", name: "_accountant" },
            { type: "uint256", name: "_index" }
        ],
        outputs: [{
            type: "address",
            name: ""
        }]
    }
}

async function callMoonbeam(abi, to, args) {
    let call = moonbeam.eth.abi.encodeFunctionCall(abi, args)
    let data = await moonbeam.eth.call({
        to: to,
        data: call,
        gasPrice: 0
    })

    if (abi.outputs) {
        if (abi.outputs[0].components) {
            data = moonbeam.eth.abi.decodeParameters(abi.outputs[0].components, data);
        } else {
            data = moonbeam.eth.abi.decodeParameter(abi.outputs[0], data);
        }
    }
    return data;
}

function call(abi, to, args, callback) {
    let call = web3.eth.abi.encodeFunctionCall(abi, args)
    web3.eth.call({
        to: to,
        data: call,
        gasPrice: 0
    }).then((data) => {
        if (abi.outputs) {
            data = web3.eth.abi.decodeParameter(abi.outputs[0], data)
        }
        callback(data)
    })
}

async function async_call(abi, to, args) {
    let call = web3.eth.abi.encodeFunctionCall(abi, args)
    let data = await web3.eth.call({
        to: to,
        data: call,
        gasPrice: 0
    })
    if (abi.outputs) {
        data = web3.eth.abi.decodeParameter(abi.outputs[0], data)
    }
    return data;
}

function CallDNS(name, args, callback) {
    call(dnsMethods[name], DNSAddr, args, callback)
}

async function CallNodeRegistry(name, args) {
    return await callMoonbeam(nodeRegistryMethods[name], NodeRegistry, args)
}

async function CallRegistry(name, args) {
    return await callMoonbeam(registryMethods[name], Registry, args)
}

async function CallToken(name, args) {
    return await callMoonbeam(erc20Abi.find(m => m.name === name), DiodeToken, args)
}

function CallFleet(name, to, args, callback) {
    call(fleetMethods[name], to, args, callback)
}

async function CallFleetFactory(name, args) {
    try {
        return await callMoonbeam(fleetFactoryMethods[name], FleetFactory, args);
    } catch (error) {
        console.error(`CallFleetFactory(${name}) error:`, error);
        throw error;
    }
}

function NewWeb3(url) {
    let options = {
        clientConfig: { keepalive: true, keepaliveInterval: 60000 },
        reconnect: { auto: true, delay: 5000, maxAttempts: 5, onTimeout: false }
    };
    let provider = new Web3.providers.WebsocketProvider(url, options);
    let obj = new Web3(provider);
    obj.extend({
        property: 'eth',
        methods: [
            {
                name: 'traffic',
                call: 'dio_proxy|dio_traffic',
                params: 2,
                inputFormatter: [(node_id) => node_id, (chain_id) => chain_id]
            },
            {
                name: 'traffic2',
                call: 'dio_proxy|dio_traffic',
                params: 3,
                inputFormatter: [(node_id) => node_id, (chain_id) => chain_id, (epoch) => epoch]
            },
            {
                name: 'usage',
                call: 'dio_proxy|dio_usage',
                params: 1,
                inputFormatter: [(node_id) => node_id]
            },
            {
                name: 'usageHistory',
                call: 'dio_proxy|dio_usageHistory',
                params: 4,
                inputFormatter: [(node_id) => node_id, (from) => from, (to) => to, (stepping) => stepping]
            },
            {
                name: 'connectivity',
                call: 'dio_proxy|dio_checkConnectivity',
                params: 1,
                inputFormatter: [(node_id) => node_id]
            },
            {
                name: 'getNode',
                call: 'dio_getNode',
                params: 1,
                inputFormatter: [obj.extend.formatters.inputAddressFormatter]
            },
            {
                name: 'network',
                call: 'dio_network',
                params: 0,
            },
            {
                name: 'getObject',
                call: 'dio_getObject',
                params: 1,
                inputFormatter: [obj.extend.formatters.inputAddressFormatter]
            }]
    })
    obj.extend({
        property: 'eth',
        methods: [{
            name: 'getCodeHash',
            call: 'eth_getCodeHash',
            params: 2,
            inputFormatter: [obj.extend.formatters.inputAddressFormatter, obj.extend.formatters.inputDefaultBlockNumberFormatter]
        },
        {
            name: 'getStorage',
            call: 'eth_getStorage',
            params: 2,
            inputFormatter: [obj.extend.formatters.inputAddressFormatter, obj.extend.formatters.inputDefaultBlockNumberFormatter]
        }]
    });
    return obj;
}
