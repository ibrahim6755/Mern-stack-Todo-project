import axios from 'axios'

const basedUrl = "http://localhost:8000/v1/todos"

const getAllTodos =async (setTodos)=>{

    await axios.get(basedUrl)
    .then(({data})=>{
        console.log('data-->>',data);
        setTodos(data)
        console.log(setTodos)
    })
}
export {getAllTodos}