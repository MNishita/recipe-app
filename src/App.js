import './App.css';
import {useState} from 'react';
import RecipeWindow from './components/RecipeWindow';

function App() {

  const YOUR_APP_ID = 'ec6d67bc';
  const YOUR_APP_KEY = '8a8aa28890eb79fbf86ac86548464ecb';
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const submitHandler = function(e) {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>Search Your Recipe</h1>
      {/* Search Form */}
      <form className = "form-control" onSubmit = {submitHandler}>
        <input type = "text" 
        placeholder = "Search Here" 
        className ="input-search"
        value = {query}
        onChange = {(e) => setQuery(e.target.value) }/>
        <input type = "submit" className = "btn-submit" />
      </form>
      <RecipeWindow recipes = {recipes} />
    </div>
  );
}

export default App;
