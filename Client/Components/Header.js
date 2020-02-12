import React from 'react';
import {Row,Breadcrumb} from 'react-bootstrap';
import '../Stylesheets/Header.css';

class Header extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Row className="noGutters justify-content-center" style={{display:"flex", flexDirection:"column",flexGrow:1}}>
                <Row className="noGutters justify-content-center" style={{flexGrow:0.5,color:"rgb(117, 112, 97)", fontSize:"3rem", fontWeight:"bold", textAlign:"center"}}>
                    iDAI
                </Row>
                <Row className="noGutters justify-content-center" style={{flexGrow:0.5,color:"rgb(117, 112, 97)", fontSize:"1rem"}}>
                    <Breadcrumb style={{backgroundColor:"transparent", margin:"none"}}>
                        <Breadcrumb.Item style={{backgroundColor:"transparent", color:"rgb(117, 112, 97)"}}>ΕΠΙΛΟΓΗ ΕΞΑΜΗΝΟΥ</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
            </Row>
              
        );
    }
}

export default Header;
