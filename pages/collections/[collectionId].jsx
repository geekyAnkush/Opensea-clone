import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
  const router = useRouter()
  const { collectionId } = router.query
  return <div>{collectionId}</div>
}

export default Collection
