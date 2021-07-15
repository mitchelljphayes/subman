import axios from "axios";
// import "./App.css";
import HomePage from "./views/HomePage.jsx";

// const axios = require('axios').default;

const subsList = axios.get("/subscription/")
  .then((response) => {console.log(response)})
  .catch((error) => {console.log(error)})
  .then(() => {console.log('logging get request')})

console.log(subsList);


function App() {
  return <HomePage data={subsList.data} />;
}

export default App;
