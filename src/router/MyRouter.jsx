import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../consts/routes'
import Home from '../pages/Home'
import Jobs from '../components/jobs/Jobs'
import Category from '../components/category/Category'
import Detail from '../components/detail/Detail'

const MyRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element= {<Jobs/>}/>
            <Route path="/kateqoriya" element= {<Category/>}/>
            <Route path="/detail/:id" element={<Detail />} />

        </Routes>
    </div>
  )
}

export default MyRouter