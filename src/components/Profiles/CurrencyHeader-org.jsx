// import React, {useContext, useState}from "react";
// import { CurrenciesContext } from "../Providers/CurrenciesProvider";
// import  Container  from "../common/Container";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import Button from '../common/Button';
// import { AuthContext } from "../Providers/AuthProvider";
// // import '../../styling/CurrencyHeader.css';


// const CurrencyHeader=(props)=>{
//     const [isLiked, setIsLiked] = useState(false);
//     const [isUnLiked, setIsUnLiked] = useState(false);
//     const {id, name,ranking,logoUrl,symbol}=props.crypto;
//     const {id: trackerId}=props.user;
//     const [currencies]= useContext(CurrenciesContext);
//     const currency=currencies.data.find(cur => cur.symbol===props.symbol);
//     const {auth}=useContext(AuthContext);
//     console.log("cID: "+id);
//     console.log("trackID: "+trackerId);
//     const like=()=>{
        
//         setIsLiked(current => !current);
//         if (isLiked && isUnLiked){
//             setIsUnLiked(false);
//             alert(`You Liked me!!- ${isLiked}`)
//             // axios to post a like
//         }

//         if(!isLiked){
//             alert(`Cleared- ${isLiked}`)
//             // axios to remove/delete like
//         }
//     }

//     const unlike=()=>{
        
//         setIsUnLiked(current => !current);
//         if (isUnLiked){
//             setIsUnLiked(false);
//             alert(`You UnLiked me, why?!!- ${isUnLiked}`)
//             // axios to post a unlike
//         }

//         if(!isUnLiked){
//             alert(`Cleared- ${isUnLiked}`)
//             // axios to remove/delete unlike
//         }
//     }

 
//     return (
//     <Container>
//             <div style={{display: "flex"}}>
//                 <img src={logoUrl} width={100} height={100} alt={name} />
//                 <h1>Symbol: {symbol}</h1>
//                 <h1>Name: {name}</h1>         
//                 <div
//                     style={{
//                     color: isLiked ? 'green' : 'black' ,
//                     }}
//                     onClick={like}
//                 >
//                  <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/> 
//                 </div>
//                 <div
//                     style={{
//                     color: isUnLiked ?  'red' : 'black',
//                     }}
//                     onClick={unlike}
//                 > 
//                  <FontAwesomeIcon icon="fa-solid fa-thumbs-down"/> 
//                 </div>
//             </div>
//         </Container>  
//           )
// }

// export default CurrencyHeader;