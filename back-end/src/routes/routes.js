const express = require("express")

const router = express.Router()

const axios = require("axios")
const { json } = require("express")



router.get("/search/:producto",async (req,res) => {

   const nombre = req.params.producto

   if(nombre ||nombre !=nombre){
      const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+nombre)
      /*   console.log(respuesta.data.results) */
        
      res.send(respuesta.data.results)
   }else{
      const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
      /*   console.log(respuesta.data.results) */
        
      res.send(respuesta.data.results)
   }

   



   router.get("/search/categoria/:categoria",async (req,res) => {

      const categoria = req.params.categoria
   
      if(categoria ||categoria !=categoria){
         const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?category="+categoria)
         /*   console.log(respuesta.data.results) */
           
         res.send(respuesta.data.results)
      }else{
         const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?category="+categoria)
         /*   console.log(respuesta.data.results) */
           
         res.send(respuesta.data.results)
      }



   })

   router.get("/search/condicion/:condicion",async (req,res) => {

      const condicion = req.params.condicion
   
      if(condicion ||condicion !=condicion){
         const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+condicion)
         /*   console.log(respuesta.data.results) */
           
         res.send(respuesta.data.results)
      }else{
         const respuesta =  await axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+condicion)
         /*   console.log(respuesta.data.results) */
           
         res.send(respuesta.data.results)
      }



   })





/*      const id = respuesta.data.results[0].id
     const title = respuesta.data.results[0].title
     const price = respuesta.data.results[0].price
     const currency_id = respuesta.data.results[0].currency_id
     const available_quantity = respuesta.data.results[0].available_quantity
     const thumbnail = respuesta.data.results[0].thumbnail
     const condition = respuesta.data.results[0].condition

     const producto1 = {
        id,
        title,
        price,
        currency_id,
        available_quantity,
        thumbnail,
        condition
     }


     
   
     const producto2 = {
        id:respuesta.data.results[1].id,
        title:respuesta.data.results[1].title,
        price:respuesta.data.results[1].price,
        currency_id:respuesta.data.results[1].currency_id,
        available_quantity:respuesta.data.results[1].available_quantity,
        thumbnail:respuesta.data.results[1].thumbnail,
        condition:respuesta.data.results[1].condition

     }

    const productos =[producto1,producto2]
    

    
     res.send(productos)
     console.log("MOSTRANDO EL PARAMETRO RECIBIDO",nombre)
                

     console.log("COMPLETO",respuesta.data.results) */
})


module.exports = router

