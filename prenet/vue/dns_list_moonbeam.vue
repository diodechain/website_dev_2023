<template id="dns_list_mb">
  <div>
    <div class="title row">
      <div class="col-md-3 no-padding">
        <h1>Moonbeam Blockchain Name System v<% version %></h1>
      </div>
    </div>
    <div class="page-content">
      <div v-if="names.length == 0">
        <b class="loading">Loading...</b>
      </div>
      <div v-else class="row align-start">
        <div class="col-md-9 col-sm-9" v-if="names.length !== 0">
          <table class="data" id="blockchain-names">
            <caption>
              <div class="col-md-12 no-padding">
                Registered Blockchain Names (<% names.length %>/<% size %>)
                <br />
                <br />
              </div>
            </caption>
            <tr>
              <th>Name</th>
              <th>Destination</th>
              <th>Owner</th>
              <th>Registration</th>
            </tr>
            <tr v-for="name in names">
              <td><% name.name %></td>
              <td><% name.destination %></td>
              <td><% name.owner %></td>
              <td><% name.registration %></td>
            </tr>
          </table>
        </div>
        <div v-else class="col-md-9 col-sm-9">
          <table class="data" style="width: 100%">
            <caption>No BNS available</caption>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var MDNSList = Vue.component("dns_list_mb", {
  template: document.getElementById("dns_list_mb").innerHTML,
  delimiters: ["<%", "%>"],
  data: () => {
    return {
      blocks: {},
      hashes: [],
      names: [],
      version: 0,
      size: "loading",
      web3: new Web3("wss://moonbeam.api.onfinality.io/ws?apikey=49e8baf7-14c3-4d0f-916a-94abf1c4c14a")
    };
  },

  created: async function () {
    this.version = web3.utils.hexToNumber(await this.callDNS("Version", []));
    
    let hashes = await this.callDNS("AllNames", []);
    this.size = hashes.length;
    console.log(hashes);
    this.resolve(hashes.map((hash) => hash));
  },
  methods: {
    resolve: async function (hashes) {
      for (let i = 0; i < 10; i++) {
        if (hashes.length == 0) return;
        let hash = hashes.pop();
        let name = await this.callDNS("names", [hash]);
        let nr = name.leaseEnd - 518400;
        let block = this.blocks[nr];
        if (!block) block = this.blocks[nr] = await this.web3.eth.getBlock(nr);
        name.registration = new Date(block.timestamp * 1000).toLocaleString();
        this.names.push(name);
      }
      await this.resolve(hashes);
    },
    callDNS: async function (method, params) {
      let abi = dnsMethods[method];
      let call = this.web3.eth.abi.encodeFunctionCall(abi, params)
      let data = await this.web3.eth.call({
          to: "0x8a093e3A83F63A00FFFC4729aa55482845a49294",
          data: call,
          gasPrice: 0
      })

      if (abi.outputs) {
        if (abi.outputs[0].components) {
          data = this.web3.eth.abi.decodeParameters(abi.outputs[0].components, data);
        } else {
          data = this.web3.eth.abi.decodeParameter(abi.outputs[0], data);
        }
      }
      return data;
    },
  },
});
</script>
