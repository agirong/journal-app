import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { light } from "@mui/material/styles/createPalette"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <>
        <Grid container direction="row" justifyContent="space-between" alignItems={"center"} sx={{mb:1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight={light}>24 de Agosto del 2024</Typography>
            </Grid>
            <Grid>
                <Button color="primary" sx={{padding:2}}>
                    <SaveOutlined sx={{fontSize:30, mr:1}} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                  <TextField
                      type="text"
                      label="Titulo"
                      placeholder="Ingrese un titulo"
                      fullWidth
                      variant="filled"
                      sx={{ border: 'none', mb: 1 }}
                  />
                  <TextField
                      type="text"
                      label="Descripcion"
                      placeholder="Que sucedio hoy?"
                      fullWidth
                      variant="filled"
                      sx={{ border: 'none', mb: 1 }}
                      multiline
                      minRows={5}
                  /> 
                  <ImageGallery/>
            </Grid>
        </Grid>
    </>
  )
}
