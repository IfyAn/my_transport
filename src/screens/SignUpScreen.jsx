import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import {AntDesign } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import {Platform} from 'react-native'
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'


export default function SignUpScreen({navigation}) {

      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
      const [loading, setLoading] = useState(false)
      const [username, setUsername] = useState()
      const [user, setUser] = useContext(UserContext)
      const firebase=useContext(FirebaseContext)
      const [profilePhoto, setProfilePhoto] = useState()

      const getPermission=async()=>{
            if(Platform.OS !=='web'){
                  //const { status } = await Permissions.askAsync(Permissions.CAMERA)
                  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                  return status
            }
      }

      const pickImage=async()=>{
            try{
                  let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                      });
                  
                      console.log(result);
                  
                      if (!result.cancelled) {
                        setProfilePhoto(result.uri);
                      }

            } catch(error) {
                  console.log('Error @pickImage:', error);
            }
      }

      const addProfilePhoto=async()=>{
            const status = await getPermission()

            if(status !=='granted'){
                  alert('We need permision to access your camera')

                  return
            }

            pickImage()
      }


      const signUp=async()=>{
            setLoading(true)
            const user={username, email, password, profilePhoto }
            try{
                  const createdUser= await firebase.createUser(user)

                  setUser({...createdUser, isLoggedIn:true});
            } catch(error) {
                  console.log('Error @signUp:',error)
            } finally {
                  setLoading(false)
            }
      }

      return (
            <Container>
                  <Main> 
                        <Text title center semi>Sign up as a user</Text>
                  </Main>
                  <ProfilePhotoContainer onPress={addProfilePhoto}>
                        {profilePhoto ? (
                              <ProfilePhoto source={{uri:profilePhoto}} />
                              )  :  (           
                        <DefaultProfilePhoto>
                              <AntDesign name='plus' size={24} color='ffffff' />
                        </DefaultProfilePhoto>
                              )}
                  </ProfilePhotoContainer>
                  <Auth>
                              <AuthContainer>
                                    <AuthTitle>User Name</AuthTitle>
                                    <AuthField
                                          autoCapitalize='none'
                                          autoCorrect={false}
                                          value={username}
                                          onChangeText={(username)=>setUsername(username.trim())}
                                     />
                              </AuthContainer>
                              <AuthContainer>
                                    <AuthTitle>Email Address</AuthTitle>
                                    <AuthField
                                          autoCapitalize='none'
                                          autoCompleteType='email'
                                          autoCorrect={false}
                                          keyboardType='email-address'
                                          value={email}
                                          onChangeText={(email)=>setEmail(email.trim())}
                                     />
                              </AuthContainer>
                              <AuthContainer>
                                    <AuthTitle>Password</AuthTitle>
                                    <AuthField
                                          autoCapitalize='none'
                                          autoCompleteType='password'
                                          autoCorrect={false}
                                          secureTextEntry={true}
                                          value={password}
                                          onChangeText={(password)=>setPassword(password.trim())}
                                     />
                              </AuthContainer>
                        </Auth>
                        <SignUpContainer onPress={signUp} disabled={loading}>
                              { loading ?(
                                    <Loading />
                              
                              ) : (<Text bold center color='#ffffff'>Sign Up</Text>)}
                              
                        </SignUpContainer>
                        <SignIn onPress={()=> navigation.navigate('SignIn')}>
                              <Text small center>
                                    Already have an account?{'  '}
                                    <Text bold color='#8022d9'>
                                          Sign In
                                    </Text>
                              </Text>
                        </SignIn>

                  <HeaderGraphics>
                        <RightCircle />
                        <LeftCircle />
                  </HeaderGraphics>
                  <StatusBar barStyle='light-content' />
            </Container>
      )
}

const Container = styled.ScrollView`
      flex:1
`;

const Main = styled.View`
      margin-top:162px
`

const ProfilePhotoContainer=styled.TouchableOpacity`
      background-color: gray;
      width:80px;
      height:80px;
      border-radius:40px;
      align-self:center;
      margin-top:16px;
      overflow:hidden
`

const DefaultProfilePhoto=styled.View`
      align-items:center;
      justify-content:center;
      flex:1
` 
const ProfilePhoto=styled.Image`
      flex:1
`
const Auth=styled.View`
      margin: 16px 32px 32px
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

const SignUpContainer=styled.TouchableOpacity`
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

const SignIn=styled.TouchableOpacity`
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