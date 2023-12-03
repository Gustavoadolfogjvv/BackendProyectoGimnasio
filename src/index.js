import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = Express();

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {

    console.log('===================================');
    console.log('Estoy en el puerto', app.get('port'));
    console.log('===================================');
})

app.get('/', (req, res) => {
    res.send('Esto es una prueba de un get desde mi backend');
})

app.delete('/borrarProducto', (req, res) => {
    res.send('El producto fue borrado');
})

app.use(morgan('dev'));
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//app.use(Express.static('public'));
app.use(Express.static(path.join(__dirname, '../public'))); 