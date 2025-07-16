import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout.jsx'
import { Grid } from './components/grid.jsx'
import { Parrafo } from './components/Parrafo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout padding="20px">
      <p>Hola mundo.</p>
      <Grid columns={"30%_70%"}>
        <Parrafo text="Texto prueba"></Parrafo>
        <Parrafo text="Texto prueba 2"></Parrafo>
        <Parrafo text="Texto prueba 3"></Parrafo>
      </Grid>
    </Layout>
  </StrictMode>,
)
