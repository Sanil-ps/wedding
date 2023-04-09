
const CompletedEvents = () => {
  return (
    // <div style={{padding:"20px"}}>
    //   <div className="card" style={{width:"300px",backgroundColor:'red'}}>
    //     <div className="card-image waves-effect waves-block waves-light">
    //       <img className="activator" src="images/office.jpg" alt="" />
    //     </div>
    //     <div className="card-content">
    //       <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
    //       <p><a href="#">This is a link</a></p>
    //     </div>
    //     <div className="card-reveal">
    //       <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    //       <p>Here is some more information about this product that is only revealed once clicked on.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="w3-row-padding w3-grayscale">
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
        <img src="https://www.w3schools.com/w3images/team3.jpg" 
        alt="John" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>John Doe</h3>
          <p className="w3-opacity">Kochi</p>
          <p>! From start to fish she was their assisting me and taking care of all my crazy requests. The set up of tables, chairs, cocktail hour etc was executed perfectly. I received several great comments from friends and family on how beautiful everything was. I was not a worried bride that day because of you!! Thank you again!.</p>
        </div>
      </div>
    </div>
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
        <img src="https://www.w3schools.com/w3images/team2.jpg" 
        alt="Jane" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>Jane Doe</h3>
          <p className="w3-opacity">Kollam</p>
          <p>Awesome experience I would hire Jo again in a heartbeat. My wedding day was perfect she is so patient and organized would recommend her to anyone looking to enjoy a stress free wedding.</p>
        </div>
      </div>
    </div>
    <div className="w3-col m4 w3-margin-bottom">
      <div className="w3-light-grey">
      <i className="glyphicon glyphicon-user"></i>
        <img src="https://www.w3schools.com/w3images/team1.jpg"
         alt="Mike" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>Mike Ross</h3>
          <p className="w3-opacity">Goa</p>
          <p>It is amazing! if your stressed out about anything, just call her right away and she'll take care of it! anything i saw on pinterest and really wanted, she searched for it and found us the best options! Shes very organized and punctual!.</p>
          <i className="glyphicon glyphicon-thumbs-up"> 22</i>
          <h3> </h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </div>
    </div>
  </div>

  )
}
export default CompletedEvents;