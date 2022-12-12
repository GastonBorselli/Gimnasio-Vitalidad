import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const { register, handleSubmit, reset ,formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  

  const showToast = ()=>{
    toast.success('Mensaje enviado exitosamente', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const sendEmail = (formData) => {
    emailjs
      .send("service_vz2epea", "template_alvr8eq", formData, "L6PjwWka8vB-v1ZjV")
      .then(
        (result) => {
          showToast();
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  
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
        <form  onSubmit={handleSubmit(sendEmail)}>
           <label htmlFor="">Nombre</label>
              <input type="text" placeholder="Ej: Juan" name='user_name' {...register("user_name", {required: true,minLength:3, maxLength: 25})} />
              {errors.user_name?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.user_name?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.user_name?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}
            
              <label htmlFor="">Apellido</label>
              <input type="text" placeholder="Ej: Pérez" name='user_lastName' {...register("user_lastName", {required: true,minLength:2, maxLength: 100})} />
              {errors.user_lastName?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.user_lastName?.type ==='minLength' && <small>Ingrese un nombre válido</small>}
              {errors.user_lastName?.type ==='maxLength' && <small>Ingrese un nombre válido</small>}

              <label htmlFor="">Email</label>
              <input type="email" placeholder="Ej: example@gmail.com" name='user_email' {...register("user_email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
              {errors.user_email?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.user_email?.type ==='pattern' && <small>Ingrese un email válido</small>}
              
              <label htmlFor="">Número telefónico</label>
              <input type="tel" placeholder="Ej: 115043669" name='user_phone' {...register("user_phone", {required: true, minLength: 6, maxLength: 12})} />
              {errors.user_phone?.type ==='required' && <small>El campo no puede estar vacío</small>}
              {errors.user_phone?.type ==='minLength' && <small>Ingrese un número de teléfono válido</small>}
              {errors.user_phone?.type ==='maxLength' && <small>Ingrese un número de télefono válido</small>}

              <label>Entrenamiento que le interesa</label>
              <select defaultValue={value} onChange={handleChange} name='user_trainning' {...register("user_trainning", { required: true})} >
                <option value="" disabled hidden >--Selecciona un entrenamiento--</option>
                <option value="Funcional">Funcional</option>
                <option value="Localizada">Localizada</option>
                <option value="Gimnasia adultos mayores">Gimnasia adultos mayores</option>
              </select>
              {errors.user_trainning?.type ==='required' && <small className='select'>Debe seleccionar un entrenamiento</small>}

              <label>Mensaje</label>
              <textarea className='message' name="message" cols="60" rows="10" {...register("message",{required:true})} />
              {errors.message?.type ==='required' && <small className='select'>Debe ingresar un mensaje</small>}
              <button className='button' type="submit" value="Send">Enviar mensaje</button>              
        </form>        
        
            <div className="description_social">
                También podes contactarnos a través de las siguientes plataformas
          </div>
          <div className='social'>
            <div className='instagram'>
              <a href="https://www.instagram.com/vitalidad.lm/" target={"blank"}><FiInstagram size={'4rem'}/></a>
            </div>
            <div className="whatsapp">
              <a href="https://web.whatsapp.com/" target={"blank"}><FaWhatsapp size={'4rem'}/></a>
            </div>
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}
