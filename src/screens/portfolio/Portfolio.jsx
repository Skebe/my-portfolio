import React, {useState} from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



function Portfolio() {
    const [modelShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});

    const handleClose = () => setModalShow(false);

    function createModel(data) {
        return (
            <Modal
                show={modelShow}
                onHide={() => setModalShow(false)}
                size="lg"
                arial-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="container-modal-title-vcenter">{data.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.summary}</p>
                    <Image src={data.image} style={{ width: '200px' }}/>
                </Modal.Body>
                <a id="portfolio_model_link" href={data.link} target="_blank" rel="noreferrer">Aller sur le site</a>
                <Modal.Footer>
                    <div>Technologies utilisées : </div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
                    <Button onClick={() => setModalShow(false)}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const mapped = portfolioData.map((e, index) => {
        return (
            <Card key={index} id="portfolio_card_container">
                <Image className="portfolio_image"
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            desc: e.desc,
                            summary: e.summary,
                            tech: e.tech
                        })
                        setModalShow(true);
                    }}
                src={e.image}/>
                <div className="portfolio_click_info">&#x1F50E;&#xFE0E;</div>

                {createModel(tempData)}
            </Card>
        )
    });

    return (
        <div className="portfolio_main_container" id="portfolio">
            <h1>PORTFOLIO</h1>
            <p>Voici ma page Github <a href="https://github.com/Skebe/" target="_blank" rel="noreferrer">https://github.com/Skebe/</a></p>
            <Container fluid="lg" style={{ padding: '2rem' }}>
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;