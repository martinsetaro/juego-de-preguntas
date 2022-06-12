import "../scss/app.scss";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Preguntas = () => {

  const [correcta, setCorrecta] = useState();
  const [incorrecta,setInCorrecta]= useState();

  const muestraValor = (e) => {
   
    if (e.target.textContent === "China") {
     
      let seleccion = document.querySelector(".seleccionado");
      seleccion.classList.add("seleccion");

      let errorSeleccion = document.querySelector('.errorSeleccion')
      errorSeleccion.classList.remove('error')

      let seleccionDos = document.querySelector('.errorSeleccionDos');
          seleccionDos.classList.remove('error')

     let seleccionTres = document.querySelector('.errorSeleccionTres');
          seleccionTres.classList.remove('error')
          toast.success('Ganastes 10 Pts!')

          
       





      setCorrecta(true);
      setInCorrecta(false)


    } else {
      
      let seleccion = document.querySelector(".seleccionado");
      let errorSeleccion = document.querySelector('.errorSeleccion');
      let seleccionDos = document.querySelector('.errorSeleccionDos');
      let seleccionTres = document.querySelector('.errorSeleccionTres');

      if(e.target.classList.contains('errorSeleccion')){
          seleccion.classList.remove("seleccion");
          errorSeleccion.classList.add('error')
          seleccionDos.classList.remove('error')

        }else if (e.target.classList.contains('errorSeleccionDos')){
       
         seleccionDos.classList.add('error')
         errorSeleccion.classList.remove('error')
         seleccionTres.classList.remove('error');
            
        }else { e.target.classList.contains('errorSeleccionTres')
        
            seleccionTres.classList.add('error');
            errorSeleccion.classList.remove('error');
            seleccionDos.classList.remove('error');        
        }
        toast('Tal vez la proxima...', {
            icon: '😕',
          });


      
    
      
    
      
        
      
      
      
  
setInCorrecta(true)
setCorrecta(false)
    }
  };

  return (
    <div className="contenedorPreguntas">
      <h2>Cuál de estos paises, tiene más habitantes?</h2>
      <span className="seleccionado" onClick={muestraValor}>
        China
      </span>
      <span className="errorSeleccion" onClick={muestraValor} value="falso">
        Turquia
      </span>
      <span className="errorSeleccionDos" onClick={muestraValor} value="falso">
        Rusia
      </span>
      <span className="errorSeleccionTres" onClick={muestraValor} value="falso">
        España
      </span>
      <Toaster/>
      {correcta === true && 
        <div className="preguntaCorrecta">Correcta</div>
     
       
       
      }
       <Toaster/>
       {incorrecta === true && <div className="preguntaInCorrecta">incorrecta</div>
       }
    </div>
  );
};
export default Preguntas;