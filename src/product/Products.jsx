// import { useState } from 'react'
import  data  from '/data/products.json'

 function Product(){

    return (
        // <div>
        //    {
            data.map( (prd,i) => (
                <ul>
                    <li key={prd.id}>{prd.id}</li>
                    <li>{prd.nama}</li>
                    <li>{prd.harga}</li>
                </ul>
            ) )
        //    }
        // </div>
    )

}

export default Product