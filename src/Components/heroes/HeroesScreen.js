import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

export const HeroesScreen = ({history}) => {

    const {heroId} = useParams();
    
    const [hero] = useMemo(() => getHeroById(heroId), [heroId]);

    if(!hero){
        return <Redirect to="/"/>
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const btnReturn = () => {
        if(history.length <=2){
            history.push('/');
        } else {
            
            history.goBack();
        }
    }

    return (
        <div>
            <div className="row mt-5 bg-dark">
                <div className="col-4">
                    
                    <img 
                        src={`../assets/heroes/${heroId}.jpg`} 
                        className="img-thumbnail"
                        alt={superhero} 
                    />
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush text-dark">
                        <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
                        <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
                        <li className="list-group-item"> <b>First appearance:</b> {first_appearance} </li>
                    </ul> 
                   <h5>Characters</h5>          
                   <p>{characters}</p>
                   <button
                    className="btn btn-primary"
                    onClick={btnReturn}
                   >
                       Return
                   </button>
                </div>
            </div>
        </div>
    )
}
