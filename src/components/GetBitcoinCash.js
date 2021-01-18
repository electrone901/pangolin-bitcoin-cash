import React, {useState} from 'react';

import { SendBCHAPI } from '../BCHAPI/send-bch';

function Test() {
  const [transactionStatus, setTransactionStatus] = useState("");

  async function send(){

    await SendBCHAPI();
    setTransactionStatus("Success");
  }
  return (
    <div className="container">
        <h1>Redeem  PangoPoints for Bitcoin</h1>
        <p>For all your hard work, you have aaccumulated a balance of 12,400 PangoPoints!</p>
        <div className="form-group">
          <label htmlFor="address">Enter your Bitcoin Cash Address</label>
          <input type="text" className="form-control" id="address" placeholder="bchtest:2919jsdjjaisfa" />
        </div>
        <button className="btn btn-primary btn-lg" onClick={() => send()}>Get Bitcoin Cash</button>
        <p>{transactionStatus}</p>
        <img src="/images/pangowithpileofbitcoin.png" alt="Coin" />
    </div>
  );
}

export default Test;
