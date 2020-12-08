module.exports={
    create:(req,res)=>{
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product([name,description,price,image_url]).then(product=>res.status(200).send(product)).catch(e=>res.status(500).send(e))
    },
    getOne:(req,res)=>{
        const db = req.app.get('db')
        const {product_id} = req.params
        db.read_product([product_id]).then(product=>res.status(200).send(product)).catch(e=>res.status(500).send(e))
    },
    getAll:(req,res)=>{
        const db = req.app.get('db')       
        db.read_products().then(products=>res.status(200).send(products)).catch(e=>res.status(500).send(e))
        
    },
    update:(req,res)=>{
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        const {product_id} = req.params
        db.update_product([req.query.desc,product_id]).then(product=>res.status(200).send(product)).catch(e=>res.status(500).send(e))
    },
    delete:(req,res)=>{
        const db = req.app.get('db')
        const {product_id} = req.params
        db.delete_product([product_id]).then(product=>res.sendStatus(200)).catch(e=>res.status(500).send(e))
    }   
}