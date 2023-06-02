
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import BookServices from '../../../Services/BookService'
import categoryServices from '../../../Services/CategoryService'
import Select from 'react-select'
import { toast } from 'react-toastify'


const EditBook = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [contenue, setContenue] = useState();
  const [book, setBook] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [cat, setCat] = useState([])
  const fileSelect = (event) => {
    const file = event.target.files[0];
    setContenue(file);
  }
  const handleChangeCategories = (e) => {
    const selectedValues = e.map(option => option.value);
    setSelectedOptions(e.target);
    setCat(selectedValues)
  };
  useEffect(() => {
    const fetchData = (id) => {
      BookServices.getBookById(id).then((response) => {
        setBook(response.data.Books);
        console.log(response.data.Books)

      }).catch((error) => {
        console.log(error);
      })
    }
    fetchData(params.id)
  }, [params.id])

  useEffect(() => {
    const getcategory = () => {
      categoryServices.getAllCategory().then((response) => {
        setOptions(response.data.Categorys)
        console.log(response.data.Categorys)

      }).catch((error) => {
        console.log(error);
      })
    }
    getcategory()
  }, [])
  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          title: book.title || '',
          autor: book.autor || '',
          category: book.category || [],
          description: book.description || '',
          contenue: []
        }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.autor) {
            errors.autor = 'Required';
          }
          if (!values.category) {
            errors.category = 'Required'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            let newData = new FormData();
            cat.forEach(category => newData.append('category', category));

            newData.append('title', values.title)
            newData.append('autor', values.autor)
            newData.append('description', values.description)
            newData.append('contenue', contenue);
            for (const entry of newData.entries()) {
              console.log(entry[0], entry[1]);
            }
            console.log(Array.from(newData.entries()));
            console.log(newData)
            const res = await BookServices.editBook(params.id, newData);
            toast.success(res.data.message)

            navigate('/books');
          } catch (error) {
            toast.error(error.res.data.message)
          }
        }}

        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className='row d-flex justify-content-center'>
            <Form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title of book:</label>
                <input type="text" className="form-control" id="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                <p className='text-danger'>{errors.title && touched.title && errors.title}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="autor" className="form-label">Autor:</label>
                <input type="text" className="form-control" id="autor" onChange={handleChange} onBlur={handleBlur} value={values.autor} />
                <p className='text-danger'>{errors.autor && touched.autor && errors.autor}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                <p className='text-danger'>{errors.description && touched.description && errors.description}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category:</label>
                <Select
                  className='mb-3'
                  placeholder='Category'
                  options={options.map(option => ({ label: option.name, value: option.name }))}
                  onChange={handleChangeCategories}
                  isSearchable
                  value={selectedOptions}
                  isMulti
                  onBlur={handleBlur}
                />

                <hr />
                <small>for add a category or you don't find any category please add a new category here </small>
                <Link to='/addCategory' className='btn btn-sm btn-warning' >Add New Category</Link>
                <p className='text-danger'>{errors.category && touched.category && errors.category}</p>
              </div>
              <div>
                <label htmlFor="contenue" className="form-label">File Book:</label>
                <div className="form-control-wrap">

                  <input
                    type="file"
                    className="form-control"
                    name="contenue"
                    id="contenue"
                    onChange={fileSelect}
                  />
                </div>
              </div>
              <div className='pt-5 d-flex justify-content-between'>
                <Link to='/books' className='btn btn-warning' >Back</Link>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Update</button>
              </div>
            </Form>
          </div>
        )
        }
      </Formik >

    </div >
  )
}
export default EditBook
