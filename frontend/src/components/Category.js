
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


function Category({history}) {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      if (keyword.trim()) {
        history.push(`/search/${keyword}`)
      } else {
        history.push('/')
      }
    }

    //console
    console.log(history,keyword)
    return (
        <div>
 <Form onSubmit={submitHandler} inline>
      <Form.Control
        as='select'
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search By Categories...'
        className='mr-sm-2 ml-sm-5 search__form'
      >
          <option>Men</option>
          <option>Women</option>
      </Form.Control>
      
      <Button type='submit' className='p-2 search__button'>
        Search by Categories
      </Button>
    </Form>
        </div>
    )
}

export default Category
