import {useForm} from 'react-hook-form'


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
        <label htmlFor='confirmPassword'> Confirm Password: </label>
          <input 
            type='password'
            {...register('confirmPasword', {
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
        <label htmlFor='dateAge'> Age: </label>
          <input 
            type='date'
            {...register('date', {
              required: {
                value: true,
                message: 'This field is required' 
              },
              validate: (value) => {

                const dateAge = new Date(value)
                const currentDateAge = new Date()

               const ageInYear = currentDateAge.getFullYear() - dateAge.getFullYear()
                console.log(ageInYear)

                return ageInYear >= 18 || { message: `You don't meet the required age. Age: ${ageInYear}` };
              }
            })}
           />
           {errors.date && <span>{errors.date.message}</span>}
        <label htmlFor='country'> Choose The Country: </label>
        <select
          {...register('countrys')}
        >
          <option value='cl'>Colombia</option>
          <option value='mx'>Mexico</option>
          <option value='us'>United States</option>
        </select>
        <label htmlFor='photo'> Photo: </label>
          <input 
            type='file'
            {...register('photo')}
           />
        <label htmlFor='terms&Conditions'> terms & conditions: </label>
          <input 
            type='checkbox' 
            {...register('terms&Conditions')}
          />

        <button>
          Send
        </button>
      </form>
    </div>
  )
}
