import axios from 'axios'

const baseUrl = "http://localhost:8000/v1/"

const getAllTodos =async (setTodos)=>{

    await axios.get(baseUrl)
    .then(({data})=>{
        console.log('data-->>',data);
        setTodos(data)
    })
}

const addTodo = (text ,setText, setTodos)=>{

    axios
    .post(`${baseUrl}todo/new`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodos(setTodos)
    })

}

export {getAllTodos,addTodo}