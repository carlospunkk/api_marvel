
import './App.css';

function App() {

const apikey = '70607119c2e3e016d3231068614d64b4';
const ts = '05/02/2024, 12:48:59';
const hash = '068c85c4a834b4a176ff455eacfbb478';


const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}`


fetch(url)
.then(response => response.json() )
.then(response =>mostraData(response.data.results) )
//.then(response =>unicoPersonagem(response.data.results.id))
.catch(err => console.log('erro de codigo',err))

const mostraData=(personagens) =>{
  console.log(personagens.length)
}


  return (

    <div>
      <h1>Personagens marvel</h1>

    </div>
    
  );
}

export default App;
