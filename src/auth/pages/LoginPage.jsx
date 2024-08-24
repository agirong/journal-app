import { Link as RouterLink} from 'react-router-dom'
import {Grid,Typography,TextField,Button,Link} from '@mui/material';
import {Google} from '@mui/icons-material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding:4 }}
    >
      <Grid item 
        className='box-shadow'
        xs={3}
        sx={{backgroundColor:'white',padding:3,borderRadius:2}}>
          <Typography>Login</Typography>
          <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder='correo'
                  fullWidth
                />                
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Contrasena"
                  type="password"
                  placeholder='Contrasena'
                  fullWidth
                />                
              </Grid>

              {/* Botones de login */}
              <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                  Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
      </Grid>
    </Grid>
  )
}
