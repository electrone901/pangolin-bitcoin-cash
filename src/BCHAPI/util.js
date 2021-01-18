/*
utility file for certain .js operations used in applications/wallet
*/

// displays link to either the bch mainnet or tbch testnet for transactions
export function transactionStatus (transactionInput, network) {
  if (network === 'mainnet') {
    console.log(`https://explorer.bitcoin.com/bch/tx/${transactionInput}`)
  } else {
    console.log(`https://explorer.bitcoin.com/tbch/tx/${transactionInput}`)
  }
}