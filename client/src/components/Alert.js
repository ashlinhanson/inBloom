import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Alert(props){

   const [show, setShow] = useState();
      
    if (show) {
        return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Log out successful!</Alert.Heading>
            <p>
            We'll see you soon! 🌱
            </p>
        </Alert>
        );
    }
    
    return
        <Button onClick={() => setShow(true)}>Show Alert</Button>;
    
    render(<Alert />);
}