import React, { Component } from 'react';


function Home() {
  return (
    <div className="account">
      <h2>Checking</h2>
      <div className="balance">$0</div>
      <input type="text" placeholder="enter an amount" />
      <input type="button" value="Deposit" />
      <input type="button" value="Withdraw" />
    </div>
  )
}

export default Home;