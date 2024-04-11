export default function Display(props){
    const data=props.todo;
    const todo=data.map(item =>{
      return(
          <div key={item.key}>
              <input type="text" id={item.key} value={item.description} 
              onChange={(event)=>{
                  props.handleUpdate(event.target.value,item.key)
              }}></input>
              <button onClick={()=>{props.handleDelete(item.key)}}>Delete Item</button>
          </div>
      )
    });
    return(
      <div>
          {todo}
      </div>
    )
  }