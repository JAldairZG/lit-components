import { LitElement, css, html } from "lit";
import { customElement} from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .login-container {
            margin-top: 100px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 400px;
        }

        .login-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .login-header h2 {
            color: #333;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .login-header p {
            color: #666;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 20px;
            position: relative;
        }

        .form-group label {
            display: block;
            color: #555;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        .form-group input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 16px;
            background: #fff;
            color: black;
        }

        .form-group input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group input:hover {
            border-color: #c8d0e0;
        }

        .login-btn {
            width: 100%;
            padding: 14px;
            background:  #667eea;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
        }

        @media (max-width: 480px) {
            .login-container {
                padding: 30px 25px;
            }
        }
  `;

  render() {
    return html`
      <div class="login-container">
        <div class="login-header">
            <h2>Login</h2>
        </div>

        <form class="login-form" @submit=${this.LoginSubmit}>
            <div class="form-group">
                <label for="email">Usuario</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required>
            </div>

            <button type="submit" class="login-btn">Iniciar Sesión</button>
        </form>
      </div>`;
  }

  private LoginSubmit = (e: Event): void => {
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
  
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    this.loginUser(email, password);
  }

  private loginUser(email: string, password: string): void {

    if(password === localStorage.getItem(email)){
      window.location.href = '../pokemonPage.html';
      alert(`Inicio de sesion exitoso`);
      
    }else{
      alert(`Inicio de sesion fallido`);
    }
    
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}

