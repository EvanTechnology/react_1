import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 50
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem 
                            todo={todo} 
                            key={todo.id} 
                            index={index}
                            onChange={props.onToggle}
                        />
            })}
        </ul>
    )
}
// Validation props. It has to be array of objects
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList