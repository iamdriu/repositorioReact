const products = [
    { 
        id: 1, 
        name: 'iPhone 12', 
        price: 252350, 
        category: 'celular', 
        img:'https://i0.wp.com/www.rosariotecno.com/wp-content/uploads/2021/09/iphone-12-mini1.png?fit=2000%2C2000&ssl=1', 
        stock: 10, 
        description:'Estableciendo un nuevo estándar, el nuevo iPhone 12 es más rápido y mejorado con un nuevo diseño y tiene una nueva gama de colores emocionante de negro a verde. Todo eso y más, la nueva pantalla OLED con diseño elegante, el sistema magnético de MagSafe y una cámara de lente telescópica extra y con capacidades 5G el iPhone 12 se siente de nuevo. La estética agradable de la pantalla del iPhone 12 tiene bordes metálicos planos y redondos con bordes más gruesos y pantalla de mayor tamaño. El excelente marco brillante de acero inoxidable le da un aspecto brillante, la pantalla frontal está cubierta con lo que Apple lo llama “nano cristales de cerámica” – una mezcla de vidrio y cerámica que tiene cuatro veces mejor rendimiento en caídas y resistencia a arañazos.'
    },
    { id: 2, 
        name: 'Samsung S21', 
        price: 135000, 
        category: 'celular', 
        img:'https://samsungar.vtexassets.com/arquivos/ids/177914/Samsung-97798753-ar-galaxy-s21-fe-g990-sm-g990elgaarm-530627001Download-Source.png?v=637788851897970000', 
        stock: 21, 
        description:'Presentamos Galaxy S21 Ultra 5G. Diseñado con una cámara de corte de contorno única para crear una revolución en la fotografía, lo que le permite capturar videos cinematográficos de 8K y tomar fotografías épicas, todo de una vez. Y con el chip más rápido de Galaxy, el cristal más resistente, 5G y una batería potente, Ultra hace honor a su nombre.'},
    { id: 3, 
        name: 'iPhone 13', 
        price: 359999, 
        category: 'celular', 
        img:'https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png', 
        stock: 6, 
        description:'Sku 723291 Phone 13 256GB Blue. Marca: Apple. Modelo: iPhone 13. Color: Blue. Memoria interna: 256 GB. Memoria RAM: 4 GB. Dual SIM: No. Compañía telefónica: Liberado. Sistema operativo: iOS 15. Tamaño de la pantalla: 6.1″. Resolución de la cámara: 12 MP. Red: 5G. Con pantalla táctil: Si. Cámara digital: Si. Capacidad de tarjeta de memoria: 256 GB. USB: USB-C. Teclado QWERTY: No. Wi-Fi: Si. Con GPS: Si. Radio: Si. Reproductor de música: Si. Grabador de voz: Si. Sintonizador de TV: No. Tamaño de SIM: Nano-SIM. Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi. Tipo de batería: De litio recargable integrada. Batería removible: No. Sensor de movimiento: Si. Brillo: Máximo de 800 nits (normal); brillo máximo de 1,200 nits (HDR). Flash en cámara frontal: Si. Cámara lenta: Si. Con Bluetooth: Si. Mini HDMI: No. Zoom óptico: Si. Zoom digital: Si. Tipo de pantalla: OLED. Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529. Lector de huella digital: No. Sensor de proximidad: Si.'},
    { id: 4, 
        name: 'Samsung S22', 
        price: 199999, 
        category: 'celular', 
        img:'https://fscl01.fonpit.de/devices/22/2222-w320h320.png', 
        stock: 9, 
        description:'Teléfono inteligente SAMSUNG Galaxy S22, teléfono celular Android desbloqueado de fábrica, 128 GB, cámara y video 8K, pantalla más brillante, batería de larga duración, procesador rápido de 4 nm, versión de EE. UU., Phantom Black'},
        
    { id: 5, 
         name: 'MacBook Pro', 
        price: 451687, 
        category: 'notebook', 
        img:'https://cbafederal.net/wp-content/uploads/2021/08/mbp-spacegray-select-202011.png', 
        stock: 3, 
        description:'Apple Chip M1 Pro o M1 Max para un gran salto en el rendimiento de CPU, GPU y aprendizaje automático La CPU de hasta 10 núcleos ofrece un rendimiento hasta 3.7 veces más rápido para volar a través de flujos de trabajo profesionales más rápido que nunca GPU de hasta 32 núcleos con un rendimiento hasta 13 veces más rápido para aplicaciones y juegos de gráficos intensivos Motor neural de 16 núcleos para un rendimiento de aprendizaje automático hasta 11 veces más rápido Mayor duración de la batería, hasta 17 horas Hasta 64 GB de memoria unificada para que todo lo que hagas sea rápido y fluido Hasta 8 TB de almacenamiento SSD superrápido lanza aplicaciones y abre archivos en un instante Impresionante pantalla Liquid Retina XDR de 14 pulgadas con rango dinámico extremo y relación de contraste Cámara FaceTime HD de 1080p con procesador de señal de imagen avanzado para videollamadas más nítidas Sistema de sonido de seis altavoces con woofers con cancelación de fuerza Mostrar más'},

    { id: 6, 
        name: 'ThinkBook 13s Gen 2', 
        price: 215000, 
        category: 'notebook', 
        img:'https://www.lenovo.com/medias/lenovo-laptop-thinkbook-13s-gen-2-intel-hero.png?context=bWFzdGVyfHJvb3R8ODEzMDl8aW1hZ2UvcG5nfGg0Yi9oNDEvMTExODE0MzAxNzc4MjIucG5nfGUwZmQwYmNhMDYwMDIxYjBiOTU0ZDQwZTAxZDBiOWFhZDEyNzk4NWU5YzZjOTMxNDY2NjlhOWVlOWRjMWNiYjM', 
        stock: 9, 
        description:'El trabajo se hace más rápido que nunca con la laptop Lenovo ThinkBook 13s de 2da generación (Intel) sin importar lo difícil que sea la tarea. Está equipada con procesadores hasta Intel® Core™ i7 de 11va generación que hacen que hasta el software más exigente se ejecute de forma fluida. Además, con su gran capacidad de memoria y almacenamiento, podrás olvidarte de los tiempos de carga largos de archivos complejos.'}
]

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
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