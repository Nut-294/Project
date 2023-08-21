"use client"
import react from 'react'

const Test = async () => {
  const targetDate = "2021-09-01T00:00:00.000Z"
  const response = await fetch(`http://localhost:3000/api/testsite?targetDate=${targetDate}`)
  const filteredData = await response.json()
  console.log(filteredData)

  return (
    <div>Test</div>
  )
}

export default Test