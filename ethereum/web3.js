import Web3 from 'web3';


let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){

  //we are now in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);

}else{

  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c9bb4af46d074aa49879a4271edad479'
  );

  web3 = new Web3(provider);
}

export default web3;
