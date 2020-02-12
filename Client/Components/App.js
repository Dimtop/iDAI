import React from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import SemesterPage from './SemesterPage';
import LessonPage from './LessonPage';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state={
            semester:""
        }

        this.manageSemesterSelection = this.manageSemesterSelection.bind(this);
    }

    manageSemesterSelection(semseterToSet){
        this.setState({semester:semseterToSet});
        console.log(semseterToSet);
    }

    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"> <SemesterPage semesterSelectionManagement={this.manageSemesterSelection}/> </Route>
                        <Route path="/lessons"> <LessonPage semester={this.state.semester}/> </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
