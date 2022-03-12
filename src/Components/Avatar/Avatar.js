import './Avatar.css'
import Button from '../Button/Button'

const Avatar = ({name, age, ...rest }) => {

    console.log(rest)
    return (
        <picture>
            <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="lego" />
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            <Button />
        </picture>
    )
}

export default Avatar