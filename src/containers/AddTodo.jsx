import React from "react"
import {connect} from 'react-redux'
import {addTodo} from "../actions/todos.js"
import {bindActionCreators} from "redux"

class AddTodo extends React.Component{
    constructor (props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderTodoList() {
        return this.props.todos.map((todo) => {
            return (
                <div key={todo.id}>{todo.text}</div>
            )
        })
    }

    onSubmit (e) {
        e.preventDefault()
        const v = this.textInput.value.trim();

        if (! v) {
            return
        }
        this.props.addTodo(v)
        this.textInput.value = ''
    }

    render (){
        return (
           <div>
               <form onSubmit={this.onSubmit}>
                    <input placeholder="Add Todo" ref={(e) => this.textInput = e} />
               </form>
               <div>
                   {this.renderTodoList()}
               </div>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo: addTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
