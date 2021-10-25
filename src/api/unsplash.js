import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GgJqmrfZfUVfuTzJW0rw7XWxyTNN_TkM04keOMZO4pw'
    }
})