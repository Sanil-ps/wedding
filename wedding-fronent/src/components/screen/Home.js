import React, { useEffect, useState, useContext } from 'react'
//import { put } from '../../../../Server/routes/post'

import { UserContext } from '../../App'
import Service from './Service/Service'
import CompletedEvents from './Service/CompletedEvents'

const Home = ({role}) => {
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

    <h3>Browse by Differnd services</h3>
    <Service/>
    <h3>Happy customers</h3>
    <CompletedEvents/>
  

    </div>
    
  )
}

export default Home