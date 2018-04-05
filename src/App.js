import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import  AddProject from './Components/AddProject';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [
      ]
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title:"business website",
      category:'Web Design'
      },
      {
      title:"Social App",
    category:'Mobile Development'
      },
      {
    title:"E-commerce Shopping Cart",
  category:'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={ this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
