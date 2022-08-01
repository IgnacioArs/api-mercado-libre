import {React,Fragment, useState, useEffect} from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'
import axios from 'axios'
const Productos = () => {
/*  window.location.reload() */
   
    const [producto,setProducto] = useState("");
    const [categoria,setCategoria] = useState("")
    const [condicion,setCondicion] =useState("")

    const [productos,setProductos] = useState();
    const [productosCategoria,setproductosCategoria] = useState();
    const [productosCondicion,setproductosCondicion] = useState();

    const condicionProducto = "new"




const buscarCondicion = async() => {
    await axios.get('http://localhost:4000/api/search/condicion/'+condicion)
    console.log("buscando la categoria",condicion)
}

const condiciones = async () => {
    const data = await axios.get('http://localhost:4000/api/search/condicion/'+condicion)
    setproductosCondicion(data.data)
     console.log("categoria obtenidas",data)
}

/* 

******************************************************************************************** */

const buscarCategoria = async () => {
/*     window.location.reload() */
    await axios.get('http://localhost:4000/api/search/categoria/'+categoria)
    console.log("buscando la categoria",categoria)
 
    
    
}

const categorias = async() => {
   const data = await axios.get('http://localhost:4000/api/search/categoria/'+categoria)
   setproductosCategoria(data.data)
    console.log("categoria obtenidas",data)
}

/* ********************************************************************************************** */


const Buscar = async () => {
   /*  window.location.reload() */
 await axios.get('http://localhost:4000/api/search/categoria/'+producto)
  
    
}

const Productos = async () => {

const  data = await axios.get('http://localhost:4000/api/search/'+producto)
setProductos(data.data)
 console.log("productos obtenidos",productos)
}


useEffect(()=> {
/* Buscar() */
if(producto){
    Productos()
    categorias([])
}else if(categoria){
    Productos([])
    categorias()
}else if(condicion){
 /*    Productos([])
    categorias([]) */
    condiciones()
}
})










  return (
                <div className='container'>
                            <div className='col-md-12'>
                            <h1>Buscas algun producto?</h1>
                            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                            <i class="fas fa-search" aria-hidden="true"></i>
                            {condicion?(<input class="form-control form-control-sm ml-3 w-75"  type="text" onChange={(evento) => {setProducto(evento.target.value)}} value={condicion} placeholder="¿Necesitas realizar alguna busqueda?"
                                aria-label="Search"></input>):(<input class="form-control form-control-sm ml-3 w-75"  type="text" onChange={(evento) => {setProducto(evento.target.value)}} placeholder="¿Necesitas realizar alguna busqueda?"
                                aria-label="Search"></input>)}
                                <button type="button" className="btn btn-success" onClick={()=>Buscar()}>Buscar</button>
                            </form>
                             
            <div classNameName="form-group ">
               {/*  <p>{{!-- {{estado.id_estado}} --}}</p> */}
                     <select className="alert alert-dark" name="estado" id="estado" onChange={(evento) => {setCategoria(evento.target.value)}} required>
                         
                                        <option  className="alert alert-danger" /* value="1" */>Seleccionar Categoria</option>
                                        <option className="alert alert-success" value="MLA433684">Jugetes</option>
                                        <option className="alert alert-success" value="MLA82085">Iphone</option>
                                        <option className="alert alert-success" value="MLA109027">Zapatillas</option>
                                        <option className="alert alert-success" value="MLA1744">Auto Moviles</option>
                                        </select>
                              
            </div>
            <button className="btn btn-success btn-block"  onClick={() => buscarCategoria()}>
                    Buscar categoria
                </button>

                <div className='container'>
                <div classNameName="form-group ">
               {/*  <p>{{!-- {{estado.id_estado}} --}}</p> */}
                     <select className="alert alert-dark" name="estado" id="estado" onChange={(evento) => {setCondicion(evento.target.value)}} required>
                         
                                        <option  className="alert alert-danger" >Seleccionar Condicion</option>
                                        <option className="alert alert-success" value="auto nuevo">auto nuevos</option>
                                        <option className="alert alert-success" value="auto usado">autos usados</option>
                                        <option className="alert alert-success" value="jugete usado">jugetes usados</option>
                                        <option className="alert alert-success" value="jugete nuevo">jugetes nuevos</option>
                                        <option className="alert alert-success" value="tablet nuevo">tablets nuevos</option>
                                        <option className="alert alert-success" value="tablet usado">tablets usado</option>
                                        <option className="alert alert-success" value="iphone nuevo">iphone nuevo</option>
                                        <option className="alert alert-success" value="iphone usado">iphone usado</option>
                                        </select>
                              
            </div>
            <button className="btn btn-success btn-block"  onClick={() => buscarCondicion()}>
                    Buscar Condicion
                </button>
                </div>
                            </div>
                          {productos? (<div className="row">
{
    productos.map(produc => (
        <div className="col-md-4 p-2" key={produc.id}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>{produc.title}</h5>
                   {/*   <Link to={"/edit/" + produc._id} className="btn btn-secondary">
                        <i className="material-icons">
                            border_color</i>
                    </Link> */} 
                </div>
                
                <div className="card-body">
                <img src={produc.thumbnail} alt="" style={{width:200,height:250}} />
                    <p>
                         Precio: {produc.price}$
                    </p>
                    <p>
                        Divisa_id:  {produc.currency_id}
                    </p>
                    <p>
                        Cantidad_disponible:{produc.available_quantity}
                    </p>
                    <p>
                        Condicion: {produc.condition===condicionProducto? (<p>Nuevo</p>):(<p>Usado</p>)}
                    </p>
                    <p>
                        Categoria:{produc.category_id}
                    </p>
                    
                </div>
                <div className="card-footer">
                   
                </div>
            </div>
        </div>
    ))
}


</div>   ):(<div class="alert alert-danger" role="alert">
  Busqueda de algun producto
</div>)}      

{productosCategoria? (<div className="row">
{
    productosCategoria.map(produc => (
        <div className="col-md-4 p-2" key={produc.id}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>{produc.title}</h5>
                   {/*   <Link to={"/edit/" + produc._id} className="btn btn-secondary">
                        <i className="material-icons">
                            border_color</i>
                    </Link> */} 
                </div>
                
                <div className="card-body">
                <img src={produc.thumbnail} alt="" style={{width:200,height:250}} />
                    <p>
                         Precio: {produc.price}$
                    </p>
                    <p>
                        Divisa_id:  {produc.currency_id}
                    </p>
                    <p>
                        Cantidad_disponible:{produc.available_quantity}
                    </p>
                    <p>
                        Condicion: {produc.condition===condicionProducto? (<p>Nuevo</p>):(<p>Usado</p>)}
                    </p>
                    <p>
                    Categoria:{produc.category_id}
                    </p>
                </div>
                <div className="card-footer">
                   
                </div>
            </div>
        </div>
    ))
}



</div>   ):(<div class="alert alert-danger" role="alert">
  Filtre algun busqueda
</div>)}



{productosCondicion? (<div className="row">
{
    productosCondicion.map(produc => (
        <div className="col-md-4 p-2" key={produc.id}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>{produc.title}</h5>
                   {/*   <Link to={"/edit/" + produc._id} className="btn btn-secondary">
                        <i className="material-icons">
                            border_color</i>
                    </Link> */} 
                </div>
                
                <div className="card-body">
                <img src={produc.thumbnail} alt="" style={{width:200,height:250}} />
                    <p>
                         Precio: {produc.price}$
                    </p>
                    <p>
                        Divisa_id:  {produc.currency_id}
                    </p>
                    <p>
                        Cantidad_disponible:{produc.available_quantity}
                    </p>
                    <p>
                        Condicion: {produc.condition===condicionProducto? (<p>Nuevo</p>):(<p>Usado</p>)}
                    </p>
                    <p>
                    Categoria:{produc.category_id}
                    </p>
                </div>
                <div className="card-footer">
                   
                </div>
            </div>
        </div>
    ))
}



</div>   ):(<div class="alert alert-danger" role="alert">
  Filtre Condicion
</div>)}







                </div>








  )
}

export default Productos