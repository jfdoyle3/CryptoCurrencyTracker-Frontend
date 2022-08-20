import React, { Fragment, useState, useContext}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { AuthContext } from "../Providers/AuthProvider";

// import '../../styling/CurrencyHeader.css';


const Ratings=(props)=>{
    const [isLiked, setIsLiked] = useState(false);
    const [isUnLiked, setIsUnLiked] = useState(false);
    const {currencyId, trackerId}=props.rate;
    const {auth}=useContext(AuthContext);
    // track id
    // currency id / symbol

    console.log("rating-com: currId: "+currencyId);
    console.log("rating-com: trackID: "+trackerId);

    const like=()=>{
        
        setIsLiked(current => !current);
        setIsUnLiked(false);
        if (isLiked){
            
            alert(`liked: ${isLiked}\nunliked: ${isUnLiked}`)
        
            // axios to post a like
        }

        if(!isLiked){
            alert(`Cleared:\nliked -  ${isLiked}\nunliked: ${isUnLiked}`)
            
            // axios to remove/delete like
        }
    }

    const unlike=()=>{
        
        setIsUnLiked(current => !current);
        setIsLiked(false);
        if (isUnLiked){
            alert(`unliked: ${isUnLiked}\nliked: ${isLiked}`)
            
            // axios to post a unlike
        }

        if(!isUnLiked){
            alert(`Cleared:\nunliked -  ${isUnLiked}\nliked: ${isLiked}`)
            
            // axios to remove/delete unlike
        }
    }

 
    return (
        <Fragment>   
        <div
                    style={{
                    color: isLiked ? 'green' : 'black' ,
                    }}
                    onClick={like}
                >
                 <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/> 
                </div>
                <div
                    style={{
                    color: isUnLiked ?  'red' : 'black',
                    }}
                    onClick={unlike}
                > 
                 <FontAwesomeIcon icon="fa-solid fa-thumbs-down"/> 
                </div>
                </Fragment> 
         
          )
}

export default Ratings;