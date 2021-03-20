import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import React from 'react'
import Table from 'react-bootstrap/Table'

function FlightTableTwo(props) {
    const columns = [
        { field: 'date', headerName: 'Date', width: 200}, 
        { field: 'price', headerName: 'Price', width: 200},
        { field: 'carrier', headerName: 'Carrier', width: 200},
        { field: 'from', headerName: "From", width: 400}, 
        { field: 'to', headerName: "To", width: 400},
        { field: 'direct', headerName: 'Direct', width: 200},
    ];

    let rows = [];

    if(props.ready) {
        let carriers = new Map();

        for(let i = 0; i < props.data.Carriers.length; i++) {
            carriers.set(props.data.Carriers[i].CarrierId, props.data.Carriers[i].Name);
        }

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
                    "from": props.data.Places[0].Name,
                    "to": props.data.Places[1].Name,
                    "direct": directString
                }
            );
            
            rows.push(
                {
                    "id": index * 2 + 1,
                    "date": parsedInboundDate,
                    "price": quote.MinPrice,
                    "carrier": carriers.get(quote.InboundLeg.CarrierIds[0]),
                    "from": props.data.Places[1].Name,
                    "to": props.data.Places[0].Name,
                    "direct": directString
                }
            );
        });
    }

    return (
        <div style={{ display: 'flex', height: '100%', flexGrow: 1, background: "white" }}>
            <DataGrid autoHeight rows={rows} columns={columns} variant="dark" pageSize={10}/>
        </div>
    );
}

export default FlightTableTwo;