import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './SearchBox.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 search__form'
      ></Form.Control>
      <Button type='submit' className='p-2 search__button'>
        Search
      {/* <i class="fas fa-search"></i> */}
      </Button>
    </Form>
  )
}

export default SearchBox
