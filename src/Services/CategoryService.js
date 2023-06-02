import http from '../Utlis/http'

const getAllCategory = () => {
  return http.get('/category')
}
const getCategoryById = (id) => {
  return http.get(`/category/${id}`)
}
const addCategory = (data) => {
  return http.post('/category', data)
}
const deleteCategory = (id) => {
  return http.delete(`/category/${id}`)
}
const editCategory = (id, data) => {
  return http.put(`/category/${id}`, data)
}

const Category = {
  getAllCategory, addCategory, deleteCategory, getCategoryById, editCategory
}

export default Category