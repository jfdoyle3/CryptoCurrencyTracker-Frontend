import React, {useContext, useState}from "react";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import  Container  from "../common/Container";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../common/Button';
import { AuthContext } from "../Providers/AuthProvider";
// import '../../styling/CurrencyHeader.css';


const CurrencyHeader=(props)=>{
    const [isActive, setIsActive] = useState(false);
    const {id, name,ranking,logoUrl,symbol}=props.crypto;
    const {id: trackerId}=props.user;
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===props.symbol);
    const {auth}=useContext(AuthContext);
    console.log("cID: "+id);
    console.log("trackID: "+trackerId);
    const liked=()=>{
        alert('You Liked me!!')
        setIsActive(current => !current);
    }

 
    return (
    <Container>
            <div style={{display: "flex"}}>
                <img src={logoUrl} width={100} height={100} alt={name} />
                <h1>Symbol: {symbol}</h1>
                <h1>Name: {name}</h1>         
                <div
        style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={liked}
      >
       <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/> 
      </div>
            
            </div>
        </Container>  
          )
}

export default CurrencyHeader;


{/* <Button 
style={isLike ?{
    width: 'auto',
    color: '#00ff00',
    } : {
        width: 'auto',
        color: '#FF00FF',
    }
    }
    onClick={liked}
>
<FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>        
</Button>
<Button 
style={{
    width: 'auto',
    color: '#ff0000',
    }}
    onClick={dislike}
>
<FontAwesomeIcon icon="fa-solid fa-thumbs-down" />    
</Button> */}