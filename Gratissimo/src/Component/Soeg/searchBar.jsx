import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { NavLink } from 'react-router'
import icons8search50 from '../../assets/icons/icons8-search-50.png'
import style from "./SearchBar.module.scss"

const API_URL = "http://localhost:4000";

export function SearchBar() {
    const { data, error, loading } = useFetch(`${API_URL}/api/job-listings`);
    const [Textsearch, setTextsearch] = useState("");

    const searchData = data?.filter((data) =>
    data?.title && Textsearch && data?.title.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.description && Textsearch && data?.description.toLowerCase().includes(Textsearch.toLowerCase())) || []

    if (loading) return <p>Henter search data...</p>;
    if (error) return <p>Der kommer fejl ved hentning af search data. </p>;

    return (
        <section className={style.searchContainer}>
            <h1>Søg frivilligt arbejde:</h1>
            <form onSubmit={(e) => e.preventDefault()}>
            <img src= {icons8search50} alt="searchclass"/>
            
            <label className={style.searchBox}>
                <span></span>
                <input
                type="search"
                placeholder="Eks. cafemedhjælper..."
                value={Textsearch}
                onChange= {(e) => setTextsearch(e.target.value)}
                
                />
            </label>
            </form>
            <div className={style.writes}>
                {Textsearch && searchData.length === 0 ? (
                    <p>"Din søgning gav ingen resultater. Prøv noget andet." </p>
                ) : (
                    searchData.map((data) =>
                        <article className={style.write} key={data.id}>
                             <NavLink to={`/class/${data.id}`}>
                    
                        <h2>{data.title}</h2>
                        </NavLink>
                        <p>{data.description}</p>
                        
                        
                        </article>
            
                        ))
}
                    
    
            </div>
              <button className={style.buttonSearch}>
          <NavLink to="search">Søg</NavLink>
        </button>


        </section> 
    )

}