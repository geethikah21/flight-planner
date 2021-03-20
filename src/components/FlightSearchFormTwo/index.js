import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './index.css'
import { Alert } from "react-bootstrap"

class FlightSearchFormTwo extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getRoutes = this.getRoutes.bind(this);

        this.state = {
            fly_from_city: "",
            fly_from_state: "",
            fly_from_country: "",
            fly_to_city: "",
            fly_to_state: "", 
            fly_to_country: "",  
            currency: "",
            early: "", 
            late: "",
            form_alert: false,
            error_alert: false,
        };

    }

    async getPlaces(currency) {
        const reqOptions = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }
        let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/${currency}/en-US/?` + new URLSearchParams({query: this.state.fly_from_city}), reqOptions)
        
        if(response.status != 200) {
            this.setState({error_alert: true});
            return null;
        }

        response = await response.json();

        const to_places = response;
        response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/${currency}/en-US/?` + new URLSearchParams({query: this.state.fly_to_city}), reqOptions)
        
        if(response.status != 200) {
            this.setState({error_alert: true});
            return null;
        }

        response = await response.json();

        const from_places = response;

        this.setState({error_alert: false});
        return [to_places, from_places];
    }

    async getRoutes(currency, origin, destination, outbound_date, inbound_date) {
        // console.log(currency);
        // console.log(origin);
        // console.log(destination);
        // console.log(outbound_date);
        // console.log(inbound_date);

        const reqOptions = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            }
        }
        let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/${currency}/en-US/${origin}/${destination}/${outbound_date}/${inbound_date}`, reqOptions);
        if(response.status != 200) {
            this.setState({error_alert: true});
        }
        else {
            response = await response.json();
            this.props.dataCallback(response);
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // console.log(this.state.fly_from_city);
        // console.log(this.state.fly_from_state)
        // console.log(this.state.fly_from_country);
        // console.log(this.state.fly_to_city);
        // console.log(this.state.fly_to_state)
        // console.log(this.state.fly_to_country);
        // console.log(this.state.currency);
        // console.log(this.state.early);
        // console.log(this.state.late);

        if(this.state.fly_from_city === "" || this.state.fly_from_country === "" 
            || this.state.fly_from_state === "" || this.state.fly_to_city === ""
            || this.state.fly_to_state === "" || this.state.fly_to_country === ""
            || this.state.currency === "" || this.state.early === "" || this.state.late === "") {
                this.setState({form_alert: true});
        }
        else {
            this.setState({form_alert: false});
            // find to and from places and pass their ids into function
            const placeIds = this.getPlaces(this.state.currency);

            let self = this;
            placeIds.then(
                function determinePlaceIds(placeIds) {
                    if(placeIds != null) {
                        const to_id = placeIds[0].Places[0].PlaceId;
                        const from_id = placeIds[1].Places[0].PlaceId;

                        // search for things - call API
                        self.getRoutes(self.state.currency, from_id, to_id, self.state.early, self.state.late);
                    }
                }
            );
        }

        // console.log(this.state.fly_from_city);
        // console.log(this.state.fly_from_state)
        // console.log(this.state.fly_from_country);
        // console.log(this.state.fly_to_city);
        // console.log(this.state.fly_to_state)
        // console.log(this.state.fly_to_country);
        // console.log(this.state.currency);
        // console.log(this.state.early);
        // console.log(this.state.late);

    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            ...this.state,
            [name]: value, 
        });
    }

    render() {
        let states = new Map();

        states.set("N/A", "N/A");
        states.set("Alabama", "AL");
        states.set("Alaska", "AK");
        states.set("Arizona", "AZ");
        states.set("Arkansas", "AR");
        states.set("California", "CA");
        states.set("Colorado", "CO");
        states.set("Connecticut", "CT");
        states.set("Delaware", "DE");
        states.set("Florida", "FL");
        states.set("Georgia", "GA");
        states.set("Hawaii", "HI");
        states.set("Idaho", "ID");
        states.set("Illinois", "IL");
        states.set("Indiana", "IN");
        states.set("Iowa", "IA");
        states.set("Kansas", "KS");
        states.set("Kentucky", "KY");
        states.set("Louisiana", "LA");
        states.set("Maine", "ME");
        states.set("Maryland", "MD");
        states.set("Massachusetts", "MA");
        states.set("Michigan", "MI");
        states.set("Minnesota", "MN");
        states.set("Mississippi", "MS");
        states.set("Missouri", "MO");
        states.set("Montana", "MT");
        states.set("Nebraska", "NE");
        states.set("Nevada", "NV");
        states.set("New Hampshire", "NH");
        states.set("New Jersey", "NJ");
        states.set("New Mexico", "NM");
        states.set("New York", "NY");
        states.set("North Carolina", "NC");
        states.set("North Dakota", "ND");
        states.set("Ohio", "OH");
        states.set("Oklahoma", "OK");
        states.set("Oregon", "OR");
        states.set("Pennsylvania", "PA");
        states.set("Rhode Island", "RI");
        states.set("South Carolina", "SC");
        states.set("South Dakota", "SD");
        states.set("Tennessee", "TN");
        states.set("Texas", "TX");
        states.set("Utah", "UT");
        states.set("Vermont", "VT");
        states.set("Virginia","VA");
        states.set("Washington", "WA");
        states.set("West Virginia", "WV");
        states.set("Wisconsin", "WI");
        states.set("Wyoming", "WY");

        return (
            <div className="form">
                <div className="form_alert">
                    {this.state.form_alert ? 
                        <Alert variant="danger" onClose={() => {this.setState({form_alert: false})}} dismissible>
                            <Alert.Heading>Please fill in all fields before searching.</Alert.Heading>
                        </Alert>
                        : null
                    }
                </div>
                <div className="search_error_alert">
                    {this.state.error_alert ? 
                        <Alert variant="danger" onClose={() => {this.setState({error_alert: false})}} dismissible>
                            <Alert.Heading>Invalid search. Please check your inputs.</Alert.Heading>
                        </Alert>
                        : null
                    }
                </div>
                <div className="flightinfo">
                    <Form>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label>Flying From: </Form.Label>
                                    <Col>
                                        <Form.Control type="text" name="fly_from_city" placeholder="City" onChange={this.handleChange}/>
                                    </Col>
                                    <Col>
                                        <Form.Control as="select" name="fly_from_state" onChange={this.handleChange}>
                                            <option value="">State</option>
                                            {Array.from(states.keys()).map(state => {
                                                return (
                                                    <option value={states.get(state)}>{state}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name="fly_from_country" placeholder="Country" onChange={this.handleChange}/>
                                    </Col>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Row>
                                <Form.Label>Currency: </Form.Label>
                                <Col>
                                    <Form.Control as="select" name="currency" onChange={this.handleChange}>
                                        <option value="">Select currency</option>
                                        {this.props.currencies.map(currency => {
                                            if(currency.Code !== currency.Symbol) {
                                                return (
                                                    <option value={currency.Code}>{`${currency.Code} (${currency.Symbol})`}</option>
                                                )
                                            }
                                            else {
                                                return (
                                                    <option value={currency.Code}>{`${currency.Code}`}</option>
                                                )
                                            }
                                        })}
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Row>
                                <Form.Label>Flying To: </Form.Label>
                                <Col>
                                    <Form.Control type="text" name="fly_to_city" placeholder="City" onChange={this.handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Control as="select" name="fly_to_state" onChange={this.handleChange}>
                                        <option value="">State</option>
                                        {Array.from(states.keys()).map(state => {
                                            return (
                                                <option value={states.get(state)}>{state}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control type="text" name="fly_to_country" placeholder="Country" onChange={this.handleChange}/>
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Row>
                                <Form.Label>Earliest Flight Date: </Form.Label>
                                <Col>
                                    <Form.Control type="text" name="early" placeholder="yyyy-mm-dd, yyyy-mm, or anytime" 
                                        onChange={this.handleChange}/>
                                </Col>
                                <Form.Label>Latest Flight Date: </Form.Label>
                                <Col>
                                    <Form.Control type="text" name="late" placeholder="yyyy-mm-dd, yyyy-mm, or anytime"
                                        onChange={this.handleChange}/>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleSubmit}>Search</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default FlightSearchFormTwo