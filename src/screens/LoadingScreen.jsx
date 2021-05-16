import React, {useEffect, useContext } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import LottieView from "lottie-react-native";
import {UserContext } from '../context/UserContext'
import {FirebaseContext } from '../context/FirebaseContext'

export default function LoadingScreen() {

      const [user, setUser] = useContext(UserContext)
      const firebase=useContext(FirebaseContext)
      useEffect(() => {
            setTimeout(async()=>{
                  const user=firebase.getCurrentUser()

                  if(user){
                        const userInfo=await firebase.getUserInfo(user.uid)

                        setUser({
                              isLoggedIn:true,
                              email:userInfo.email,
                              uid:userInfo.uid,
                              username:userInfo.username,
                              profilePhoto:userInfo.profilePhotoUrl
                        })
                  } else {
                         setUser((state)=>({...state, isLoggedIn:false}))
                  }      
            }, 1500)
      }, [])

      return (
            <Container>
                  <Text title color='#f0f'>My Trans App</Text>
                  <LottieView
                        loop
                        autoPlay
                        source={require("../../assets/animation/loader.json")}
                        style={{width:'100%'}}
                  />
            </Container>
       );
};

const Container = styled.View`  
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color:#222222
`;
