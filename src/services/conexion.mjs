import pg from 'pg';
const { Client } = pg;

const config={
    user: 'bdmovies_bd_user',
    host: 'dpg-coh71o779t8c73ftvsjg-a.oregon-postgres.render.com',
    database: 'bdmovies_bd',
    password: 'N6kuJeQaZ0uT16oM0oNDlyDq7CBabVZC',
    port: 5432,
    ssl: {
      rejectUnauthorized: false 
    }
}
export async function Conectar(){
    const cliente= new Client(config)
    try {
        await cliente.connect()
        console.log('Conectado a la base datos')
    } catch (error) {
        console.log(error)
    }
}