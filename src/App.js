import React,{Component} from 'react';


export default class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       userName:'Lolu',
       todoItems:[
         {action:'Buy Milk', done:false},
         {action:'Dentist at 5pm', done:false},
         {action:'Go too Gym', done:false},
       ],
       newTodo:''
    }
  }

  updateValue=(e)=>{
    this.setState({newTodo:e.target.value})
  }

  newTodo=()=>{
    this.setState({
      todoItems:[
        ...this.state.todoItems,
        {action:this.state.newTodo,done:false}
      ]
    })
  }
  toggleDone=(item)=>{
    this.setState({
      todoItems: this.state.todoItems.map(itm=>
        item.action===itm.action?{...item, done:!itm.done}:itm
      )
    })
  }


  render=()=>(
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">{this.state.userName} To do List</h2>
        </div>
        <div className="col-12">
          <input type="text" value={this.state.newTodo} className="form-control" onChange={this.updateValue} />
          <button className='btn btn-primary' onClick={this.newTodo}>Add</button>
        </div>
        <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.state.todoItems.map(todo=>{
                return(
                  <tr>
                    <td key={todo.action} >
                    {todo.action}
                  </td>
                  <td>
                    <input type="checkbox"
                    checked={this.state.todoItems.done}
                    onChange={()=>this.toggleDone(todo)} />
                  </td>
                  </tr>
                )
              })}</tbody>
            </table>
          </div>
      </div>
    </div>
  )
}
