import axios from 'axios'

const baseUrl = "http://localhost:8000/v1"

const getAllTodos =async (setTodos)=>{

    await axios.get(baseUrl)
    .then(({data})=>{
        console.log('data-->>',data);
        setTodos(data)
    })
}

const addTodo = (text ,setText, setTodos)=>{

    axios
    .post(`${baseUrl}/todo/new`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodos(setTodos)
    })
    .catch((err)=>console.log(err))

}

const updateTodo = (todoId ,text , setTodos,setText, setIsUpdating)=>{

    axios
    .put(`${baseUrl}/update`,{_id:todoId ,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllTodos(setTodos)
    })
    .catch((err)=>console.log(err))
}

const deleteTodo = (_id, setTodos)=>{

    axios
    .delete(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllTodos(setTodos)
    })
    .catch((err)=>console.log(err))
}

export {getAllTodos,addTodo,updateTodo,deleteTodo}