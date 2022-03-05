const app = document.getElementById('root')
console.log(app)
const r = React.createElement

const Avatar = () => {
const src = `https://randomuser.me/api/portraits/men/85.jpg`

    return r('picture', {}, [r('img', {src, alt: 'lego'}), r('p', {}, 'Lego')])
}

const AvatarJSX = () => {
    const src = `https://randomuser.me/api/portraits/men/86.jpg`
    
        return (
            <picture>
                <img src={src} alt ='lego'/>
                <p>Lego 2</p>
            </picture>
        )
    }

ReactDOM.render(r(AvatarJSX), app)

// const Avatar = (params) => {
//     console.log(params)
//     return `
//     <picture>
//     <img src="https://randomuser.me/api/portraits/men/${params.id}.jpg" alt="perfil">
//     <p>${params.name}</p>
// </picture>
// `
// }

// app.innerHTML = Avatar({id: 1, name: 'Persona 1'})
// app.innerHTML += Avatar({id: 2, name: 'Persona 2'})

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener('click', () =>{
        img.classList.toggle('disabled')
    })
})