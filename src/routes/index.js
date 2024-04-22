import { Router } from 'express'
import { TraerPeliculas } from '../services/conexion.mjs'
const router= Router()

router.get('/', (req, res) => res.render('index.ejs',{title:'First Website with Node'}))

router.get('/about', (req, res) => res.render('about.ejs',{title:'About'}))

router.get('/contact', (req, res) => res.render('contact.ejs',{title:'Contacto'}))

router.get('/api/get-peliculas', async(req, res) => {
    const peliculas = await TraerPeliculas()
    res.status(200).json(peliculas)
})

export default router