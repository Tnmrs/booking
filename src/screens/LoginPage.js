import '../auth.css';
import '../main.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Введите логин');
  const [passwordError, setPasswordError] = useState('Введите пароль');
  const [formValid, setFormValid] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      navigate('/homepage', {
        replace: true,
        state: { email, password },
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  });

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емайл');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 10) {
      setPasswordError('Пароль должен быть длиннее 8 и не более 10 символов');
      if (!e.target.value) {
        setPasswordError('Поле не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };
  return (
    <div>
      <div class="container">
        <div class="container-login">
          <div class="wrap">
            <form class="form validate-form" onSubmit={loginHandler}>
              <h1 className="form-title">Simple Hotel Check</h1>
              <div class="p-t-31 p-b-9">
                <span class="title-form">Логин</span>
              </div>
              <div class="wrap-input validate-input" data-validate="Username is required">
                <input
                  class="input"
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  type="text"
                  placeholder=""
                />
              </div>
              {emailDirty && emailError && <div className="error">{emailError}</div>}

              <div class="p-t-13 p-b-9">
                <span class="title-form">Пароль</span>
              </div>
              <div class="wrap-input validate-input" data-validate="Password is required">
                <input
                  class="input"
                  onChange={(e) => passwordHandler(e)}
                  value={password}
                  onBlur={(e) => blurHandler(e)}
                  name="password"
                  type="password"
                  placeholder=""
                />
              </div>
              {passwordDirty && passwordError && <div className="error">{passwordError}</div>}

              <div class="container-btn">
                <button class="form-btn" type="submit">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
