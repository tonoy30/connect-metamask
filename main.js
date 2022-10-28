import Web3 from 'web3';

const chainIdToNetworkNameMapping = {
	'0x1': 'Ethereum Main Network (Mainnet)',
	'0x3': 'Ropsten Test Network',
	'0x4': 'Rinkeby Test Network',
	'0x5': 'Goerli Test Network',
	'0x2a': 'Kovan Test Network',
	'0xaa36a7': 'Sepolia Test Network',
};

window.onload = () => {
	const connectWalletBtn = document.getElementById('connectWallet');
	const walletAddressElem = document.getElementById('walletAddress');
	const networkNameElem = document.getElementById('networkName');

	connectWalletBtn.addEventListener('click', connect);
	window.ethereum.on('chainChanged', handleChainChanged);

	async function connect() {
		if (window.ethereum) {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
			window.web3 = new Web3(window.ethereum);
			const account = window.web3.eth.accounts;
			const address = account.givenProvider.selectedAddress;
			handleWalletAddress(address);
			const chainId = await ethereum.request({ method: 'eth_chainId' });
			handleChainChanged(chainId);
		} else {
			alert('metamask is not installed or no wallet');
		}
	}

	function handleChainChanged(chainId) {
		networkNameElem.innerHTML = `Network Name: <span>${chainIdToNetworkNameMapping[chainId]}</span>`;
	}

	function handleWalletAddress(address) {
		walletAddressElem.innerHTML = `Wallet Address: <span>${address}</span>`;
	}
};
