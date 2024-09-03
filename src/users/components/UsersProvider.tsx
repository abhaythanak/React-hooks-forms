import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Users from './Users'
import { FormSchema, schema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function UsersProvider() {

    const methods= useForm<FormSchema>({mode:'all',resolver: zodResolver(schema)});

  return (
    <FormProvider {...methods}>
        <Users/>
    </FormProvider>
  )
}
