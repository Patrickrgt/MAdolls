import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Mint() {
  return (
    <main
      className={` ${inter.className}`}
    >
 <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x0Fc9A29a7474DC997fA11bd7DE47559e6c2a0571&chain=%7B%22name%22%3A%22Base+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F84532.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Sepolia+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22basesep%22%2C%22chainId%22%3A84532%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22base-sepolia-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=ea762dcaca8c5f4c7115ab9460919623&theme=light&primaryColor=pink"
    width="600px"
    height="600px"
></iframe>
    </main>
  );
}
