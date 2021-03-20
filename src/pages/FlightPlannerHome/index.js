import FlightSearchFormTwo from '../../components/FlightSearchFormTwo';
import FlightTableTwo from '../../components/FlightTableTwo';
import { useState } from 'react';
import './index.css'

// Home page for application
const FlightPlannerHome = () => {
    // Will hold list of currencies API supports
    const [currencies, setCurrencies] = useState([]);
    // Determines whether currencies have been obtained from API
    const [gotCurrencies, setGotCurrencies] = useState(false);
    // Table data: displays flights based on search
    const [tableData, setTableData] = useState([]);
    // Tells whether table data is ready for display
    const [ready, setReady] = useState(false);

    // state to check if GET currencies endpoint has returned
    if(!gotCurrencies) {
        getCurrencies();
    }

    // Get list of currencies from API
    async function getCurrencies() {
        const reqOptions = {
          method: 'GET',
          headers: {
              "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
              "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          }
        }
    
        let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", reqOptions);
        response = await response.json();
        
        setCurrencies(response.Currencies);
        setGotCurrencies(true);
    }

    // Callback method (called from form component) that gets the table data
    // to pass to table component
    const getTableData = (data) => {
        setTableData(data);
        setReady(true);
    }
    
    return (
        <>
            <div className="welcome">
                <p> Welcome! To search for flights, please input the place of departure and destination. If you are not 
                    flying from/to a place in the United States, please select N/A in the "State" field. </p>
                <p> Then select your currency and enter the departure and return dates. </p>
                <p> The results of your search (prices in the currency you selected) will appear in the 
                    table below. </p>
                <p> Click each column of the table to sort rows based on this field. </p>
            </div>
            <div>
                <FlightSearchFormTwo currencies={currencies} dataCallback={getTableData}/><br/><br/>
                <FlightTableTwo data={tableData} ready={ready}/>
            </div>
        </>
    );
};

export default FlightPlannerHome;