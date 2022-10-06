import React from 'react';
import Header from './components/Header';
import 'C:/Users/kaush/OneDrive/Documents/GitHub/chatBot/my-app/src/styles.css';
import aman from './AKpic.jpg';
import nick from './NVpic.jpg';
import samer from './SSpic.jpg';
//import styles from './styles.css';
import SocialMedia from './components/SocialMedia';
//import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


export  default function About(){
    
        return  (
            <div className="about" >
             
                <Header title = 'About Us!'/> 
            <div className="allPhotos">
                
                <div className="Photos">
                    <img src={nick} width="350px" height="350px" />
                    <h1 Style = "font-size= 5cm"> Nicholas "Nick" Varela</h1>
                    <p>Hi! My name is Nick and I am a CS major currently attending UofC!</p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


                        <a href="https://www.linkedin.com/in/nicholas-varela-benitez/" class="fa fa-linkedin" > </a>
                        <a href="https://github.com/Nicodes1" class="fa fa-github"></a>
                    
                </div>
                
                <div className="Photos">
                    <img src={aman} width="350px" height="350px" />
                    <h1 Style = "font-size= 5cm"> Ayushmaan "Aman" Kaushik</h1>
                    <p>Hi! My name is Aman and I am a CS major currently attending UBCO!</p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


                        <a href="https://www.linkedin.com/in/ayushmaan-aman-kaushik-40239b194/" class="fa fa-linkedin"></a>
                        <a href="https://github.com/AmanKaushik77" class="fa fa-github"></a>

                        
                </div>
                <div className="Photos">
                    <img src={samer} width="350px" height="350px" />
                    <h1 Style = "font-size= 5cm"> Samer Swedan </h1>
                    <p>Hi! My name is Samer and I am a CS major currently attending UofC!</p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="https://github.com/soswedan" class="fa fa-github"></a>
                </div>
            </div>
                
            </div>
            
        );
        
   }



     