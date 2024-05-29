/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { NavLink, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import css from './LoginForm.module.css';
import Icon from '../utils/Icon';

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const { id } = useParams<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    const test = {
      email: data.email,
      password: data.password,
    };

    console.log('Reg Data: >>>', test);
    reset();
  };

  return (
    <div className={css.loginWrapper}>
      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrapperLoginNav}>
          <NavLink to="/auth/register" className={css.styledNavLink}>
            Registration
          </NavLink>
          <NavLink
            to="/auth/login"
            className={`${css.styledNavLink} ${id === 'login' && css.accent}`}
          >
            Login
          </NavLink>
        </div>

        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email must include @ and .',
              },
            })}
          />
        </label>

        {/* PASSWORD */}
        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            placeholder="Create a password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 8,
                message: 'Password must include minimum 8 characters',
              },
            })}
          />
          <i
            className={css.iconStyledEye}
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            <Icon
              name="icon-eye"
              width="18px"
              height="18px"
              className={`${css.iconEye} ${passwordShown && css.passShown}
                    }`}
            />
          </i>
        </label>

        <button className={css.btnSubmit} type="submit" disabled={!isValid}>
          Register Now
        </button>
      </form>
    </div>
  );
};