import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const AllLegislatorsProp=React.createClass({

  render: function(){
    console.log(this.props.myLegislators)
    return (
      <div>
      {this.props.myLegislators.map(function(singleCong, i){
        return <SingleLegislator listofLegs={singleCong} index={i} key={i}/>
      })}
      </div>

    )
  }
})

const SingleLegislator=React.createClass({


  render: function(){
    console.log(this.props.listofLegs)

    let legList=this.props.listofLegs
    return (
      <div className="one-person">
        <div className="leg-heading">
          <h3>{legList.first_name} {legList.last_name}</h3>
          <h4>{legList.title} {legList.party}</h4>
        </div>

        <ul className="list">
          <li>email: {legList.oc_email}</li>
          <li>website: {legList.website}</li>
          <li>facebook: {legList.facebook_id}</li>
          <li>twitter: {legList.twitter_id}</li>
        </ul>

        <div className="footer">
          <h7>Term End: {legList.term_end}</h7>
        </div>
      </div>

    )
  }
})






$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  console.log(serverRes.results)
  ReactDOM.render(
    <AllLegislatorsProp myLegislators={serverRes.results}/> ,
    document.querySelector('#app-container'));
})
