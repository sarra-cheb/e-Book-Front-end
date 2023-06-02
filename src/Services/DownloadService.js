import http from '../Utlis/http'

const downloadBook = (id) => {
  return http.get(`/download/${id}`, {
    responseType: 'blob',
  })
}
const getListOfClients = () => {
  return http.get('/download')
}

const Download = {
  downloadBook, getListOfClients
}
export default Download