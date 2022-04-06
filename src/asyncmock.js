const products = [
    { 
        id: 1, 
        name: 'iPhone 12', 
        price: 252350, 
        category: 'celular', 
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: 2, 
        name: 'Samsung S21', 
        price: 135000, 
        category: 'celular', 
        img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', 
        stock: 16, 
        description:'Descripcion de Samsung s21'},
    { id: 3, 
        name: 'iPhone 13', 
        price: 359999, 
        category: 'celular', 
        img:'https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/i/p/iphone-13-pro-max-blue-selectyyyy.jpg', 
        stock: 6, 
        description:'Descripcion de Ipad'},
    { id: 4, 
        name: 'Samsung S22', 
        price: 199999, 
        category: 'celular', 
        img:'https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s22-ultra/buy/s22_s22plus_productkv_phantomblack_mo.jpg', 
        stock: 9, 
        description:'Descripcion de Samsung s22'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}