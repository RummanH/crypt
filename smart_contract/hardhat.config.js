//https://eth-sepolia.g.alchemy.com/v2/XRV4YdqkigiyIfhaRPSa_V5oit4gR3uh
//npx hardhat run scripts/deploy.js --network sepolia

require("@nomiclabs/hardhat-waffle")
 
module.exports = {
  solidity: '0.8.0',
  networks :{
    sepolia : {
      url : 'https://eth-sepolia.g.alchemy.com/v2/XRV4YdqkigiyIfhaRPSa_V5oit4gR3uh',
      accounts:['4e8ad4fa1ceaa5e5f66decd893cc38d99b65e7ea56653cccea0087320643350c']
    }
  }
}