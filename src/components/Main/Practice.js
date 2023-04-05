const setId = (id) => {
        let shoppingCart = {}
    
        const getitem = JSON.parse(localStorage.getItem('stored-cart'))
        if (getitem) {
            shoppingCart = getitem
        }
    
        const value = shoppingCart[id]
        if (value) {
            let result = value + 1;
            shoppingCart[id] = result
        }
        else {
            shoppingCart[id] = 1
        }
        localStorage.setItem('stored-cart', JSON.stringify(shoppingCart))
        return shoppingCart;
    }
    export { setId }