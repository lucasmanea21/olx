import React,{useState,useEffect} from 'react'
import Button from '../Button'
import {SigninSection,FormWrapper,TermsDiv,NavMenu,SignInBtn,SignUpBtn,SigninWithAccounts,SigninFormDiv,SignUpFormDiv,EmailForm,EmailInput, PasswordForm,PasswordInput,ForgotPassword,SigninBtn,FbBtnWrapper,GoogleBtnWrapper,TermsWrapper,AcordInput,InputDiv,AcordDiv,AcordText} from './SigninComponents'

const SigninForm = () => {
  const [signIn, setSignIn] = useState(true)
  const [showGoogle, setShowGoogle] = useState(true)

  console.log(signIn)

    return (
        <SigninSection >
            <FormWrapper signIn={signIn}>
              <NavMenu>
                <SignInBtn signIn={signIn} onClick={() => {setSignIn(true); setShowGoogle(true)}}>Intra in cont</SignInBtn>
                <SignUpBtn  signIn={signIn} onClick={() => {setSignIn(false); setShowGoogle(false)} }>Creeaza un cont</SignUpBtn>
              </NavMenu>
              <SigninWithAccounts>
                  <FbBtnWrapper>Continua cu contul Facebook</FbBtnWrapper>
                  <GoogleBtnWrapper showGoogle={showGoogle}>Sign in with Google</GoogleBtnWrapper>
              </SigninWithAccounts>  
              <SigninFormDiv signIn={signIn}>
                  <EmailForm> 
                    <p>Email (din contul OLX)</p>
                    <EmailInput><input type='email' placeholder='Email (din contul OLX)'/></EmailInput>
                  </EmailForm>
                  <PasswordForm>
                     <p>Parola</p>
                    <PasswordInput> <input type='password' placeholder='Parola' /></PasswordInput>
                  </PasswordForm>
                    {/* <CaptchaForm></CaptchaForm> */}
                    <ForgotPassword>
                    <p>Ai uitat parola?</p>
                    </ForgotPassword>
                    <SigninBtn>
                      Intra in cont
                    </SigninBtn>
                    <TermsWrapper>
                   <p> Prin accesarea contului, esti de acord cu Termenii si Conditiile site-ului</p>
                    </TermsWrapper>
              </SigninFormDiv>
              <SignUpFormDiv signIn={signIn}>
              <EmailForm> 
                    <p>Email</p>
                    <EmailInput><input type='email' placeholder='Email'/></EmailInput>
                  </EmailForm>
                  <PasswordForm>
                     <p>Parola</p>
                    <PasswordInput> <input type='password' placeholder='Parola' /></PasswordInput>
                  </PasswordForm>
                    {/* <CaptchaForm></CaptchaForm> */}
                    <TermsDiv>
                    <p>Prin clic pe butonul Inregistreaza-te, accept Termenii de utilizare.</p> <br />
<p>Am înțeles că S.C. OLX Online Services S.R.L. îmi folosește datele personale în conformitate cu Declarația de confidențialitate și Politica privind modulele cookie și alte tehnologii similare. S.C. OLX Online Services S.R.L. recurge la sisteme automate și la parteneri care analizează modul în care utilizez serviciile, pentru a oferi o funcționalitate a produsului și un conținut relevant, materiale publicitare personalizate, precum și protecție împotriva mesajelor nesolicitate, software-ului rău intenționat și utilizării neautorizate.</p>
                    </TermsDiv>
                    <AcordDiv>
                      <InputDiv><AcordInput type='checkbox'/></InputDiv>
                      <AcordText>
Sunt de acord cu folosirea mijloacelor de comunicare electronica si a echipamentelor de telecomunicatii in scopul trimiterii de informatii de natura comerciala (de ex. buletine informative, mesaje SMS) privind OLX Online Services S.R.L., afliliatii sau partenerii sai.</AcordText>
                    </AcordDiv>
                    <SigninBtn>
                      Intregistreaza-te
                    </SigninBtn>
              </SignUpFormDiv>
            </FormWrapper>
        </SigninSection>
    )
}

export default SigninForm
