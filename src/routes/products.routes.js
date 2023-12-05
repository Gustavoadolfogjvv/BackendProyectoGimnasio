import { Router } from "express";
import { deleteProduct, updateProduct, createProduct, getOne, showProducts } from "../controllers/products.controllers";
// import productController from "../controllers/products.controller";

const router = Router();

router
    .route('/products')
    //.get(productController.showProducts);
    .get(showProducts)
    .post(createProduct);

router
    .route('/products/:id')
    .get(getOne)
    .put(updateProduct)
    .delete(deleteProduct)



export default router;
