import React from 'react'
import { JournalPage } from '../pages/JournalPage'
import { Navigate, Route, Routes } from 'react-router'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalPage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
