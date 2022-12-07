import axios from 'axios'
import { useEffect } from 'react'
import { usePolling } from './usePolling'

const address = '0xecde133a5e73019e492b7c71640faaf0b20a7341'

const Test = () => {
  const { startPolling, stopPolling } = usePolling({
    interval: 2000,
    callback: () => axios.get(`https://test-nfts.ap.ngrok.io/inventory/get/items/${address}`),
    onSuccess: (data) => {
      console.log(data)

      return true
    },
    shouldRun: false
  })





  return <div>
    Hello Mobile app
  </div>
}

export default Test