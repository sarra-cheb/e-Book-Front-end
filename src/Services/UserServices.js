import http from '../Utlis/http'

const getUser = () => {
  return http.get('/user')
}
const getDataUser = () => {
  return http.get('/user/data')
}
const getClient = () => {
  return http.get('/user/listclients')
}
const getLIstoFClient = () => {
  return http.get('/user/listofclients')
}
const editUser = (id, data) => {
  return http.put(`/user/${id}`, data)
}
const deleteUser = (id) => {
  return http.delete(`/user/${id}`)
}
const editTypeOfClient = (id) => {
  return http.put(`/user/edittypeofclient/${id}`)
}
const user = {
  getUser, editUser, deleteUser, getClient, editTypeOfClient, getLIstoFClient, getDataUser
}
export default user