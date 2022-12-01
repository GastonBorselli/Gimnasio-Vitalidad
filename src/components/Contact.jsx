import React, {useRef} from 'react'
import { useForm } from 'react-hook-form';
import {FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
// import emailjs from '@emailjs/browser';

export const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  
  return (
    
    <div className='contact' name='home'>
        <div className="contact_container">
          <div className="contact_header">
              <span className='stroke-text'>Contáctate </span>
              <span className='stroke-text'>con </span>
              <span className='white-text'>Nosotros.</span>
          </div>
          <div className="description_contact">
                ¿Algo de aquí te resultó atractivo? Podés hacernos saber tu interés rellenando el siguiente formulario!
          </div>
        </div>

        <div className='form-container'>



          <form onSubmit={handleSubmit(onSubmit)} >
            
              <label htmlFor="">Nombre</label>
              <input type="text" placeholder="Ej: Juan" name='user_name' {...register("firstName", {required: true,minLength:3, maxLength: 25})} />
              {errors.firstName?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.firstName?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.firstName?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}
            
              <label htmlFor="">Apellido</label>
              <input type="text" placeholder="Ej: Pérez" name='user_lastName' {...register("lastName", {required: true,minLength:2, maxLength: 100})} />
              {errors.lastName?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.lastName?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.lastName?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}

              <label htmlFor="">Email</label>
              <input type="email" placeholder="Ej: example@gmail.com" name='user_email' {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
              {errors.email?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.email?.type ==='pattern' && <small>Ingrese un email válido</small>}
              
              <label htmlFor="">Número telefónico</label>
              <input type="tel" placeholder="Ej: 115043669" name='user_phone' {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
              {errors.mobileNumber?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.mobileNumber?.type ==='minLength' && <small>Ingrese un número de teléfono válido</small>}
              {errors.mobileNumber?.type ==='maxLength' && <small>Ingrese un número de télefono válido</small>}

              <label htmlFor="">Entrenamiento que le interesa</label>
              <select name='user_trainning' {...register("title", { required: true})} >
                <option disabled={true} value="" >--Selecciona un entrenamiento--</option>
                <option value="Funcional">Funcional</option>
                <option value="Localizada">Localizada</option>
                <option value="Gimnasia adultos mayores">Gimnasia adultos mayores</option>
              </select>
              {errors.title?.type ==='required' && <small className='select'>Debe seleccionar un entrenamiento</small>}
            
              <button className='button' type="submit">Enviar</button>
            </form>
            <div className="description_social">
                También podes contactarnos a través de las siguientes plataformas
          </div>
          <div className='social'>
            <div className='instagram'>
              <a href="https://www.instagram.com/vitalidad.lm/" target={"blank"}><FiInstagram size={'4rem'}/></a>
            </div>
            <div className="facebook">
              <a href="https://web.whatsapp.com/"><FaWhatsapp size={'4rem'}/></a>
            </div>
          </div>
        </div>
    </div>
  )
}
