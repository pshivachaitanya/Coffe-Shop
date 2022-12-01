import React from 'react'
import Header from './components/Header'
import Table from './components/Table'
import Filter from './components/Filter'
import Card from './components/Card'

const Home = () => {
  return (
    <div>
      <center>
       <Header/>
       <Table/>
       <Filter/>
       <Card/>
      </center>
    </div>
  )
}

export default Home
