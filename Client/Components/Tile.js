import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../Stylesheets/Tile.css';

class Tile extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <Col md={12} lg={3}>
              <Button bsStyle="primary" className="tileButton" onClick={this.props.onClick} style={{backgroundColor:"rgb(168, 160, 138)", border:"3px solid rgb(117, 112, 97)", color:"antiquewhite", fontWeight:"bold"}}>{this.props.tileTitle}</Button>
          </Col>
        );
    }
}



export default Tile;
