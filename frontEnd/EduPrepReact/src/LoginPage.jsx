import { useState } from "react"
import './LoginPage.css';

export const LoginPage = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
    return (
      <div className="wrapper">
        <form action="#" name="formulario" method="post">
          <h1>Iniciar Sesión</h1>
          <div className="input-box">
            <input type="text" name="user" placeholder="Nombre de usuario" onChange={e => setUser(e.target.value)}/>
          </div>

          <div className="input-box">
            <input type="password" name="password" placeholder="Contaseña" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div>
            <button type="submit">Iniciar sesión </button>
            <button type="reset">Borrar </button>
          </div>
          
        </form>
      </div>
        
    )
  }