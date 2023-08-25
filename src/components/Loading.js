import React from 'react'
import { useGlobalContext } from './Context'

const Loading = () => {
  const {loading} = useGlobalContext()
  return (
    <div className={loading ? 'loading' : 'loading hide-loading'}>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loading
