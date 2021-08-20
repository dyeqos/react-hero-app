import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../Components/dc/DcScreen'
import { HeroesScreen } from '../Components/heroes/HeroesScreen'
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { Navbar } from '../Components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component = { SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
