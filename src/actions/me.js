import axios from 'axios'

export const LOAD_ME = 'LOAD_ME'

export const loadMe = data => ({ type: LOAD_ME, data })
export const fetchMe = () => dispatch => {
  axios.get('/data/me.json')
    .then(res => dispatch(loadMe(res.data)))
}