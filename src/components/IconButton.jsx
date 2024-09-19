import { Button, Image } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick, name, image }) {
    let margin = 'light';
    let imageAtr = '';

    if (isTop) {
        margin = 'light my-4';
    } else if (isBottom) {
        margin = 'light mt-auto mb-3'
    }
    console.log(image)
    if (image) {
        return (
            <Button variant={margin} style={{ marginBottom: '7px' }} onClick={onClick}>
                <Image src={image} roundedCircle style={{ height: "30px" }} />
            </Button>
        )
    }

    return (
        <Button variant={margin} style={{ marginBottom: '7px' }} onClick={onClick}>
            <i className={className} style={{ fontSize: '24px' }}></i>{name}
        </Button>
    )
}
