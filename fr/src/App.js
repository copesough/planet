import logo from './logo.svg';
import './App.css';
import React from 'react';
//------------------------------

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//-----------



import InputSlider from './slider.js'




function Selector(props)
{
  function selectorType(e)
  {
 
    switch(props.name)
    {
      case 'size':
      props.object.setState( {size: props.value} )
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

      case 'width':
      props.object.setState( {width: props.value} )
      break;

      
    }           
  }
  
  return (
    <label className={(props.chosen=="one") ? "chosen" : ""}
           onClick={ selectorType }
    >
        {props.text}
        <input type="radio" name={props.name} value={props.value} />
       
    </label>

  )
}

class Calc extends React.Component {

  constructor(props) {
    super(props);
    this.state={ size:0, paper: 0, connect: 0, width: 0, plastic: 0,  quant: 1, value: 0}
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({quant: event.target.value})
  }

render() {

return(
<div className="calc">
  <h3>Калькулятор печати документов</h3>
  <form>
    
    <h6>Сменить товар</h6>

    <div className="selector">
      <Selector  chosen={this.state.size==5 ? "one" : ""} name="size" value="5" text="А4(ч.б.)" object={this} />
      <Selector   chosen={this.state.size==20 ? "one" : ""} name="size" value="20" text="А4(цвет)" object={this} />
      <Selector   chosen={this.state.size==60 ? "one" : ""} name="size" value="60" text="А3(ч.б.)" object={this} />
      <Selector   chosen={this.state.size==75 ? "one" : ""} name="size" value="75" text="А3(цвет)" object={this} />
    </div>
    <h6>Выберите бумагу</h6>
    <div className="selector">
      <Selector   chosen={this.state.size==1 ? "one" : ""} name="paper" value="1" text="80гр.м2" object={this} />
      
    </div>
    <h6>Брошюровка</h6>
    <div className="selector">
      <Selector   chosen={this.state.connect==0 ? "one" : ""} name="connect" value="0" text="Нет" object={this} />
      <Selector   chosen={this.state.connect==1 ? "one" : ""} name="connect" value="1" text="Брошюровка на пластиковую пружину" object={this} />
      <Selector   chosen={this.state.connect==2 ? "one" : ""} name="connect" value="2" text="Брошюровка на металлическую пружину" object={this}  />
      <Selector   chosen={this.state.width==180 ? "one" : ""} name="width" value="180" text="До 50 листов" object={this} />
      <Selector   chosen={this.state.width==240 ? "one" : ""} name="width" value="240" text="До 100 листов" object={this}  />
      <Selector   chosen={this.state.width==300 ? "one" : ""} name="width" value="300" text="До 200 листов" object={this} />
  
    </div>
    <h6>Ламинация</h6>
    <div className="selector">
      <Selector  chosen={this.state.plastic==0 ? "one" : ""} name="plastic" value="0" text="Не требуется" object={this} />
      <Selector   chosen={this.state.plastic==50 ? "one" : ""} name="plastic" value="50" text="С двух сторон А4" object={this} />
      <Selector   chosen={this.state.plastic==100 ? "one" : ""} name="plastic" value="100" text="С двух сторон А3" object={this} />
    </div>
    <h6>Количество</h6>
    <input type="text" name="" value={this.state.quant} onChange={this.handleChange} /><span>шт</span>
    <br />
    
   <InputSlider />
   
    <h6>

      <span>Итого: </span>
      {(this.state.quant) * (this.state.size)} руб.
       <button>Заказать</button>
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
