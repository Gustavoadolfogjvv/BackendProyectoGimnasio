/*const productController = { }

productController.showProducts = (req, res) => {
    res.send('Esto es una prueba de un get desde mi backend');
}

export default productController;
*/
const showProducts = (req, res) => {
    res.send('Esto es una prueba de un get desde mi backend');
}

const getOne = (req, res) => {
    res.send('El producto desde mi backend');
}

const createProduct = (req, res) => {
    res.send('El producto de mi backend');
}

const updateProduct = (req, res) => {
    res.send('El producto se actualizo de mi backend');
}

const deleteProduct = (req, res) => {
    res.send('Se boroo el producto de mi backend');
}

export { showProducts, getOne, createProduct, updateProduct, deleteProduct }
