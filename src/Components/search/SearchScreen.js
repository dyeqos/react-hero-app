import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

    //query string
    const location = useLocation();
    const {q=''} = queryString.parse(location.search);
    
    //hook useForm
    const[formValues, setFormValues] = useForm({
        name : q
    });
    const {name} = formValues;

    //datos de los heroes
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    //btn enviar
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ name }`);
    }

    return (
        <div className="row">

            <div className="col-5">
                <h4>Buscador</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name= "name"
                        placeholder="Busca tu héroe"
                        className="form-control"
                        autoComplete="off"
                        value= {name}
                        onChange= {setFormValues}
                    />
                    <button
                        type="submit"
                        className="btn btn-block btn-outline-primary mt-2"
                    >
                        Buscar...
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Resultado</h4>
                <hr/>
                {
                    heroesFiltered.map( hero => (
                        <HeroCard
                            key = {hero.id}
                            {...hero}
                        />

                    ))
                }

            </div>

        </div>
    )
}
