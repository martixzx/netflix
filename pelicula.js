const movies = ['Soy Leyenda', 'Rey León', 'La marca del demonio', 'A todo pedo', 'El risas', 'El brujo', 'Rey de la montaña', 'Soy el rey del mundo']


const express = require("express");
const app = express();
app.use(express.json());

app.get('/movies/name/:nomb', (req, res) =>{
    res.json ({data: movies})    
})

app.get('/movies',(req, res)=> {
    res.json ({data: movies})
})

app.get('/movies/:id', (req, res) => {
    res.json({data: movies[req.params.id]})
});



// res.json({data.movies})

for (let index = 0; index < movies.length; index++) {
    const element = array[index];
    
}
function busqueda (mipeli) {
    
}


app.listen(4100,()=>console.log("aqui esta nuestro blacknetflix en el puerto 4100"));