import React from 'react'
import BlogList from '../components/BlogList'
import CategoryTabs from '../components/CategoryTabs'

const Home = () => {
  return (
    <div> 
      <CategoryTabs/>
    <BlogList/>
    </div>
  )
}

export default Home