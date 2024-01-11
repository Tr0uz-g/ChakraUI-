import {useForm} from 'react-hook-form'
import { ChakraProvider, Flex } from '@chakra-ui/react';

import './style.css'

export default function Register() {

    const {
      register, 
      handleSubmit, 
      formState: {errors}, 
      watch
    } = useForm()

    const onSubmit = handleSubmit((data) => {
      console.log(`form sending... ${data}`)
      console.log(data)
    })

  return (
    <div>
      <form onSubmit={onSubmit} > 
      <Flex
      direction='column'
      alignItems='center'
      
      >
      
        <label htmlFor='name'> Name: </label>
          <input 
            type='text' 
            {...register('name', {
              required: {
                value: true,
                message: 'This field is required'
              },
              minLength: {
                value: 12,
                message: 'Enter your full name'
              },
              maxLength: {
                value: 40,
                message: 'Must not exceed 40 characters'
              }
            })}
           />
          {errors.name && <span>{errors.name.message}</span>}
          <Flex
          mb={2}
          />

        <label htmlFor='email'> Email: </label>
          <input 
            type='email'
            {...register('email', {
              required: {
                value: true,
                message: 'This field is required'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'email invaild'
              }
            })}
           />
           {errors.email && <span>{errors.email.message}</span> }
           <Flex
          mb={2}
          />
        <label htmlFor='password'> Password: </label>
          <input 
            type='password'
            {...register('password', {
              required: {
                value: true,
                message: 'This field is required'
              },
              maxLength: {
                value: 10,
                message: 'Must contein maximum 10 characters'
              },
              minLength: {
                value: 8,
                message: 'Must be at least 8 characters'
              }
            })}
           />
           {errors.password && <span>{errors.password.message}</span>}
           <Flex
          mb={2}
          />
        <label htmlFor='confirmPassword'> Confirm Password: </label>
          <input 
            type='password'
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'This field is required'
              }, 
              validate: (value) => {
                if(value === watch('password')){
                  return true
                }else {
                  return `Passwords don't match`
                }
              }
            })}
           />
           {errors.confirmPasword && <span>{errors.confirmPasword.message}</span> }
           <Flex
          mb={2}
          />
        <label htmlFor='dateBorn'> Age: </label>
          <input 
            type='date'
            {...register('dateBorn', {
              required: {
                value: true,
                message: 'This field is required' 
              },
              validate: (value) => {

                const dateBorn = new Date(value)
                const currentDateAge = new Date()

               const ageInYear = currentDateAge.getFullYear() - dateBorn.getFullYear()
               console.log(ageInYear)

              return ageInYear >= 17 || 'You dont meet the required age.' ;
              }
            })}
           />
           {errors.date && <span>{errors.dateBorn.message}console.log(ageInYear())</span>}
           <Flex
          mb={2}
          />
        <label htmlFor='country'> Choose The Country: </label>
        <select
          {...register('countries')}
        >
          <option value='cl'>Colombia</option>
          <option value='mx'>Mexico</option>
          <option value='us'>United States</option>
        </select>
        <Flex
          mb={2}
          />
        <label htmlFor='photo'> Photo: </label>
          <input 
            type='file'
            {...register('photo')}
           />
           <Flex
          mb={2}
          />
        <label htmlFor='terms&Conditions'> terms & conditions: </label>
          <input 
            type='checkbox' 
            {...register('terms&Conditions',{
              required: true
            })}
          />
          <Flex
          mb={5}
          />
        <button>
          Send
        </button>
      </Flex>
      </form>
    </div>
  )
}
