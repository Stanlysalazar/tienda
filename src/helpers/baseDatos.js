//Quemar una base de Datos

export let productos = Array(
    {
        nombre:"Producto1",
        descripcion:"Esta raza de caballo está caracterizada por su fuerza, resistencia y su gran inteligencia. Además, junto con el caballo andaluz, es una de las razas de caballos más antiguas.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img1.jpg?alt=media&token=3ff23149-da81-4f54-b1fb-02a1b4ed9dda",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img1.1.jpg?alt=media&token=c36f6e9d-aaa4-4ad2-bb54-adb8f1a58033"],
        precio:11220000,
        popularidad:5.0
    },
    {
        nombre:"Producto2",
        descripcion:"Una de las razas de caballos más antiguas del mundo que tiene su origen en Andalucía. Esta raza de caballo, después de mucho tiempo acompañando al hombre, es fácil de montar y adiestrar en diferentes tipos de competiciones como la doma clásica, la vaquera o el rejoneo.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img2.jpg?alt=media&token=fd2ed282-a0d5-4318-b6d4-2b71191781ff",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img2.2.jpg?alt=media&token=05e2c40d-a71d-40c4-8c82-8b1061b5a444"],
        precio:120000000,
        popularidad:5.0
    },
    {
        nombre:"Producto3",
        descripcion:"El caballo frisón es originario de Holanda y está caracterizado por su precioso pelaje en intensos colores de tonos negros. Su nombre se deriva de la región concreta de Holanda desde la que proceden, Frisia",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img6.jpg?alt=media&token=d97eb49b-0ace-4ba6-9e12-7405b01c4eb9", 
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img6.6.jpg?alt=media&token=49050bee-7c74-430f-bd5b-a3404c96f77d"],
        precio:100000000,
        popularidad:5.0
    },
    {
        nombre:"Producto4",
        descripcion:"Estos caballos son de origen francés, de la comarca de Le Perche. Dado a su gran tamaño suelen ser utilizados para el tiro y la crianza.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img3.jpg?alt=media&token=5bf571c4-9db9-4507-b9aa-a0419fa99beb",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img3.3.jpg?alt=media&token=73788495-51b9-4837-b18d-6c8beb8924aa"],
        precio:120000000,
        popularidad:5.0
    },
    {
        nombre:"Producto5",
        descripcion:"El origen de la crianza de estos caballos se les atribuye a los indios Pieles Roja en Norte América, después de que decidieran cruzar varias razas como el caballo inglés y el árabe.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img9.jpg?alt=media&token=640915d8-d5d0-4c79-a06f-8f5e3b7ca7e4",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img9.9.jpg?alt=media&token=ef63c9f3-918d-40f1-a600-21b3c94af8a3"],
        precio:22000000,
        popularidad:5.0
    },
    {
        nombre:"Producto6",
        descripcion:"El pura sangre inglés tiene sus orígenes en el siglo XVIII en Inglaterra, lógicamente. Se considera esa fecha como la señalada en la que se cruzaron yeguas inglesas con sementales árabes con el objetivo de conseguir caballos rápidos para carreras.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img4.jpg?alt=media&token=7c1c109c-fb26-460f-a8b9-a09dfc2e154e",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img4.4.jpg?alt=media&token=e1858bab-1181-41dc-8ef2-2fd784992944"],
        precio:11220000,
        popularidad:5.0
    },
    {
        nombre:"Producto7",
        descripcion:"El origen de esta raza de caballo es especialmente característico. Son originarios de Norte América, pero descienden de los caballos que llevaron los españoles en las conquistas de América que, tras perder las guerras, se volvieron salvajes. Al carecer de depredadores naturales, proliferaron y se asentaron.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img5.jpg?alt=media&token=296fc333-d3c3-4776-bc6e-74cef028f706",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img5.5.jpg?alt=media&token=133ba7af-d53d-4b87-95b1-934f24e73ae3"],
        precio:22000000,
        popularidad:5.0
    },
    {
        nombre:"Producto8",
        descripcion:" considerados genéticamente puros. Es posible constatar con pruebas arqueológicas que ya hace 4.500 años existían caballos muy parecidos a la raza árabe de hoy en día.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img8.jpg?alt=media&token=59936232-a094-4ae6-851c-44596c011961",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img8.8.jpg?alt=media&token=31dc01bb-9072-4410-a1e4-f23c74480e10"],
        precio:120000000,
        popularidad:5.0
    },
    {
        nombre:"Producto9",
        descripcion:"Está considerado oficialmente como “Pura raza Española”, conocido también comúnmente como “caballo español”. Pertenece a una de las razas equinas más antiguas del mundo, hablamos de un caballo ibérico de tipo barroco muy anhelado por la nobleza por ser uno de los mejores caballos para la guerra por su robustez y fortaleza sin dejar a un lado su belleza en parte debida a su espesa melena y cola",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img7.jpg?alt=media&token=77e7f034-feeb-4227-97a2-b9090a874bb3",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img7.7.jpg?alt=media&token=7e886e09-a0b3-47b8-8892-68965de0a32d"],
        precio:22000000,
        popularidad:5.0
    },
    {
        nombre:"Producto10",
        descripcion:"Estos animales fueron elegidos por los pioneros y plantadores de algodón por su robustez y valentía pues tenían que pasar largas horas vigilando los cultivos.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img10.jpg?alt=media&token=dd6806f2-e692-4c60-9654-6cd5a24b8dd7",
        "https://firebasestorage.googleapis.com/v0/b/tienda2-6c897.appspot.com/o/img10.10.jpg?alt=media&token=e93a489b-ba9b-4e18-87fc-ef0cb3bc2a2c"],
        precio:11220000,
        popularidad:5.0
    },
    
)