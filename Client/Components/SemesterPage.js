import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Tile from './Tile';
import Header from './Header';
import Footer from './Footer';
import {Redirect} from 'react-router-dom';
import '../Stylesheets/SemesterPage.css';

class SemesterPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            shouldRedirectToLessonPage: false
        }

        this.onTileClick = this.onTileClick.bind(this);
    }

    onTileClick(e){
        this.props.semesterSelectionManagement(e.target.innerHTML);
        this.setState({shouldRedirectToLessonPage:true})
;    }

    render(){
        if(this.state.shouldRedirectToLessonPage){
            return <Redirect to="/lessons"/>;
        }
        else{
            return(
                <Container className="semesterPageContainer fluid"> 
                    <Header></Header>
                    <Row  className="noGutters justify-content-center" style={{flexGrow:1, textAlign:"center"}}>
                        <Tile tileTitle="1ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="2ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="3ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="4ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                    </Row>
                    <Row  className="noGutters justify-content-center" style={{flexGrow:1, textAlign:"center"}}>
                        <Tile tileTitle="5ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="6ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="7ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                        <Tile tileTitle="8ο ΕΞΑΜΗΝΟ" onClick={this.onTileClick}/>
                    </Row>
                    <Footer></Footer>
                </Container>
            );
        }
       
    }
}

export default SemesterPage;
