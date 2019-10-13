import React, { Component } from 'react'


class ToDoForm extends Component {
    constructor() {
        super()
        this.state = {
        taskName: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Im going to be the form</h3> 
            </div>
        )
    }
}

export default ToDoForm 