import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddPage() {
    const [fetchNew, setFetchNew] = useState([])


    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:3100/")
            .then((res) => res.json())
            .then((data) => setFetchNew(data))
    }
   async function handleAdd(val) {
        fetch("http://localhost:3100/" ,{
            method: "POST",
            body: JSON.stringify(val),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        await getAll()


    }

  async function handleDelete(id) {
        fetch("http://localhost:3100/"+id, {
            method: "DELETE"
        } )
       await getAll()
    }


    return (
        <div>

            <Helmet>
                <title>AddPage Page</title>
            </Helmet>

            <Formik
                initialValues={{ name: '', description: '', price: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    description: Yup.string()
                        .required('Required'),
                    price: Yup.number()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" type="text" />

                    <label htmlFor="price">price </label>
                    <Field name="price" type="number" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <div className='table'>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody >
            {fetchNew.map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.description}</td>
                <td>{x.price} <span><i className="fa-solid fa-trash" onClick={(x) => handleDelete(x._id)}></i></span></td>
              </tr>
            ))}
          </tbody>

        </table>



      </div>

        </div>
    )
}

export default AddPage