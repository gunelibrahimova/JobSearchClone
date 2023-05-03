import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../consts/routes'
import Home from '../pages/Home'
import Jobs from '../components/jobs/Jobs'
import Category from '../components/category/Category'

const MyRouter = () => {
  return (
    <div>
        <Routes>
            {/* <Route path={ROUTES.BASE} element= {<Home/>} /> */}
            <Route path="/" element= {<Jobs/>}/>
            <Route path="/kateqoriya" element= {<Category/>}/>
        </Routes>
    </div>
  )
}

export default MyRouter