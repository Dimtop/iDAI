import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Tile from './Tile';
import Header from './Header';
import Footer from './Footer';


class LessonPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            semester:this.props.semester
        }
    }


    componentDidMount(){
        fetch("http://localhost:5000/api/lessons?semester="+this.state.semester)
        .then( (res) => res )
        .then( (res) => {
            console.log(res);
        });
    }


    render(){
        return(
            <Container className="semesterPageContainer fluid"> 
                <Header></Header>
                <Row  className="noGutters justify-content-center" style={{flexGrow:1, textAlign:"center"}}>
             
                </Row>
                <Row  className="noGutters justify-content-center" style={{flexGrow:1, textAlign:"center"}}>
                 
                </Row>
                <Footer></Footer>
            </Container>
        );
    }
}

export default LessonPage;
