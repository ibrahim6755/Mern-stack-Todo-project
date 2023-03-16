import axios from 'axios'

const baseUrl = "http://localhost:8000/v1/todos"

const getAllTodos =async (setTodos)=>{

    await axios.get(baseUrl)
    .then(({data})=>{
        console.log('data-->>',data);
        setTodos(data)
    })
}
export {getAllTodos}