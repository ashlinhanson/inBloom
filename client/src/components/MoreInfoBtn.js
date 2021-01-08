import React from "react";
import PlantInfo from "./PlantInfo";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import axios from "axios";
import fetch from 'node-fetch';


 
function MoreInfoBtn(props) {
 const [modalShow, setModalShow] = React.useState(false);
 let plantID = props.plantId;

//  var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   function plantDetail (){
//   fetch("https://trefle.io/api/v1/plants/" + plantID + "?token=YAJT0mak-g3CsuHS4YDL0iQPaeNCXHGRiwju5gkz-zM", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   } 
//  async function plantDetail () {
//     let TREFFLE_KEY = "YAJT0mak-g3CsuHS4YDL0iQPaeNCXHGRiwju5gkz-zM"
//     console.log("I was called " + plantID)
//  const response = await fetch('https://trefle.io/api/v1/plants/' + plantID + '?token=' + TREFFLE_KEY);
//     const json = await response.json();
//     console.log(json);
    // return axios.get('https://trefle.io/api/v1/plants/' + plantID + '?token=' + TREFFLE_KEY);
  //}

//   (async () => {
//     const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN');
//     const json = await response.json();
//     console.log(json);
//   })();
 
 function getInfo () {
    API.plantDetail(plantID).then(result => {
        console.log(plantID)
        console.log(result)
    })  
 }
 return (
   <div>
     <Button variant="primary" onClick={() => setModalShow(true)} onClick={() => getInfo()}>
       More Info
     </Button>
 
     <PlantInfo show={modalShow}
       onHide={() => setModalShow(false)}
       plant={props.plant}
       plantId={props.plantId}
       displayName={props.displayName}
       img={props.img}
       user={props.user} />
   </div>
 );
}
 
export default MoreInfoBtn;
