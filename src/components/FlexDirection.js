import React,{useEffect,useReducer} from 'react'

const initialState={
    row:false,
    rowreverse:false,
    column:false,
    columnreverse:false,
}

const reducer=(state,action)=>{
    switch(action){
case 'ROW':
    return {...state,row:!state.row,rowreverse:false,column:false,columnreverse:false}
    case 'RR':
    return {...state,row:false,rowreverse:!state.rowreverse,column:false,columnreverse:false}
    case 'COLUMN':
    return {...state,row:false,rowreverse:false,column:!state.column,columnreverse:false}
    case 'COLUMNR':
        return {...state,row:false,rowreverse:false,column:false,columnreverse:!state.columnreverse}
    }
    }
    


function FlexDirection() {
    const [direction,dispatch]=useReducer(reducer,initialState)
    console.log(direction)

const flexdirection=()=>{
    if(direction.row==true){
        document.querySelector(".direction__square").classList.add("row")
    }
    else{
        document.querySelector(".direction__square").classList.remove("row")
    }
    if(direction.rowreverse==true){
        document.querySelector(".direction__square").classList.add("rowreverse")
    }
    else{
        document.querySelector(".direction__square").classList.remove("rowreverse")
    }
    if(direction.column==true){
        document.querySelector(".direction__square").classList.add("column")
    }
    else{
        document.querySelector(".direction__square").classList.remove("column")
    }
    if(direction.columnreverse==true){
        document.querySelector(".direction__square").classList.add("columnreverse")
    }
    else{
        document.querySelector(".direction__square").classList.remove("columnreverse")
    }
}

    useEffect(()=>{
flexdirection()
    },[direction])
    return (
        <div className="direction">
            <div className="direction__inputy">
                <label className="direction__inputy__label">row
                <input className="direction__inputy__input" type="checkbox" checked={direction.row} onChange={()=>dispatch("ROW")}/>
                </label>
                <label className="direction__inputy__label">row-reverse
                <input className="direction__inputy__input" type="checkbox" checked={direction.rowreverse} onChange={()=>dispatch("RR")}/>
                </label>
                <label className="direction__inputy__label">column
                <input className="direction__inputy__input" type="checkbox" checked={direction.column} onChange={()=>dispatch("COLUMN")}/>
                </label>
                <label className="direction__inputy__label">column-reverse
                <input className="direction__inputy__input" type="checkbox" checked={direction.columnreverse} onChange={()=>dispatch("COLUMNR")}/>
                </label>
                
                
            </div>
            <div className="direction__square">
                <div className="direction__square__box">1</div>
                <div className="direction__square__box">2</div>
                <div className="direction__square__box">3</div>
                <div className="direction__square__box">4</div>
                <div className="direction__square__box">5</div>
               

            </div>
          
        </div>
    )
}

export default FlexDirection
