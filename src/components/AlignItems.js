import React,{useReducer,useEffect} from 'react'

const initialState={
    stretch:false,
    start:false,
    end:false,
    center:false,
    baseline:false,
}
const reducer=(state,action)=>{
    switch(action){
        case 'ASTRETCH':
            return{...state,stretch:!state.stretch,start:false,end:false,center:false,baseline:false}
            case 'ASTART':
                return{...state,stretch:false,start:!state.start,end:false,center:false,baseline:false}
                case 'AEND':
                    return{...state,stretch:false,start:false,end:!state.end,center:false,baseline:false}
                    case 'ACENTER':
            return{...state,stretch:false,start:false,end:false,center:!state.center,baseline:false}    
            case 'ABASELINE':
                return{...state,stretch:false,start:false,end:false,center:false,baseline:!state.baseline}
                default:return state
    }
}
function AlignItems() {
    const [align,dispatch]=useReducer(reducer,initialState)


const alignitems=()=>{
    if(align.stretch==true){
        document.querySelector(".align__example").classList.add("astretch")
    }
    else{
        document.querySelector(".align__example").classList.remove("astretch")
    }
}

    useEffect(()=>{
alignitems()
    })
    return (
        <div className="align">
            <div className="align__inputy">
                <label className="align__inputy__label">align-stretch
                    <input className="align__inputy__input" type="checkbox" checked={align.stretch} onChange={()=>dispatch("ASTRETCH")}/>
                </label>
                <label className="align__inputy__label">align-start
                    <input className="align__inputy__input" type="checkbox" checked={align.start} onChange={()=>dispatch("ASTART")}/>
                </label>
                <label className="align__inputy__label">align-end
                    <input className="align__inputy__input" type="checkbox" checked={align.end} onChange={()=>dispatch("AEND")}/>
                </label>
                <label className="align__inputy__label">align-center
                    <input className="align__inputy__input" type="checkbox" checked={align.center} onChange={()=>dispatch("ACENTER")}/>
                </label>
                <label className="align__inputy__label">align-baseline
                    <input className="align__inputy__input" type="checkbox" checked={align.baseline} onChange={()=>dispatch("ABASELINE")}/>
                </label>
            </div>
            <div className="align__example">
                <div className="align__example__square">1</div>
                <div className="align__example__square">2</div>
                <div className="align__example__square">3</div>
                <div className="align__example__square">4</div>
                <div className="align__example__square">5</div>
            </div>
            
        </div>
    )
}

export default AlignItems
