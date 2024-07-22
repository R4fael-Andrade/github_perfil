import { useState } from 'react';
import Perfil  from './components/Perfil';
// import Formulario from './components/Formulario';
import ReposList from './components/RepoList';
function App() {

  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (

    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Digite o nome de usuário'/>

    {nomeUsuario.length > 4  && (
      <>
          <Perfil nome="Rafael" nomeUsuario={nomeUsuario}  />
          <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      < Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button' >Toggle Form</button> */}
    
    
    </>
  )
}

export default App


