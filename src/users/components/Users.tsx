import React from 'react'
import {useForm} from 'react-hook-form'
function Users() {

const {register,
    formState:{errors,},
    handleSubmit,
}= useForm<{email: string}>({mode:'all'});

function onFormSubmit(){
    console.log("submmited")
}

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input {...register('email', {
        required : {value: true, message:"email is required"},
        maxLength : {value: 20, message: "too many characters"},
        minLength : {value:5, message: "minimum character required"}

      })} placeholder='Enter email'/>

      <p>{errors.email?.message}</p>
    </form >
  )
}

export default Users
