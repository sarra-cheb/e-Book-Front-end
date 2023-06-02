import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DownloadServices from '../Services/DownloadService'
import UserServices from '../Services/UserServices'
import bookServices from '../Services/BookService'
import categoryService from '../Services/CategoryService'
import { toast } from 'react-toastify'
import DoghnutChart from './Charts/ChartDoghnut'
import PieChart from './Charts/PieChart'

const Layout = () => {

  const [clients, setClients] = useState([])
  useEffect(() => {
    const getClients = () => {
      DownloadServices.getListOfClients().then((response) => {
        setClients(response.data.clientBooksList);
      }).catch((error) => {
        console.log(error);
      })
    }
    getClients()
  }, []);
  const [ListClients, setListClients] = useState([])
  useEffect(() => {
    const getlistClients = () => {
      UserServices.getClient().then((response) => {
        setListClients(response.data.clients);
      }).catch((error) => {
        console.log(error);
      })
    }
    getlistClients()
  }, []);
  const [ListBooks, setListBooks] = useState([])
  useEffect(() => {
    const getlistBooks = () => {
      bookServices.getAllBooks().then((response) => {
        setListBooks(response.data.Books);
      }).catch((error) => {
        console.log(error);
      })
    }
    getlistBooks()
  }, []);
  const [ListCategorys, setListCategorys] = useState([])
  useEffect(() => {
    const getlistCategorys = () => {
      categoryService.getAllCategory().then((response) => {

        setListCategorys(response.data.Categorys);
      }).catch((error) => {
        console.log(error);
      })
    }
    getlistCategorys()
  }, []);
  const [ListOfAllClients, setListOfAllClients] = useState([])
  useEffect(() => {
    const getlistClientss = () => {
      UserServices.getLIstoFClient().then((response) => {

        setListOfAllClients(response.data.clientsData);
      }).catch((error) => {
        console.log(error);
      })
    }
    getlistClientss()
  }, []);

  const [ListOfAllUsers, setListOfAllUsers] = useState([])
  useEffect(() => {
    const getlistUsers = () => {
      UserServices.getDataUser().then((response) => {

        setListOfAllUsers(response.data.data);
      }).catch((error) => {
        console.log(error);
      })
    }
    getlistUsers()
  }, []);
  const dataClients = {
    labels: ListOfAllClients.map((data) => data.type),
    datasets: [
      {
        label: "AllClients",
        data: ListOfAllClients.map((data) => data.total),
        backgroundColor: ["#FF6000", "#FC2947"],
        borderColor: 'transparent',
        borderWidth: 1,
        cutout: '90%',
        borderRadius: 30,
        circumference: 300,
        rotation: 210,
        spacing: 10,
      },

    ]
  }

  const dataUsers = {
    labels: ListOfAllUsers.map((data) => data.type),
    datasets: [
      {
        label: "Allusers",
        data: ListOfAllUsers.map((data) => data.percentage),
        backgroundColor: ["#FF6000", "#FC2947"],
        borderColor: 'transparent',
        borderWidth: 1,

      },

    ]
  }

  const handleDelete = async (id) => {
    try {
      const response = await UserServices.deleteUser(id);
      toast.success(response.data.message)
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  const handleUpdate = async (id) => {
    try {
      const response = await UserServices.editTypeOfClient(id);
      toast.success(response.data.message)
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className='container-fluid mt-5'>
      <div>
        <h3 className="display-3 font-weight-bold  text-center mb-0 pt-md-5">
          welcome to our libraries
        </h3>
        <hr className="hr-light my-4 w-100" />
        <h4 className="subtext-header  text-center mt-2 mb-4">you can find your book desired here , enjoy....</h4>
      </div>
      <div className=' row mx-2'>
        <div className='col'>
          <div className='card' style={{ margin: '20px' }}>
            <div className='widget'>
              <div className='row'>
                <div className='widget-indicator' style={{ margin: "50px" }}>
                  <span className='widget-label me-5' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    Clients:
                  </span>
                  <span className='widget-value' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    {ListClients.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card' style={{ margin: '20px' }}>
            <div className='widget'>
              <div className='row'>
                <div className='widget-indicator' style={{ margin: "50px" }}>
                  <span className='widget-label me-5' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    Books:
                  </span>
                  <span className='widget-value' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    {ListBooks.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card' style={{ margin: '20px' }}>
            <div className='widget'>
              <div className='row'>
                <div className='widget-indicator' style={{ margin: "50px" }}>
                  <span className='widget-label me-5' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    Categorys:
                  </span>
                  <span className='widget-value' style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#213A7D"
                  }}>
                    {ListCategorys.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className=' card p-3'>
            <div className='row'>
              <span
                className="page-title pb-3"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#9291A5",
                  textAlign: "start",
                }}
              >List of users</span>
              <span
                className="page-title"
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "29.05px",
                  color: "#213A7D",
                  textAlign: "start",
                }}
              >Admin/Cient</span>
              <PieChart state={dataUsers} />
            </div>
          </div>
        </div>
        <div className='col'>
          <div className=' card p-3'>
            <div className='row'>
              <span
                className="page-title pb-3"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#9291A5",
                  textAlign: "start",
                }}
              >List of clients</span>
              <span
                className="page-title"
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "29.05px",
                  color: "#213A7D",
                  textAlign: "start",
                }}
              >Abonné/Normal</span>
              <DoghnutChart state={dataClients} />
            </div>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div classNames="card-header">
          <h1>list of clients (abonné/normal) </h1>
        </div>
        <div className='card-body'>
          <table className="table table-striped">
            <thead className='bg-primary'>
              <tr>
                <th scope="col">Name:</th>
                <th scope="col">Email:</th>
                <th scope="col">Type:</th>
                <th scope="col">Actions:</th>
              </tr>
            </thead>
            <tbody>
              {ListClients.length > 0 ? ListClients.map((client, index) => {
                return (
                  <tr key={index}>
                    <td> {client.name}</td>
                    <td> {client.email}</td>
                    <td> {client.typeofclient}</td>

                    <td className='d-block'>
                      <button type="button" onClick={() => handleDelete(client._id)} className="btn btn-danger me-2 " title="delete book"><span><i className="bi bi-trash3"></i></span>delete client</button>
                      <button type="button" onClick={() => handleUpdate(client._id)} className="btn btn-primary me-2" title='update client to abonnée'><span><i className="bi bi-pencil-square "></i>update client to Abonné</span>
                      </button>
                    </td>
                  </tr>
                )

              }

              ) : (
                <tr>
                  <td colSpan="5">No Clients found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card text-center">
        <div classNames="card-header">
          <h1>list of clients who have downloaded a book or several books </h1>
        </div>
        <div className='card-body'>
          <table className="table table-striped">
            <thead className='bg-primary'>
              <tr>
                <th scope="col">Clients:</th>
                <th scope="col">List of Books:</th>

              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? clients.map((client, index) => {
                return (
                  <tr key={index}>
                    <td> {client.client.name}</td>

                    <td>
                      {client.books.map((book) => (
                        <li key={book._id}>{book.title}</li>
                      ))}
                    </td>
                  </tr>
                )

              }

              ) : (
                <tr>
                  <td colSpan="5">No Clients found are downloading books</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Layout
