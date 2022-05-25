// import type { NextPage } from 'next'
// import Head from 'next/head'

import { useWeb3 } from '@3rdweb/hooks'
import Header from '../components/Header'
import Hero from '../components/Hero'
const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Home = () => {
  const { address, connectWallet } = useWeb3()
  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Browser compatible
            <br />
            with metamask to run this app
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
