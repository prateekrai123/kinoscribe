import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='description' />
        <TextInput source='price' />
        
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
