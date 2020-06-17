import React from 'react';
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';

// constants
import {
    GET_AND_POST_IMAGES
} from "../constants/endpoints";

// redux
import {
    logoutSelector
} from "../redux/selectors/auth";
import {
    logout
} from "../redux/actions/auth";
import withShipment from "../withShipment";

class Birds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birdImages: []
        }
    }

    componentDidMount() {
        axios.get(GET_AND_POST_IMAGES, {
            headers: {
                "Authorization": "Token " + this.props.token
            }
        })
            .then(res => res.data)
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
                                <div key={bird.id} className="bird-card">
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
                <div>
                    <h1 className="bird-images">You have no birbs visit you yet :( head up king, you dropped this *crown*</h1>
                    <img style={{position: 'fixed', top: '20px', left: '50px'}} src="https://lh3.googleusercontent.com/proxy/NNCSP7uaiQOQ6P5DJVF9th_Pe6a3y_DDSPvlptK3xk8oS9edjGkiixvKjMJjL7AFEiJZ3onlhTNpZv4y-Gq7Pev8DXC8UFDqr3M1FE3PRH3EI5bEQUDuDgr5xLF0P46zDHDURkO3bmb-wk3gyMe9y7fZr4e2qbs4yQnHnpjdNho8cnPEN75cPCWOeHUZs0EV" alt=""/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    token: logoutSelector(state),
});

const actionCreators = {
    logout
};

export default withShipment({
    mapStateToProps,
    actionCreators
}, Birds);