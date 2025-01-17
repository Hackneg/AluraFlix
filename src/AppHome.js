import Banner from './Banner';
import '../estilos/Banner.css';

import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';
import FormularioModal from './componentes/FormularioModal';


import './estilos/Categoria.css';

import { useState, useEffect } from 'react';
import { buscar } from "./api/api";
import { v4 as uuid } from 'uuid';


function App() {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(false);

  const [videos, actualizarVideos] = useState([
  ])

  const [videoEditar, setVideoEditar] = useState();

  useEffect(() => {  
    buscar("/videos", actualizarVideos);
  },[])

  const registrarVideo = (video) => {
    actualizarVideos([...videos, video]);
  }

  const eliminarVideo = (id) => {
    console.log(id);
    const nuevosVideos = videos.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
  }

  const categorias = [
    {
      id: uuid(),
      titulo: "Front End",
      color: "#6BD1FF"
    },
    {
      id: uuid(),
      titulo: "Back End",
      color: "#00C86F"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color: "#FFBA05"
    }
  ]

  const editarVideo = (id) => {

    setMostrarFormulario(true);
    videos.forEach((video) => {
      video.id === id && setVideoEditar(video)
    })

  }

  const cerrarEditar = () => {
    setMostrarFormulario(false);
  }

  return (
    <div className="App">     
      <Banner />
      <div className='contenedor-inf'>
      
        {
          categorias.map((categoria) => <Categoria 
            
            datos={categoria}
            key={categoria.id}
            videos={videos.filter(videos => videos.categoria === categoria.titulo)}
            eliminarVideo={eliminarVideo}
            editarVideo={editarVideo}
          />
          )
        }
      </div>
      {
        mostrarFormulario && <FormularioModal 
          categorias={categorias.map((categoria) => categoria.titulo)}
          videoEditar={videoEditar}
          registrarVideo={registrarVideo}
          cerrarEditar={cerrarEditar}
        />
      }
      <Footer />
    </div>
  );
}

export default App;
