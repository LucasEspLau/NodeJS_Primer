import { Router } from 'express'
const router= Router()

router.get('/', (req, res) => res.render('index.ejs',{title:'First Website with Node'}))

router.get('/about', (req, res) => res.render('about.ejs',{title:'About'}))

router.get('/contact', (req, res) => res.render('contact.ejs',{title:'Contacto'}))

export default router