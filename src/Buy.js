import { useEffect } from 'react'

const Buy = () => {
  useEffect(() => {
    window.location.replace(`https://mint.opn.network/claim?c=4EVE Exception`)
  }, [])

  return (
    <div>
      Hello from buy page
    </div>
  )
}

export default Buy