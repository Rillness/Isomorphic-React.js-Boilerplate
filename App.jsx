var React = require('react');
var ScreamButton = require('./Components/Button.jsx');

//Create the main React component.
var App = React.createClass({

//This does something when the button is clicked.
  doSomething : function(){
    alert('If this buttons working, that means React is on the Server, AND the Client.');
  },

//Create the inner function to loop an array.
  loopData : function(name,i){
      return(
        <li key={i}>{name}</li>
      )
  },

  //Render everything at the end.
  render : function(){

    return(

      <html>

          <head>

            <title>Serverside React</title>
            <link rel="stylesheet" href="/style.css" />

          </head>

          <body>
    <div>
          <h2>Do you see this tag? If so that means React is on the server. </h2>
          <h3></h3>
            <button onClick={this.doSomething}> Hello!</button>

    <br/>

          {/* Here is a button we imported from components. */}
            <ScreamButton name='LALALALLAL'/>

    <br/>

    <ul>

{/* Below is the way you loop the data in an array.*/}
   {this.props.data.map(this.loopData)}

    </ul>

    </div>


{/*This is what defines the inner html so you can use props*/}
    <script dangerouslySetInnerHTML={{
        __html : 'window.PROPS=' + JSON.stringify(this.props)
    }}/>

    {/*The bundle.js script tag.*/}
          <script src='/bundle.js' />
          </body>

          </html>

    )
  }


});

//Export the whole component.
module.exports = App;
