
import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import styles from './App.module.css'
import { fetchData } from './api/index'

import image from './images/image.png';

class App extends Component {
    state = {
        data : {},
    }

    async componentDidMount(){
        const fetchedData1 = await fetchData();

        this.setState({data : fetchedData1});
    }

    handleCountryChange = async (country) => {
        const fetchedData1 = await fetchData(country);

        this.setState({data : fetchedData1, country: country})
        
    }

    render() {
        const {data,country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='COVID 19'></img>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country} /> 
            </div>
        )
    }
}

export default App
