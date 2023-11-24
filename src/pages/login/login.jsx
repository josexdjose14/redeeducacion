import React, { useEffect, useState } from 'react'
import "./login.scss"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Login = () => {
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

  const onRegister = () => {
    navigate("/register")
  }

  return (
    <main className='LoginContainer'>
      <aside className='LoginContainer__background'>
        <figure>
          <img src="/images/RedEEducacion.png" alt="logo" />
        </figure>
        <p>ingrese algo de informacion</p>
      </aside>

      <aside className='LoginContainer__window'>
        <h2 className='LoginContainer__window__text'>Iniciar sesión</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='LoginContainer__window__form'>
          <input
            className='login__email'
            type="email"
            placeholder='Digita tu correo'
            {...register("email", { required: true })}
          />
          <input
            className='login__password'
            type="password"
            placeholder='Digita tu contraseña'
            {...register("password", { required: true })}
          />
          <p>Recuperar contraseña</p>

          <button type="submit" className={fillForm ? "nextBtn activated" : "nextBtn"} > Ingresar </button>
          <p>¿no tienes cuenta?<span onClick={onRegister}>¡Registrate!</span></p>

        </form>

      </aside>
    </main >
  )
}

export default Login