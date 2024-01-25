import * as web3 from "@solana/web3.js";
(async () => {
  let connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

  console.log(await connection.getBlockHeight(9418));

  let response = await connection.getBlock(173084191, 
    { 
      encoding: "json",
      transactionDetails: "full", 
      rewards: false,
      commitment: "finalized",
      maxSupportedTransactionVersion: 0 
    }
    );

  // console.log("\n\nget Block: \n", 
  // response.transactions[0].meta.innerInstructions[0]
  // );

  console.log("\n\nget Block: \n", 
  response.transactions[14]
  );


  console.log("\n\nget Block: \n", 
  response.transactions[89]
  );

  // console.log("\n\nget Parced Block: \n",
  //   await connection.getParsedBlock(156996370, { maxSupportedTransactionVersion: 0 })
  // );
})();
