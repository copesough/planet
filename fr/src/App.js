import logo from './logo.svg';
import './App.css';
import React from 'react';
//------------------------------

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





class Calc extends React.Component {

  constructor(props) {
    super(props);
    this.state={ size:0, paper: 0, connect: 0, plastic: 0,  quant: 1}
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({quant: event.target.value});
  }

render() {


function Selector(props,this)
{
  function selectorType(e)
  {
 
    switch(props.name)
    {
      case 'size':
      this.setState( {size: props.value} )
      break;

      case 'paper':
      props.object.setState( {paper: props.value} )
      break;

      case 'connect':
      props.object.setState( {connect: props.value} )
      break;

      case 'plastic':
      props.object.setState( {plastic: props.value} )
      break;

      
    }           
  }
  
  return (
    <label 
           onClick={ selectorType }
    >
        {props.text}
        <input type="radio" name={props.name} value={props.value} />
        ---{this.state.size}---55
    </label>

  )
}



return(
<div className="calc">
  <h3>Калькулятор печати документов</h3>
  <form>
    
    <h6>Сменить товар</h6>
---{this.state.size}---
    <div className="selector">
      <Selector   name="size" value="1" text="А4(ч.б.)"  />
      <Selector   name="size" value="2" text="А4(цвет)"  />
      <Selector   name="size" value="3" text="А3(ч.б.)"  />
      <Selector   name="size" value="4" text="А3(цвет)"  />
    </div>
    <h6>Выберите бумагу</h6>
    <div className="selector">
      <Selector   name="paper" value="80" text="80гр.м2"  />
      <Selector   name="paper" value="130" text="130гр.м2"  />
      <Selector   name="paper" value="200" text="200гр.м2"  />
      <Selector   name="paper" value="300" text="300гр.м2"  />
      <Selector    name="paper" value="samokleika" text="Самоклейка"  />
      <Selector   name="paper" value="desiner" text="Дизайнерская бумага"  />
    </div>
    <h6>Выберите скреплени</h6>
    <div className="selector">
      <Selector   name="connect" value="no" text="Не требуется"  />
      <Selector  name="connect" value="hard" text="Твердый переплет"  />
      <Selector   name="connect" value="plastic" text="Брошюровка на пластиковую пружину"  />
      <Selector   name="connect" value="metall" text="Брошюровка на металлическую пружину"  />
    </div>
    <h6>Ламинация</h6>
    <div className="selector">
      <Selector  name="plastic" value="no" text="Не требуется"  />
      <Selector   name="plastic" value="60" text="Пленкой 60мкм"  />
      <Selector   name="plastic" value="125" text="Пленкой 125мкм"  />
      <Selector   name="plastic" value="250" text="Пленкой 250мкм"  />
    </div>
    <h6>Количество</h6>
    <input type="text" name="" value={this.state.quant} onChange={this.handleChange} /><span>шт</span>
    <br />
    <h6>
      <span>Итого:</span>
      &nbsp;&nbsp;&nbsp; {this.state.size}
      - - {this.state.paper}
       - - {this.state.connect}
        - - {this.state.plastic}
      - - {this.state.quant}
      - - <button>Заказать</button>
    </h6>
  </form>

</div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={value: null}
  }
  render() {
    return (
   <>
 {/* Слайдер карусель*/}
   <div className="car">
       <Carousel>
                <div>
                    <img  src="/img/book/1.jpg" />
                    <p className="legend">Продано 120 штук</p>
                </div>
                <div>
                    <img src="/img/book/2.jpg" />
                    <p className="legend">Продано 120 штук</p>
                </div>
                <div>
                    <img src="/img/book/3.jpg" />
                    <p className="legend">Продано 120 штук</p>
                </div>
      </Carousel>
    </div>

  {/* Калькулятор*/}
   <Calc />
   
  </>
    );
  }  
}

export default App;
