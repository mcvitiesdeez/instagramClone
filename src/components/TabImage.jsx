import { Button } from "react-bootstrap"

export default function TabImage() {
    return (
        <div className="d-flex flex-row justify-content-start">
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-0-circle-fill" style={{ fontSize: '70px' }}></i><span>Meet Ups</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-1-circle-fill" style={{ fontSize: '70px' }}></i><span>Reviews</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-2-circle-fill" style={{ fontSize: '70px' }}></i><span>For Sale</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-3-circle-fill" style={{ fontSize: '70px' }}></i><span>Mentors</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-4-circle-fill" style={{ fontSize: '70px' }}></i><span>FAQs</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-5-circle-fill" style={{ fontSize: '70px' }}></i><span>Events</span>
            </Button>
            <Button variant="my-4" style={{ marginBottom: '7px' }}>
                <i className="bi bi-6-circle-fill" style={{ fontSize: '70px' }}></i><span>Hirings</span>
            </Button>
        </div>
    )
}
