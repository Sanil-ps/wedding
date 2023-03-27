import React, { useEffect, useState, useContext } from 'react'
//import { put } from '../../../../Server/routes/post'

import { UserContext } from '../../App'

const Home = () => {
  const [data, setData] = useState([])
  const { state, dispatch } = useContext(UserContext)
  // useEffect(() => {
  //   fetch('/allpost', {
  //     headers: {
  //       "Authorization": "Bearer " + localStorage.getItem("jwt")
  //     }
  //   }).then(res => res.json())
  //     .then(result => {
  //       if(!result){
  //         setData([])
  //         return result
  //       }
  //       console.log("data :", result);
  //       setData(result.posts)
  //     })
  // }, [])


//   const likePost = (id) => {
//     fetch('/like', {
//       method: 'put',
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + localStorage.getItem('jwt')
//       },
//       body: JSON.stringify({
//         postId: id
//       })
//     }).then(res => res.json())
//       .then(result => {
//         const newData = data.map(item => {
//           if (item._id === result._id) {
//             return result
//           } else {
//             return item
//           }
//         })
//        setData(newData) 
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
//   const unlikePost = (id) => {
//     fetch('/unlike', {
//       method: 'put',
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + localStorage.getItem('jwt')
//       },
//       body: JSON.stringify({
//         postId: id
//       })
//     }).then(res => res.json())
//       .then(result => {
//         console.log(result);
//         const newData = data.map(item => {
//           if (item._id === result._id) {
//             return result
//           } else {
//             return item
//           }
//         })
//         setData(newData)
//       }).catch(err => {
//         console.log(err);
//       })
//   }

//   const makeComment = (text, postId) => {
//     fetch('/comment', {
//       method: "put",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + localStorage.getItem("jwt")
//       },
//       body: JSON.stringify({
//         postId,
//         text
//       })
//     }).then(res => res.json())
//       .then(result => {
//         console.log(result);
//         const newData = data.map(item => {
//           if (item._id === result._id) {
//             return result
//           } else {
//             return item
//           }
//         })
//         setData(newData)
//       }).catch(err => console.log(err))
//   }
//   const deletePost = (postId) => {
//     fetch(`/deletePost/${postId}`, {
//       method: 'delete',
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem('jwt')
//       }
//     }).then(res => res.json() )
//       .then(result => {
//         console.log("del",result)
        
//         const newData = data.filter(item => {
//           return item._id !== result._id
//         })

//           setData(newData) 

//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// const deleteComment = (postId)=>{

//   fetch(`/deletetext/${postId}`,{
//     method:"delete",
//     headers:{
//       Authorization:"Bearer "+ localStorage.getItem('jwt')
//     }
//   }).then(res=> res.json())
//   .then(result => {
//     console.log(result.text)
//   })
// }
  return (
    <div className='home'>     
      
      {/* { 
        data.map(item => {
          return (
            <div className="card home-card" key={item._id} >
              <h5>{item.postedby.name}
                {
                  item.postedby._id === state
                                    &&
                  <i className="material-icons" style={{ float: 'right' ,cursor:"pointer"}}
                    onClick={() => deletePost(item._id)} >delete</i>
                }
              </h5>
              <div className="card-image">
                <img src={item.photo} alt="flower" />
              </div>
              <div className="card-content">
                <h6>{item.title}</h6>
                <p>{item.body} </p>
                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                {

                  item.likes.includes(state)

                    ? <i className="material-icons like"
                      onClick={() => { unlikePost(item._id); console.log(state._id) }}>thumb_down</i>

                    : <i className="material-icons like"
                      onClick={() => { likePost(item._id); console.log(state) }}>thumb_up</i>
                }
                <i onClick={dispatch({ status: 'false' })} ></i>
                <h6>{item.likes.length}</h6>
                {
                  item.comments.length > 0 ?
                    item.comments.map(record => {
                      return (                        
                        <div>
                        <h6 key={record._id}><span style={{ fontWeight: "500" }}>{record.postedby.name} </span> {record.text}  </h6>
                        <span>
               <i className="material-icons" style={{ float: 'right' ,cursor:"pointer"}}
               onClick={() => deleteComment(record._id)} >delete</i></span> </div>
                      )
                    })
                    :
                    <p></p>
                }

                <form onSubmit={(e) => { 
                  e.preventDefault()
                  makeComment(e.target[0].value, item._id);
                }}>
                  <input type="text" placeholder="add a comment" />
                </form>
              </div>
            </div>
          )
        })
      } */}


      <div className="w3-panel">
        <h1><b>CUSTOMER</b></h1>
        <p></p>
      </div>
      <div className="w3-container">
    <div className="w3-display-container mySlides">
      <img src="https://impresario.co.in/wp-content/uploads/2018/11/LMP09265-1-scaled.jpg" style={{width:"100%"}} />
      <div style={{maxWidth: "900px", margin: "0 auto",   textAlign: "center",position: "absolute" ,top:'140px',left:'210px'}}>
        <div style={{fontSize: "4.615rem", lineHeight: '1.4', fontWeight: "700", color: "#FFFFFF", marginBottom: "30px",}}>
        Events with Style & Strategy</div>
    </div>
    </div>
    </div>
    
    {/* grid */}
    <div class="w3-row w3-container">
      <div class="w3-center w3-padding-64">
        <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
      </div>
      <div class="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
        <h3>Eentartainment Planning</h3>
        <p>Artist Liaison & Management, Celebrity Liaison, Artist Contracts, Entertainment Scripting..</p>
      </div>

      <div class="w3-col l3 m6 w3-grey w3-container w3-padding-16">
        <h3>Branding</h3>
        <p>We are a team of passionate experts who will plan, design and organise your programs through our creative and exclusive concepts in accordance with your needs.</p>
      </div>

      <div class="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
        <h3>Consultation</h3>
        <p>With a comprehensive range of services and professionals available at your fingertips.</p>
      </div>

      <div class="w3-col l3 m6 w3-black w3-container w3-padding-16">
        <h3>Promises</h3>
        <p>Find the perfect service providers for their needs and for service providers to connect with potential clients and expand their businesses.</p>
      </div>
    </div>
   {/* grid */}

   <div class="w3-row-padding" id="plans">
    <div class="w3-center w3-padding-64">
      <h3>Choose categorey</h3>
      <p>Choose a categorey that fits your needs.</p>
    </div>

    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow"  style={{backgroundImage:"url("+"https://lh3.googleusercontent.com/dhI5NmY6-Ysnk87zxpGKWbTkq5dPQ8nrMol_tdMPFWBFD08WryRTcd4YalWcyrsBeRrMXKUvM9Fg-PWAwvipIU262hwTrQBNmOuM2AFqUSfRrKNOE2fBk__WXq4ahBU5F699EtCXFDQK55HK71ZbZFU"+")", backgroundSize: "450px 300px",backgroundRepeat: "no-repeat"}}>
        <li class="w3-padding-16"></li>
        <li class=" w3-xlarge w3-padding-32">Entertainment</li>
        <li class=" w3-padding-24">
          <button class="w3-button w3-green w3-padding-large">Connect</button>
        </li>
      </ul>
    </div>

    <div class="w3-third w3-margin-bottom" >
      <ul class="w3-ul w3-border w3-center w3-hover-shadow" style={{backgroundImage:"url(" +'https://media.weddingz.in/images/20200416115538/Aash-Studio-2-800x534.jpg'+ ")"}}>
        <li class="w3-padding-16"></li>
         <li class=" w3-xlarge w3-padding-32">Stage</li>
        <li class=" w3-padding-24">
          <button class="w3-button w3-green w3-padding-large">Connect</button>
        </li>
      </ul>
    </div>

    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow" style={{backgroundImage:"url(" +"https://impresario.co.in/wp-content/uploads/2018/11/chuttersnap-aEnH4hJ_Mrs-unsplash-1920x1100.jpg"+ ")", backgroundSize: "450px 300px",backgroundRepeat: "no-repeat"}}>
       <li class="w3-padding-16"></li>
        <li class="w3-xlarge w3-padding-32">Food</li>
        <li class=" w3-padding-24">
          <button class="w3-button w3-green w3-padding-large">Connect</button>
        </li>
      </ul>
    </div>
  </div>


  {/* <!-- Contact --> */}
  <div class="w3-padding-24" style={{width: "800px", position: "absolute", left: "270px"}}>
  <div className="w3-center w3-padding-64" id="contact">
    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</span>
  </div>

  <form className="w3-container" action="/action_page.php" target="_blank">
    <div className="w3-section">
      <label>Name</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:"100%"}} type="text" name="Name" required />
    </div>
    <div className="w3-section">
      <label>Email</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:"100%"}} type="text" name="Email" required />
    </div>
    <div className="w3-section">
      <label>Subject</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:"100%"}} name="Subject" required />
    </div>
    <div className="w3-section">
      <label>Message</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:"100%"}} name="Message" required />
    </div>
    <button type="submit" className="w3-button w3-block w3-black">Send</button>
  </form>
  </div>
  

    </div>
    
  )
}

export default Home