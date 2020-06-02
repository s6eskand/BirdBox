import React from 'react';
import { Card, Image, Container, Grid } from 'semantic-ui-react';

class Birds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birdImages: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/images/')
            .then(res => res.json())
            .then(res => {
                if (res) {
                    res.map(bird => {
                        // just adds images for now, title and such will be added when ML model runs and classifies each one
                        this.setState({
                            birdImages: [...this.state.birdImages, bird]
                        })
                    })
                }
            })
            .catch(err => console.error(err))
    }

    render() {
        if (this.state.birdImages.length > 0) {
            return(
                <div className="bird-images">
                    <Container>
                        <h1>All your birbs!</h1>
                        <div className="birds">
                            {this.state.birdImages.map(bird =>
                                <div id={bird.id} className="bird-card">
                                    <Card>
                                        <Image src={bird.image} wrapped ui={false} />
                                        <Card.Content>
                                          <Card.Header>{bird.name}</Card.Header>
                                          <Card.Meta>This birb visited you today</Card.Meta>
                                          <Card.Description>
                                            8 billion people and it chose you
                                          </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            )
        } else {
            return(
                <h1 className="bird-images">You have no birbs visit you yet :( head up king, you dropped this *crown*</h1>
            )
        }
    }
}

export default Birds;