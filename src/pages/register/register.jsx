import React, { useEffect, useState } from 'react'
import './register.scss'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const [fillForm, setFillForm] = useState(0)
  const watchFields = watch(["email", "password"])

  useEffect(() => {
    //console.log(watchFields)
    if ((watchFields[0] && watchFields[1]) && (watchFields[0].length && watchFields[1].length)) {
      setFillForm(1)
    }
  }, [watchFields])

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <main className='RegisterContainer'>
      <aside className='RegisterContainer__window'>
        <h2 className='RegisterContainer__window__text'>Nos da gusto de que hayas decidido formar parte del cambio en Latinoamérica, solo falta que llenes un pequeño formulario.</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='login__email'
            type="email"
            placeholder='Digita tu correo'
            {...register("email", { required: true })}
          />

        </form>

      </aside>

    </main>
  )
}

export default Register