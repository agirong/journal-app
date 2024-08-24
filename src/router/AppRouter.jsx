import { Routes,Route } from "react-router"
import AuthRoutes from '../auth/routes/AuthRoutes'
import {JournalRoutes} from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login */}\
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        {/* Principal */}
        <Route path="/*" element={<JournalRoutes/>}/>
    </Routes>
  )
}
