import React from 'react';
import moment from "moment";
import './App.css';

function App() {

  const fn = (data: moment.Moment[]):number => {
    let counter = 0
   
    data.reduce((acc: moment.Moment, item: moment.Moment) => {
      const newDate = acc.add(1, 'day')
      
        if(data[data.length-1].dayOfYear() === moment().dayOfYear() && newDate.isSame(item)){ 
          counter++
        }else{
          counter = 0
        }
          return item
      })
      if(counter === 0){
        counter--
      }

      return counter+1
   }
  
    const res = fn([
      moment("1991-11-08"),
      moment("1991-11-01"),
      moment("1991-11-02"),
      moment("1991-11-03"),
      moment("2001-02-11"),
      ////////
      moment("2021-04-08"),
      // moment("2021-04-09"),
      // moment("2021-04-10"),
      // moment("2021-04-11"),
      // moment("2021-04-12"),
      // moment("2021-04-13"),
      // moment("2021-04-14"),
      // moment("2021-04-15"),
      // moment("2021-04-16"),
      // moment("2021-04-17"),
      // moment("2021-04-18"),
      // moment("2021-04-19"),
      // moment("2012-03-04"),
    ]);
    console.log("res", res);






  return (
    <div className="App">
        Hello
    </div>
  );
}

export default App;
