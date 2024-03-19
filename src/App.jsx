import React from 'react';
import { Component } from 'react';
import './App.css'
import TextLength from "./components/TextLength";
import PropsTextLength from "./components/PropsTextLength";



class App extends Component {

  state = {
    person: [
      { name: "Yagami Light, Kami!!!!!" }
    ],
  }

  

  textChangedHandler(event) {
    this.setState({
      person: [
        { name: event.target.value }
      ]
    })
  }






  render() {
    // Destructed state to get access to the name key
    let { person: [{ name }] } = this.state


    // Got the length by using the name key from 
    // the destructed state and used the length 
    // property to get the length
    let length = name.length;
    console.log(length)


    // A function to check the 
    // the length by passing in the length var
    const checkTextLength = () =>  {
  
      if (length < 10) {
        return "Text too short"
      }
  
      if (length > 25) {
        return "Text too long"
      }
    } 


    return (
      <>
        <TextLength autotext={ () => { this.textChangedHandler(event)}}theChange={name}> </TextLength>

        <PropsTextLength theLength={length} tooLongShort={checkTextLength()} > Length:</PropsTextLength>

      </>
    )
  }
}




export default App
