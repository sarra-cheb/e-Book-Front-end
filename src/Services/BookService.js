import http from '../Utlis/http'

const getAllBooks = () => {
  return http.get('/book')
}
const getBookById = (id) => {
  return http.get(`/book/${id}`)
}
const addBook = (data) => {
  return http.post('/book', data)
}
const deleteBook = (id) => {
  return http.delete(`/book/${id}`)
}
const editBook = (id, data) => {
  return http.put(`/book/${id}`, data)
}



const Book = {
  getAllBooks, addBook, deleteBook, getBookById, editBook,
}

export default Book