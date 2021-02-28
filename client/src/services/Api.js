import axios from 'axios';

export default () =>{
    return axios.create({
        baseURL: "https://social-task.herokuapp.com"
    })
}
