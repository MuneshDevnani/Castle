import React,{useEffect,useState} from 'react'
import './Content.css'
import Star from "../../HomeContainers/HeaderBottom/Star";
function Index() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.restaurants);
        setData(myJson.restaurants.items)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <div className="container col-lg-8">
      <div className="heading">
        <h1>Circle Top Locations</h1>
        </div>
      {
       data && data.length>0 && data.map(item=>{
     return(
     <div className="card  mt-2">
        <div className="row">
          <div className="col">
            <img src={item.image} className="w-100" />
            <i class="fas fa-bookmark"></i>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">{item.title} <i class="fal fa-heart "></i></h4>
              <div className="rating">
               <Star /> 
              </div>
              <p className="rating1">98%</p>
              <p className="rating1"> 27 reviews</p>
              <p className="card-text">Mountains {item.mountainText}</p>
              <div className="person">
                {
                  item.personImages.map(img=>{
                    return <img src={img} alt="person" className="person-img"/>
                  })
                }
                    <p>&nbsp; +5 friends reccomended </p>
              </div>
              {/* <span className="dot"> </span> &nbsp;&nbsp; */}
              <p className="desc">Description</p>
              <p className="desc-text">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
      )
    })
  }
      </div>
      </div>
    
  )
}

export default Index
