import { Router } from 'express'
import { TraerPeliculas, guardarPelicula } from '../services/conexion.mjs'
const router= Router()

router.get('/', (req, res) => res.render('index.ejs',{title:'First Website with Node'}))

router.get('/about', (req, res) => res.render('about.ejs',{title:'About'}))

router.get('/contact', (req, res) => res.render('contact.ejs',{title:'Contacto'}))

router.get('/api/get-peliculas', async(req, res) => {
    const peliculas = await TraerPeliculas()
    res.status(200).json(peliculas)
})
router.post('/api/set-pelicula', async(req, res) => {
    const pelicula= req.body
    const response = guardarPelicula(pelicula)
    if(response){
        res.status(200).json({message:'Se guardo la pelicula'})

    }else{
        res.status(500).json({message:"Error al guardar la pelicula"})

    }
})

export default router