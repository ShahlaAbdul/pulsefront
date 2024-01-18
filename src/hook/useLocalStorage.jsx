import React, { useEffect, useState } from 'react'

function useLocalStorage(key, initialVal="") {
    const [local, setLocal] = useState(
        localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)): initialVal
    )
    useEffect(() => {
  localStorage.setItem(key, JSON.stringify(local))

    }, [key, local])
    
  return [local,setLocal]
}

export default useLocalStorage