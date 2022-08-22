import React, { Fragment, useState, useContext}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { apiHostUrl } from "../../config";

// import '../../styling/CurrencyHeader.css';


const Ratings=(props)=>{
    const [isLiked, setIsLiked] = useState(false);
    const [isUnLiked, setIsUnLiked] = useState(false);
    const [rating,setRating]=useState({
        "rate": 1
    });
    const {currId, trackId}=props.rater;
    const {auth}=useContext(AuthContext);
    // track id
    // currency id / symbol

    console.log(">>--> Rating: cId: "+currId+" | tId: "+trackId+" | props: "+props);

    const like= async()=>{
        
        setIsLiked(current => !current);
        setIsUnLiked(false);  
        // axios to post a like
        if (isLiked){
        alert(`liked: ${isLiked}\nunliked: ${isUnLiked}`)
          // try{

          //   const res=await axios.post(
          //     `${apiHostUrl}/api/currency/rate/${trackId}/${currId}`, rating,
          //     {
          //       headers: {
          //           "Authorization": `Bearer ${auth.token}`
          //       }
          //     }
          //   )
          //   console.log("rating component:  "+res.data);
          //   setRating(res.data);
          //   }catch(err){
          //     console.log(err);
          //   }
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
          <td>   
            <div
                style={{
                color: isLiked ? 'green' : 'black' ,
                }}
                onClick={like}
            >
              <FontAwesomeIcon icon="fa-solid fa-thumbs-up " size="3x"/> 
            </div>
          </td> 
          <td> 
            <div
                style={{
                color: isUnLiked ?  'red' : 'black',
                }}
                onClick={unlike}
            > 
              <FontAwesomeIcon icon="fa-solid fa-thumbs-down" size="3x"/> 
            </div>
          </td>
        </Fragment> 
         
          )
}

export default Ratings;