import { Link as RouterLink} from 'react-router-dom'
import {Grid,Typography,TextField,Button,Link} from '@mui/material';
import {Google} from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Nombre Completo"
                  type="text"
                  placeholder='Nombre Completo'
                  fullWidth
                />                
              </Grid>
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
                  Crear Cuenta
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
                <Typography>Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to="/auth/login">
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}

export default RegisterPage;