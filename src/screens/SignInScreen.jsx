import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'

export default function SignInScreen({navigation}) {

      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
      const [loading, setLoading] = useState(false)
      const [user, setUser] = useContext(UserContext)
      const firebase=useContext(FirebaseContext)

      const signIn=async()=>{
            setLoading(true)
            
            try{
                  await firebase.signIn(email, password)
                  const uid=firebase.getCurrentUser().uid
                  const userInfo= await firebase.getUserInfo(uid)

                  setUser({
                        username:userInfo.username,
                        email:userInfo.email,
                        uid,
                        profilePhotoUrl:userInfo.profilePhotoUrl,
                        isLoggedIn:true
                  });
            } catch(error) {
                  alert(error.message)
            } finally {
                  setLoading(false)
            }
      }

      return (
            <Container>
                  <Main> 
                        <Text title center semi>Welcome Back</Text>
                  </Main>
                  <Auth>
                              <AuthContainer>
                                    <AuthTitle>Email Address</AuthTitle>
                                    <AuthField
                                          autoCapitalize='none'
                                          autoCompleteType='email'
                                          autoCorrect={false}
                                          autoFocus={false}
                                          keyboardType='email-address'
                                          value={email}
                                          onChangeText={email=>setEmail(email.trim())}
                                     />
                              </AuthContainer>
                              <AuthContainer>
                                    <AuthTitle>Password</AuthTitle>
                                    <AuthField
                                          autoCapitalize='none'
                                          autoCompleteType='password'
                                          autoCorrect={false}
                                          autoFocus={false}
                                          secureTextEntry={true}
                                          value={password}
                                          onChangeText={password=>setPassword(password.trim())}
                                     />
                              </AuthContainer>
                        </Auth>
                        <SignInContainer onPress={signIn} disabled={loading}>
                              { loading ?(
                                    <Loading />
                              
                              ) : (<Text bold center color='#ffffff'>Sign In</Text>)}
                              
                        </SignInContainer>
                        <SignUp onPress={()=> navigation.navigate('SignUp')}>
                              <Text small center>
                                    New to this App?{'  '}
                                    <Text bold color='#8022d9'>
                                          Sign Up
                                    </Text>
                              </Text>
                        </SignUp>

                  <HeaderGraphics>
                        <RightCircle />
                        <LeftCircle />
                  </HeaderGraphics>
                  <StatusBar barStyle='light-content' />
            </Container>
      )
}

const Container = styled.View`
      flex:1
`;

const Main = styled.View`
      margin-top:192px
`
const Auth=styled.View`
      margin: 64px 32px 32px
`

const AuthContainer=styled.View`
      margin-bottom:10px
`

const AuthTitle=styled(Text)`
      color: #8e93a1;
      font-size:12px;
      font-weight:300;
      text-transform:uppercase;
`

const AuthField=styled.TextInput`
      border-bottom-color: gray;
      height:40px;
      border-bottom-width: 0.5px
`

const SignInContainer=styled.TouchableOpacity`
      margin: 0 32px;
      height: 40px;
      align-items: center;
      justify-content: center;
      background-color: purple
`
const Loading = styled.ActivityIndicator.attrs((pops)=>({
      size: 'small',
      color:'#fffff'
}))`` 

const SignUp=styled.TouchableOpacity`
      margin-top: 17px;
      
`

const HeaderGraphics = styled.View`
      position: absolute;
      width: 100%;
      top:-50px;
      z-index:-100
`;


const RightCircle= styled.View`
      background-color:blue;
      position:absolute;
      top:-200px;
      right:-100px;
      width:400px;
      height:400px;
      border-radius:200px
` 

const LeftCircle = styled.View`
      background-color:yellow;
      position:absolute;
      top:-50px;
      left:-50px;
      width:200px;
      height:200px;
      border-radius:200px
`
const StatusBar = styled.StatusBar`
      
`