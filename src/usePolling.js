import { useEffect, useRef, useState } from 'react'


export const usePolling = ({ callback, onSuccess, shouldRun, interval }) => {
  const isMounted = useRef();
  const intervalId = useRef();
  const persistedIsPolling = useRef();

  const [isPolling, togglePolling] = useState(false);

  persistedIsPolling.current = isPolling;

  useEffect(() => {
    console.log('shouldRun', shouldRun)
    if (!shouldRun) {
      return
    }

    isMounted.current = true;
    startPolling()
    return () => {
      stopPolling()
      isMounted.current = false;
    }
  }, [shouldRun])

  const stopPolling = () => {
    if (isMounted.current) {
      if (intervalId.current) {
        clearTimeout(intervalId.current);
        intervalId.current = null;
      }
      togglePolling(false);
    }

  };

  const startPolling = () => {
    togglePolling(true);

    runPolling()
  }


  const runPolling = () => {
    intervalId.current = setTimeout(async () => {
      try {
        const response = await callback()

        const continuePolling = onSuccess(response.data)

        if (persistedIsPolling.current && continuePolling) {
          intervalId.current *= interval
          runPolling()
        }
      } catch (err) {
        console.log(err)
      }

    }, interval)
  }

  return {
    startPolling,
    stopPolling
  }
}