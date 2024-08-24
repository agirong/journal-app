import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography ,Grid, ListItemText} from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Aaron Giron
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril','Mayo'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Fechas Importantes'}/>
                                </Grid>                                
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
