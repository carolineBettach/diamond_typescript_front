import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectDiamonds, selectUpdate, getDiamondsAsync, addDiamondAsync, delDiamondAsync,updDiamondAsync} from './diamondSlice';

const Diamond = () => {
  const diamonds = useAppSelector(selectDiamonds);
  const diamondUpdate = useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [carat, setcarat] = useState(0)
  const [cut, setcut] = useState("")
  const [color, setcolor] = useState("")
  const [clarity, setclarity] = useState("")
  const [depth, setdepth] = useState(0)
  const [table, settable] = useState(0)
  const [price, setprice] = useState(0)
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  const [z, setz] = useState(0)
  const s = require('../../bootstrap.css');

  useEffect(() => {
    console.table(diamonds)
  }, [diamonds])



  useEffect(() => {
    dispatch(getDiamondsAsync())
  }, [diamondUpdate])


  return (
    <div>
      <h1 style={{color:"rgb(1, 107, 157)"}} >Add/update diamond </h1>
      <div className="row" style={{width:"50%",margin: "0 auto"}}>
                <div className="col" style={{marginBottom:"10px"}} ><b>carat</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => setcarat(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>cut</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input onChange={(e) => setcut(e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>color</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input onChange={(e) => setcolor(e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>clarity</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input onChange={(e) => setclarity(e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>depth</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => setdepth(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>table</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => settable(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>price</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => setprice(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>x</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => setx(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>y</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => sety(+e.target.value)}/></div>
                <div className="w-100"></div>
                <div className="col" style={{marginBottom:"10px"}} ><b>z</b></div>
                <div className="col" style={{marginBottom:"10px"}} ><input type="number" onChange={(e) => setz(+e.target.value)}/></div>
                <button className="btn btn-primary"style={{width:"50%",margin: "0 auto"}} onClick={() => dispatch(addDiamondAsync({carat, cut, color, clarity, depth, table, price, x, y, z }))}>Add diamond</button> 
      </div>
     
      <hr />
      <h1 style={{color:"rgb(1, 107, 157)"}}>Diamond List</h1>
      <div id="cardDiv "  className="row row-cols-1 row-cols-md-3 g-4 ">
      {diamonds.map((dia, i) =>
        <div key={i} className="col">
          <div className="card h-100 text-left">
            <div className="card-header" style={{backgroundColor: "#016B9D",color: "white", fontWeight: "bold"}}>
            ID:{dia.ID}
            </div>
            <div className="card-body" style={{backgroundColor: "#EBEBEB"}}>
            <div className="row">
                <div className="col"><b>carat</b></div>
                <div className="col">{dia.carat}</div>
                <div className="w-100"></div>
                <div className="col"><b>cut</b></div>
                <div className="col">{dia.cut}</div>
                <div className="w-100"></div>
                <div className="col"><b>color</b></div>
                <div className="col">{dia.color}</div>
                <div className="w-100"></div>
                <div className="col"><b>clarity</b></div>
                <div className="col">{dia.clarity}</div>
                <div className="w-100"></div>
                <div className="col"><b>depth</b></div>
                <div className="col">{dia.depth}</div>
                <div className="w-100"></div>
                <div className="col"><b>table</b></div>
                <div className="col">{dia.table}</div>
                <div className="w-100"></div>
                <div className="col"><b>price</b></div>
                <div className="col">{dia.price}</div>
                <div className="w-100"></div>
                <div className="col"><b>x</b></div>
                <div className="col">{dia.x}</div>
                <div className="w-100"></div>
                <div className="col"><b>y</b></div>
                <div className="col">{dia.y}</div>
                <div className="w-100"></div>
                <div className="col"><b>z</b></div>
                <div className="col">{dia.z}</div>
            </div>
            <button className="btn btn-primary" onClick={() => dispatch(updDiamondAsync({ID:dia.ID,carat, cut, color, clarity, depth, table, price, x, y, z}))}>Update</button>
            &nbsp;&nbsp;
             <button className="btn btn-primary" onClick={() => dispatch(delDiamondAsync(dia.ID))}>Delete</button>
                  
                
            </div>
        </div>
      </div>)}
     
       </div>

 
      




    </div>
  )
}

export default Diamond
                  
 
      