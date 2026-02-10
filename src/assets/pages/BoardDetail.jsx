import React from 'react'
import { useParams } from 'react-router-dom'
const BoardDetail = () => {
    const {id}=useParams()
  return (
    <div>{id}의 BoardDetail페이지</div>
  )
}

export default BoardDetail