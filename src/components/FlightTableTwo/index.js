import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import { React } from 'react'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'

function FlightTableTwo(props) {

    // Columns of table (fields)
    const columns = [
        { field: 'date', headerName: 'Date', width: 200}, 
        { field: 'price', headerName: 'Price', width: 200},
        { field: 'carrier', headerName: 'Carrier', width: 200},
        { field: 'from', headerName: "From", width: 400}, 
        { field: 'to', headerName: "To", width: 400},
        { field: 'direct', headerName: 'Direct', width: 200},
    ];

    let rows = [];
    // Maps carrier IDs to their names
    let carriers = new Map();
    // Maps place IDs to their names
    let places = new Map();
    
    // Table data is obtained, so display it
    if(props.ready) {

        // Build carriers map
        for(let i = 0; i < props.data.Carriers.length; i++) {
            carriers.set(props.data.Carriers[i].CarrierId, props.data.Carriers[i].Name);
        }

        // Build places map
        for(let j = 0; j < props.data.Places.length; j++) {
            places.set(props.data.Places[j].PlaceId, props.data.Places[j].Name);
        }

        // Build rows of table based on quotes
        props.data.Quotes.map((quote, index) => {
            const directString = quote.Direct ? "Yes" : "No";
            const parsedOutboundDate = quote.OutboundLeg.DepartureDate.split('T')[0];
            const parsedInboundDate = quote.InboundLeg.DepartureDate.split('T')[0];

            rows.push(
                {
                    "id": index * 2,
                    "date": parsedOutboundDate,
                    "price": quote.MinPrice,
                    "carrier": carriers.get(quote.OutboundLeg.CarrierIds[0]),
                    "from": places.get(quote.OutboundLeg.OriginId),
                    "to": places.get(quote.OutboundLeg.DestinationId),
                    "direct": directString
                }
            );
            
            rows.push(
                {
                    "id": index * 2 + 1,
                    "date": parsedInboundDate,
                    "price": quote.MinPrice,
                    "carrier": carriers.get(quote.InboundLeg.CarrierIds[0]),
                    "from": places.get(quote.InboundLeg.OriginId),
                    "to": places.get(quote.InboundLeg.DestinationId),
                    "direct": directString
                }
            );
        });
    }

    // Render this component, as well as show an alert describing the cheapest routes
    return (
        <div>
            <div className="routes_alert">
                {props.ready ? 
                            <Alert variant="success">
                                <Alert.Heading>
                                    The cheapest routes are: 
                                    {
                                        props.data.Routes.map((route, index) => {
                                            return (
                                                ` ${index + 1}) ${places.get(route.OriginId)} to ${places.get(route.DestinationId)}
                                                 for ${route.Price} ${props.data.Currencies[0].Code}`
                                            )
                                        })
                                    }
                                </Alert.Heading>
                            </Alert>
                            : null
                }
            </div>
            <div style={{ display: 'flex', height: '100%', flexGrow: 1, background: "white" }}>
                <DataGrid autoHeight rows={rows} columns={columns} variant="dark" pageSize={10}/>
            </div>
        </div>
    );
}

export default FlightTableTwo;