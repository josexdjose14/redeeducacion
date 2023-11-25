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

  const onBack = () => {
    navigate(-1);
  }

  return (
    <main className='RegisterContainer'>
      <aside className='RegisterContainer__window'>
        <h2 className='RegisterContainer__window__text1'>Bienvenid@ a <span>RedEEducación</span></h2>
        <p className='RegisterContainer__window__text2'>Nos da gusto de que hayas decidido formar parte del cambio en Latinoamérica, solo falta que llenes un pequeño formulario.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Correo
            <input
              className='register__email register'
              type="name"
              placeholder='Ej: fundacion@email.com'
              {...register("email", { required: true })}
            />
          </label>

          <label>
            Contraseña
            <input
              className='register__password register'
              type="password"
              placeholder='Ej: Fundacion_1'
              {...register("password", { required: true })}
            />
          </label>

          <label>
            Nombre completo
            <input
              className='register__email register'
              type="name"
              placeholder='Ej: Fundacion por la vida'
              {...register("fullName", { required: true })}
            />
          </label>

          <label>
            Teléfono
            <input
              className='register__email register'
              type="name"
              placeholder='Ej: (+57) 302####113'
              {...register("phone", { required: true })}
            />
          </label>

          <label>
            País
            <select
              className='register__email register'
              {...register("country", { required: true })}>
              <option value="">Selecciona una opción</option>
              <option value="1001">Canadá</option>
              <option value="1002">Estados Unidos</option>
              <option value="1003">México</option>
              <option value="1004">Groenlandia</option>
              <option value="1005">Guatemala</option>
              <option value="1006">Belice</option>
              <option value="1007">El Salvador</option>
              <option value="1008">Honduras</option>
              <option value="1009">Nicaragua</option>
              <option value="1010">Costa Rica</option>
              <option value="1011">Panamá</option>
              <option value="1012">Cuba</option>
              <option value="1013">República Dominicada</option>
              <option value="1014">Haití</option>
              <option value="1015">Jamaica</option>
              <option value="1016">Puerto Rico</option>
              <option value="1017">Brasil</option>
              <option value="1018">Argentina</option>
              <option value="1019">Colombia</option>
              <option value="1020">Perú</option>
              <option value="1021">Venezuela</option>
              <option value="1022">Chile</option>
              <option value="1023">Ecuador</option>
              <option value="1024">Bolivia</option>
              <option value="1025">Paraguay</option>
              <option value="1026">Uruguay</option>
              <option value="1027">Guyana</option>
              <option value="1028">Surinam</option>
              <option value="1029">Islas Malvinas</option>
              <option value="1030">Guayana Francesa</option>
              <option value="1031">Aruba</option>
              <option value="1032">Curazao</option>
              <option value="1033">Bonaire</option>
              <option value="1034">Sint Maarten</option>
              <option value="1035">Islas Vírgenes</option>
            </select>
          </label>
          <label>
            <span>:)</span>
            <button type="submit" className={fillForm ? "nextBtn activated" : "nextBtn"} > Ingresar </button>
          </label>
        </form>

        <figure className='RegisterContainer__window__back' onClick={onBack}>
          <img src="/images/arrow-left.svg" alt="back-btn" />
        </figure>

      </aside>

    </main>
  )
}

export default Register