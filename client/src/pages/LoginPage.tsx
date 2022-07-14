import LoginPageInputEmail from '../components/ui/LoginPageInputEmail'
import React from 'react'
import { FC } from 'react'
import LoginPageInputPass from '../components/ui/LoginPageInputPass'
import LoginModelVisualization from '../components/LoginModelVisualization'
import LoginPageButtonSignin from '../components/ui/LoginPageButtonSignin'
import LoginPageButtonSignup from '../components/ui/LoginPageButtonSignup'
import '../pages/loginPage.sass'

const LoginPage:FC = () => {
  return (
    <div className="LoginPageWrap">
      <LoginModelVisualization/>
      <h1 className="LoginPageTitle">Alnero</h1>
      <p className="LoginPageInfo">Введите мыло и пароль хз что написать</p>
      <div className="LoginPageInputWrap">
        <LoginPageInputEmail/>
        <LoginPageInputPass/>
      </div>
      <LoginPageButtonSignin/>
      <LoginPageButtonSignup/>
    </div>
  )
}

export default LoginPage