import React from 'react';
import {Row,Col} from 'react-bootstrap';

class Footer extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Row className="noGutters justify-content-center" style={{flexGrow:1,color:"rgb(117, 112, 97)", fontSize:"1rem", textAlign:"center"}}>
                <Col xs={12}>
                    Το υλικό που εμπεριέχεται στην εφαρμογή ΔΕΝ αποτελεί πνευματική ιδιοκτησία του προγραμματιστή. Είναι υλικό που διανέμεται δωρεάν σε φοιτητές, μέσω της 
                    πλατφόρμας http://www.compus.uom.gr. Η εφαρμογή χρησιμοποιεί το Google Drive και το Google Drive Api για να αποθηκεύει και να προσπελαύνει τα αρχεία. 
                </Col>
            </Row>
              
        );
    }
}

export default Footer;
