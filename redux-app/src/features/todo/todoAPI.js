import { request } from '../../utils/api'

export const read = () => request.get('todos');

export const add = (title) => request.post('todos', { title });

export const update = (_id, title, complete) => request.put(`todos/${_id}`, { title, complete });

export const remove = (_id) => request.delete(`todos/${_id}`);

