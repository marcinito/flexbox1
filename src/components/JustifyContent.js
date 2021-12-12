import React,{useReducer,useEffect} from 'react'

const initialState={
    start:false,
    center:false,
    end:false,
    around:false,
    evenly:false,
    between:false,
}

const reducer=(state,action)=>{
    switch(action)
    {
case 'START':
    return{...state,start:!state.start,center:false,end:false,around:false,evenly:false,between:false}
    case 'CENTER':
        return{...state,start:false,center:!state.center,end:false,around:false,evenly:false,between:false}
        case 'END':
            return{...state,start:false,center:false,end:!state.end,around:false,evenly:false,between:false}
            case 'AROUND':
                return{...state,start:false,center:false,end:false,around:!state.around,evenly:false,between:false}
                case 'EVENLY':
                    return{...state,start:false,center:false,end:false,around:false,evenly:!state.evenly,between:false}
                    case 'BETWEEN':
                        return{...state,start:false,center:false,end:false,around:false,evenly:false,between:!state.between}
    }
   
    
}

function JustifyContent() {
    const [justify,dispatch]=useReducer(reducer,initialState)
    const justifycontent=()=>{
        if(justify.start==true){
            document.querySelector(".justify__example").classList.add("start")
        }
        else{
            document.querySelector(".justify__example").classList.remove("start")
        }
        if(justify.center==true){
            document.querySelector(".justify__example").classList.add("center")
        }
        else{
            document.querySelector(".justify__example").classList.remove("center")
        }
        if(justify.end==true){
            document.querySelector(".justify__example").classList.add("end")
        }
        else{
            document.querySelector(".justify__example").classList.remove("end")
        }
        if(justify.around==true){
            document.querySelector(".justify__example").classList.add("around")
        }
        else{
            document.querySelector(".justify__example").classList.remove("around")
        }
        if(justify.evenly==true){
            document.querySelector(".justify__example").classList.add("evenly")
        }
        else{
            document.querySelector(".justify__example").classList.remove("evenly")
        }
        if(justify.between==true){
            document.querySelector(".justify__example").classList.add("between")
        }
        else{
            document.querySelector(".justify__example").classList.remove("between")
        }
    }
useEffect(()=>{
justifycontent()
},[justify])

    console.log(justify)
    return (
        <div className="justify">
            <div className="justify__inputy">
                <label className="justify__inputy__label">justify-start
                <input className="justify__inputy__input" type="checkbox" checked={justify.start} onChange={()=>dispatch("START")}/>
                </label>
                <label className="justify__inputy__label">justify-center
                <input className="justify__inputy__input" type="checkbox" checked={justify.center} onChange={()=>dispatch("CENTER")}/>
                </label>
                <label className="justify__inputy__label">justify-end
                <input className="justify__inputy__input" type="checkbox" checked={justify.end} onChange={()=>dispatch("END")}/>
                </label>
                <label className="justify__inputy__label">justify-around
                <input className="justify__inputy__input" type="checkbox" checked={justify.around} onChange={()=>dispatch("AROUND")}/>
                </label>
                <label className="justify__inputy__label">justify-evenly
                <input className="justify__inputy__input" type="checkbox" checked={justify.evenly} onChange={()=>dispatch("EVENLY")}/>
                </label>
                <label className="justify__inputy__label">justify-between
                <input className="justify__inputy__input" type="checkbox" checked={justify.between} onChange={()=>dispatch("BETWEEN")}/>
                </label>
            </div>
            <div className="justify__example">
                <div className="justify__example__square">1</div>
                <div className="justify__example__square">2</div>
                <div className="justify__example__square">3</div>
                <div className="justify__example__square">4</div>
                <div className="justify__example__square">5</div>
            </div>
            
        </div>
    )
}

export default JustifyContent
