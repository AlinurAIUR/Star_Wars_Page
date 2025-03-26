import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'

import ErrorIndicator from "../error-indicator"
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components"
import ErrorBoundary from "../error-boundary"
// import DummySwapiService from "../../services/dummy-swapi-service"

import { SwapiServiceProvider } from '../swapi-service-context'
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import StarshipDetails from "../sw-components/starship-details";
import PlanetDetails from "../sw-components/planet-details";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages"
export default class App extends Component {


    state = {
        selectedItem: null,
        hasError: false,
        swapiService: new SwapiService()
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <div className="stardb-app">
                        <Header/>
                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
