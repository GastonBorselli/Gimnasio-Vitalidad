import React from 'react'
import horario from '../horario.tsx';


export const Classes = () => {



return (
<div className='schedule' name='home'>
    <div className="schedule_container">
        <div className="programs_header">
            <span className="stroke-text">Conocé </span>
            <span className='stroke-text'>nuestros </span>
            <span className='white-text'>horarios.</span>
        </div>
    </div>
    <section className='classes'>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Horario</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            {horario.map((hour) =>(
            <tr>
              <td className='time'>
                {hour.hora}                    
              </td>
              
              <td>
                <p className='dark'>{hour.lunes}</p>
                <p>{hour.profelunes}</p>
              </td>
              <td>
                <p className='dark'>{hour.martes}</p>
                <p>{hour.profemartes}</p>
              </td>
              <td>
                <p className='dark'>{hour.miercoles}</p>
                <p>{hour.profemiercoles}</p>
              </td>
              <td>
                <p className='dark'>{hour.jueves}</p>
                <p>{hour.profejueves}</p>
              </td>
              <td>
                <p className='dark'>{hour.viernes}</p>
                <p>{hour.profeviernes}</p>
              </td>
            </tr>
            ))};
          </tbody>
        </table>
      </div>
    </section>

</div>
)
}