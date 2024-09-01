import React from 'react'
import {useForm} from 'react-hook-form'
import {Autocomplete, Stack, TextField} from '@mui/material';
import { FormSchema, schema } from '../types/schema';
import {zodResolver} from '@hookform/resolvers/zod'

function Users() {

const {register,
    formState:{errors,},
    handleSubmit,
}= useForm<FormSchema>({mode:'all',resolver: zodResolver(schema)});



  return (
    <Stack sx={{gap:2}}>
    <TextField {...register('name')} label='Enter your name' error={!!errors.name} helperText={errors.name?.message}/>
    <TextField {...register('email')} label='Enter your email' error={!!errors.email} helperText={errors.email?.message}/>
    <Autocomplete options={[{id:'1',label:'texes'}]} renderInput={(params) => <TextField {...params} label="states"/>}/>
    </Stack>
  )
}

export default Users
