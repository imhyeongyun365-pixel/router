import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
    const {id}=useParams()
        return (
    <div>{id}의 AboutDetail</div>
  )

}
export default AboutDetail