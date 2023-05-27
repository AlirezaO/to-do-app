import axios from "axios"

export default function getData() {

    axios
      .get('https://my-json-server.typicode.com/AlirezaO/to-do-app/db')
      .then((response) => {
        let data =response.data
        console.log(data)
      })
      .catch((error) => console.log(error))
    
  }
