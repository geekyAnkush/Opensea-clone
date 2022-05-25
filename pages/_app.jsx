import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

// supported chain id = 4(Rinkibi)
// injected connector for metamask
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
