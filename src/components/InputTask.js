import {Select,Input,Button,Grid,Header,Icon} from 'semantic-ui-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const options =[
    {key:'deporte',text:'Deporte',value:'Deporte'},
    {key:'casa',text:'Casa',value:'Casa'},
    {key:'oficina',text:'Oficina',value:'Oficina'},
    {key:'otra',text:'Otra',value:'Otra'},

]
export default function InputTask(props) {
    const [task,setTask] = useState({
        idTask:'',
        taskName:'',
        categoryTask:''
    })
    const {createTask} = props
    const [error,setError] = useState(false)
    const onChangeTask=(e) =>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
        
    }
    const onChangeCategoryTask=(e,data) =>{
        setTask({
            ...task,
            [data.name]:data.value
        })}
    const onSubmitTask = (e) => {
        e.preventDefault()

        if(task.taskName.trim() ==="" || task.categoryTask.trim() ===""){
            setError(true)
            return
        }
        setError(false)

        task.idTask = uuidv4()

        createTask(task)

        setTask({
             idTask:'',
        taskName:'',
        categoryTask:''
        })
    }
  return (
    <>
        <Grid centered columns ={2}>
            <Input type="text" action>
                <Input size="small" icon="add" placeholder="Escribe tu tarea..." iconPosition="left" name="taskName"
                    value={task.taskName}
                    onChange={onChangeTask}
                />
                <Select compact options ={options} className="Select-form-task" name="categoryTask" placeholder="Categoria"
                    value={task.categoryTask}
                    onChange={onChangeCategoryTask}
                />
                <Button type="submit" color="violet" onClick={onSubmitTask}>
                    Añadir tarea
                </Button>
            </Input>
        </Grid>
        {error && (
            <Grid centered>
                <Header as="h4" color="red" className='alert-error-form'>
                    <Icon name="close"/>
                    <Header.Content>La tarea es obligatoria</Header.Content>
                    <Icon name="close"/>
                </Header>
            </Grid>
        )}
    </>
  )
}
