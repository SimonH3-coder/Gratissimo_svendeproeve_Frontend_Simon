import { NavLink } from "react-router";
import { useFetch } from '../../Hooks/useFetch'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router";

export function Filtering () {
    // Fetch fra API'ET

    const {} = useFetch('http://localhost:4000/api/job-listings');

    const navigate = useNavigate()

    function handleChange(event) {
            const value = event.target.value;

        if (value) {
            navigate(value);
        }
    }

    return (
        <>
        <h5>Filtrer:</h5>
        <div>
            <select onChange={handleChange} defaultValue="">
                 <option value="" disabled>Region</option>
            <option value={'search'}>Sjælland</option>
            <option value={'search'}>Midtjylland</option>
            <option value={'search'}>Nordjylland</option>
            <option value={'search'}>Sønderjylland</option>
            <option value= {'search'}>Fyn</option>
            <option value= {'search'}>Bornholm</option>
            </select>

            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Kategorier</option>
                <option value={'search'}>Undervisning</option>
                <option value={'search'}>Teknologi</option>
                <option value={'search'}>Kultur</option>
                <option value={'search'}>Håndværk</option>
                <option value={'search'}>Industri</option>
                <option value={'search'}>Service</option>
                <option value={'search'}>Kummunikation</option>
                <option value={'search'}>Kontor</option>
                <option value={'search'}>Øvrige</option>

                
            </select>
            
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Arbejdstid</option>
                <option value={'search'}>Deltid</option>
                <option value={'search'}>Flex</option>
                <option value={'search'}>Fuldtid</option>
            </select>
            <select onChange={handleChange} defaultValue="">
                <option value={'search'}>Seneste uge</option>
                <option value={'search'}>Seneste måned</option>
                <option value={'search'}>Seneste år</option>
            </select>
            <select onChange={handleChange} defaultValue="">
                <option value={'search'}>On-site</option>
                <option value={'search'}>Remote</option>
                <option value={'search'}>Hybrid</option>

            </select>
            <button>Nulstil</button>


        

        </div>
        </>
    )
}