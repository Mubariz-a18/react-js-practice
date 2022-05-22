function ProductCard({car, onAddtoCart}) {
 
    const onClickAddToList = ()=>{
     onAddtoCart(car)
 }


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
   <div className="card-footer">{car.inStock ? 'instock': 'out of stock'}</div>
  <div> <button className="btn btn-danger btn-sm" onClick={onClickAddToList}>Add to list  <i className="fa fa-shopping-cart"></i></button>
  </div>
</div>
</div>  );
}

export default ProductCard;