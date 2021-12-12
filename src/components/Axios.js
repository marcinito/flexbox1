import React,{useEffect,useState} from 'react'

function Axios() {
    const [dane,setDane]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch("https://randomuser.me/api/?results=50")
        .then(res=>res.json())
        .then(json=>{
            setDane(json.results)
            setLoading(false)
        })
    },[])
    // if(loading){
    //     return <h1>Loading...</h1>
    // }
    const users=dane.map(el=>(
        <div className="uzytkownik">
            Nazwa użytkownika
<h5 style={{color:"darkblue",fontWeight:"bold",fontSize:"20px"}}>{el.name.title} {el.name.first} {el.name.last}</h5>
Adres e-mail
<p style={{fontSize:"18px",color:"green"}}>{el.email}</p>
<img style={{width:"100px"}} src={el.picture.thumbnail} ale="zdj"/>
        </div>
        
    ))
    
    return (
        <div className="uzytkownicy">
            {users}
        </div>
    )
}

export default Axios
