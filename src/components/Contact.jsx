import React from 'react'
import { useForm } from 'react-hook-form';
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

export const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className='contact'>
        <div className="contact_container">
          <div className="contact_header">
              <span className='stroke-text'>Contáctate </span>
              <span className='stroke-text'>con </span>
              <span className='white-text'>Nosotros.</span>
          </div>
          <div className="description_contact">
                ¿Algo de aquí te resultó atractivo? No dudes en enviarnos un mail para hacernos saber tu interés!
          </div>
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)} >
            
              <label htmlFor="">Nombre</label>
              <input type="text" placeholder="Ej: Juan" {...register("firstName", {required: true,minLength:3, maxLength: 25})} />
              {errors.firstName?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.firstName?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.firstName?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}
            
              <label htmlFor="">Apellido</label>
              <input type="text" placeholder="Ej: Pérez" {...register("lastName", {required: true,minLength:2, maxLength: 100})} />
              {errors.lastName?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.lastName?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.lastName?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}

              <label htmlFor="">Email</label>
              <input type="text" placeholder="Ej: example@gmail.com" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
              {errors.email?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.email?.type ==='pattern' && <small>Ingrese un email válido</small>}
              
              <label htmlFor="">Número telefónico</label>
              <input type="tel" placeholder="Ej: 115043669" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
              {errors.mobileNumber?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.mobileNumber?.type ==='minLength' && <small>Ingrese un número de teléfono válido</small>}
              {errors.mobileNumber?.type ==='maxLength' && <small>Ingrese un número de télefono válido</small>}

              <label htmlFor="">Entrenamiento que le interesa</label>
              <select {...register("title", { required: true})} >
                <option value="" disabled selected>Selecciona un entrenamiento</option>
                <option value="Funcional">Funcional</option>
                <option value="Localizada">Localizada</option>
                <option value="Gimnasia adultos mayores">Gimnasia adultos mayores</option>
              </select>
              {errors.title?.type ==='required' && <small className='select'>Debe seleccionar un entrenamiento</small>}
            
              <button type="submit">Enviar</button>
            </form>
            <div className="description_social">
                También podes contactarnos a través de las siguientes plataformas
          </div>
          <div className='social'>
            <div className='instagram'>
              <a href="https://instagram.com/" target={"blank"}><FaInstagram size={'4rem'}/></a>
            </div>
            <div className="facebook">
              <a href="https://web.whatsapp.com/"><FaWhatsapp size={'4rem'}/></a>
            </div>
          </div>
        </div>
    </div>
  )
}
