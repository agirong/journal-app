import { Box } from "@mui/system"
import { NavBar } from "../components"

const drawerWidth = 100;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar drawerWidth={drawerWidth}/>
        {/* Sidebar */}
        <Box 
            component='main'
            sx={{flexGrow:1,p:3}}
        >
            {/* Toolbar */}
            {children}
        </Box>
    </Box>
  )
}
