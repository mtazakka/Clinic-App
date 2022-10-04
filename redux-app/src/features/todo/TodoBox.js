import React, { useState, useEffect } from 'react'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import { request, LoggedIn } from '../../utils/api'
import { Navigate } from "react-router-dom";
import styles from './Todo.module.css';
import { selectTodos, createTodo } from './todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoBox() {
    const todos = useSelector(selectTodos)

    const [redirct, setRedirect] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])


    const updateTodo = async (_id, title, complete) => {
        // try {
        //     const { data } = await request.put(`todos/${_id}`, { title, complete })
        //     if (data.success) {
        //         this.setState((state) => ({
        //             todos: state.todos.map(item => {
        //                 if (item._id === _id) {
        //                     return { ...data.data, sent: true }
        //                 }
        //                 return item
        //             })
        //         }))
        //     } else {
        //         console.log(data.data)
        //     }
        // } catch (e) {

        // }
    }

    const removeTodo = async (_id) => {
        // try {
        //     const { data } = await request.delete(`todos/${_id}`);
        //     if (data.success) {
        //         this.setState((state) => ({
        //             todos: state.todos.filter(item => item._id !== _id)
        //         }))
        //     } else {
        //         alert('gagal hapus')
        //     }

        // } catch (error) {
        //     alert('gagal')
        // }
    }

    const resendTodo = async (_id, title) => {
        // try {
        //     const { data } = await request.post('todos', { title, UserId: JSON.parse(localStorage.getItem('user')).userid });
        //     if (data.success) {
        //         this.setState((state) => ({
        //             todos: state.todos.map(item => {
        //                 if (item._id === _id) {
        //                     return { ...data.data, sent: true }
        //                 }
        //                 return item
        //             })
        //         }))
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }

    const logout = async () => {
        await request.get('users/signout')
        localStorage.setItem('user', '')
        // this.setState({ redirect: true })
    }


    return (
        <div className={`${styles.todobox} container`}>
            <LoggedIn />
            <div className='card'>
                <div className='card-header text-center'>
                    <h1>Daftar Kerjaan</h1>
                </div>
                <div className='card-body'>
                    <TodoForm add={(title) => dispatch(createTodo(title))} />
                </div>
                <hr />
                <TodoList
                    data={todos}
                    update={updateTodo}
                    remove={removeTodo}
                    resend={resendTodo}
                />
                <div className='card-footer'>
                    <button type='button' className='btn btn-danger' onClick={this.logout}>Sign Out</button>
                    {this.state.redirect && (
                        <Navigate to="/login" replace={true} />
                    )}
                </div>
            </div>
        </div>
    )
}
