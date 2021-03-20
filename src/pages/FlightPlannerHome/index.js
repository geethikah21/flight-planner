import FlightSearchFormTwo from '../../components/FlightSearchFormTwo';
import FlightTableTwo from '../../components/FlightTableTwo';
import { useState } from 'react';
import './index.css'

const FlightPlannerHome = () => {
    const [currencies, setCurrencies] = useState([]);
    const [gotCurrencies, setGotCurrencies] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [ready, setReady] = useState(false);

    if(!gotCurrencies) {
        getCurrencies();
    }

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

    const getTableData = (data) => {
        setTableData(data);
        setReady(true);
    }
    
    return (
        <>
            <div className="welcome">
                <p> Welcome! To search for flights, please input the place of departure and destination. If you are not 
                    flying from/to a place in the United States, please select N/A in the "State" field. </p>
                <p> Then select your currency and enter a range of dates during which you potentially wish to fly. </p>
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