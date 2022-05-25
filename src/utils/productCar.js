import IfElse from "./IfElse";

function ProductCard({car, onAddtoCart}) {
 
    const onClickAddToList = ()=>{
     onAddtoCart(car)
 }
//  const AddToListBtn = ({car,onClickAddToList})=>{
//      return <div  className="card-footer">
//      {car.inStock? <button disabled={!car.inStock} className="btn btn-danger btn-sm" onClick={onClickAddToList}>Add to list <i className="fa fa-shopping-cart"></i></button>
//   :null}
// </div>
//  }

    return (<div className="col-md-3">
    <div  className="card ">
   <img className="card-img-top"
       src={
           car.image
   }></img>
   <div className="card-body">
       <h4 className="card-title">{car.name}</h4>
       <b>Top Speed : {car.speed} kmph</b>
   </div>
  {/* <AddToListBtn car = {car} onClickAddToList = {onClickAddToList}/> */}
  <div  className="card-footer">
      <IfElse cond = {car.inStock}>
      <button  className="btn btn-danger btn-sm" onClick={onClickAddToList}>Add to list 
      <i className="fa fa-shopping-cart"></i></button>
      <button  className="btn btn-danger" onClick={onClickAddToList}>Notify
      <i className="fa fa-bell"></i></button>
      </IfElse> 
    
</div>
</div>
</div>  );
}

export default ProductCard;