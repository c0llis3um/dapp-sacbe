import Fortmatic from 'fortmatic';
import { ethers } from 'ethers';

const fm = new Fortmatic('pk_test_387FEF2951047345', 'rinkeby');

const provider = new ethers.providers.Web3Provider(fm.getProvider());

const signer = provider.getSigner();

export default function useEthBalance() {
    const [balance, setBalance] = useState(0);

  useEffect(() => {
    signer.getAddress().then((address) => {
	  console.log(address);
	  return provider.getBalance(address);
	}).then((balance) => {
	  console.log(balance);
	});
  }, []);
}


