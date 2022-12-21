import React,{ useState } from 'react';
import './main.css';


function Main() {
  const [price, setprice]=useState(0)
  const [ingredient, setIngredient] = useState(
  [ {name:'lettuce',value:0 ,price:30},
    {name:'bacon',value:0,price:20},
    {name:'cheese',value:0,price:10},
    {name:'meat',value:0,price:50}
  ]);

  function addingIngredient(ev,boolValue){
    const newState = ingredient?.map(obj => { 
      if (obj?.name === ev) {
        return boolValue ? {...obj, value: obj?.value+1} : {...obj, value: obj?.value-1} ;
      }
      return obj;
    });
    setIngredient(newState); 
    pricing() 
  } 

  function pricing( ){
    let totalPrice=0;
    ingredient.map(e=>(
      totalPrice=e.value * e.price + totalPrice
    )
    
    )
   
    setprice(totalPrice)
  
    // setprice(price+1)
    // ingredient.map(obj => {
      

    // })
  }

 
  return (
   <>
<div className='main'>
      <div className='u-burger'>
           
      </div>
      {
        ingredient[0].value === 0 & ingredient[1].value === 0 & ingredient[2].value === 0 & ingredient[3].value === 0 ?
        <div className='ingredients'>
            <h1>No Ingredients Added</h1>
      </div>:null
      }
       <>
      {new Array(ingredient[0].value).fill().map((e,index)=>
          <div className="BurgerIngredient__Lettuce__zoLnB" key={index}>
          </div>
          )}
         { new Array(ingredient[1].value).fill().map((e,index)=>
          <div className="BurgerIngredient__Bacon__2RZZH" key={index}>
          </div>
          )}
          { new Array(ingredient[2].value).fill().map((e,index)=>
          <div className="BurgerIngredient__Cheese__1eqwP" key={index}>
          </div>
          )}
          { new Array(ingredient[3].value).fill().map((e,index)=>
          <div className="BurgerIngredient__Meat__1LdrR" key={index}>
          </div>
          )}
          </>
        <div className='d-burger'>
        </div>
</div>
<div className='Result'>
    <div className='price'>
      <h3> current price</h3>
      <p>${price}</p>
    </div>

    <div className='lettuce'>
      <a>Lettuce </a>
      <button className='less' onClick={()=> addingIngredient('lettuce',false)}>Less</button>
      <button className='less' onClick={()=> addingIngredient('lettuce',true)}>More</button>
    </div>

    <div className='lettuce'>
      <a>Bacon</a>
      <button className='less' onClick={()=> addingIngredient('bacon',false)} >Less</button>
      <button className='less' onClick={()=> addingIngredient('bacon',true)}>More</button>
    </div>

    <div className='lettuce'>
      <a>Cheese</a>
      <button className='less' onClick={()=> addingIngredient('cheese',false)}>Less</button>
      <button className='less' onClick={()=> addingIngredient('cheese',true)}>More</button>
    </div>

    <div className='lettuce'>
      <a>Meat</a>
      <button className='less' onClick={()=> addingIngredient ('meat',false)}>Less</button>
      <button className='less' onClick={()=> addingIngredient('meat',true)}>More</button>
    </div>

    <div className='signup'>
      <a href='/login '>Signup to order</a>
    </div>

</div>
</>
    
  )
}

export default Main