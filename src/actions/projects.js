import axios from 'axios'

export const LOAD_PROJECTS = 'LOAD_PROJECTS'

export const loadProjects = projects => ({ type: LOAD_PROJECTS, projects })
export const fetchProjects = () => dispatch => {
  axios.get('/data/projects.json')
    .then(res => dispatch(loadProjects(res.data)))
}