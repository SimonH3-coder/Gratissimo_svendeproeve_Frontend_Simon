import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { NavLink } from 'react-router'
import icons8search50 from '../../assets/icons/icons8-search-50.png'
import style from "./SearchBar.module.scss"

// Her gemmer jeg adressen på API’et  i en konstant
const API_URL = "http://localhost:4000";

//Her laves en react component som kaldes Searchbar
export function SearchBar() {
    // Her hentes alle hentes job-listings fra postman API'et
    //Jeg får tre værdier ud, data indhold, error fortæller hvis der er sket fejl, loading siger om data bliver hentet
    const { data, error, loading } = useFetch(`${API_URL}/api/job-listings`);
    // Der bruges en useState, der gemmer, det brugeren skriver i søgefeltet. Der startede om tekst. 
    // setTextSearch anvendes til at lave om i søgefelt

    const [Textsearch, setTextsearch] = useState("");

    const searchData = data?.filter((data) =>
    data?.title && Textsearch && data?.title.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.description && Textsearch && data?.description.toLowerCase().includes(Textsearch.toLowerCase())) || []
    // Ved data?.filter((data) => Der anvendes et filter til at finde job-listings, som passer brugerens søgning.
    // Der går igennem alle job-listings og kun anvender dem, som matcher søgeteksten.
    // Længer ned gennem min kode søger der efter en title og description

    //.toLowerCase().includes(Textsearch.toLowerCase())
//Begge tekster bliver til små bogstaver tolowerCase().
//Dermed anvendes  includes() til at kigge på, om søgefelt findes inde i teksten. 
// Dette gør at søgningen bliver uafhængig af store og små bogstaver.
// || []
//Når dataen ikke kommer frem, bruges et tomt array.
//[ ]
//Der mener jeg at searchData altid har et array at arbejde med.



    if (loading) return <p>Henter search data...</p>;
    if (error) return <p>Der kommer fejl ved hentning af search data. </p>;
    //// if (loading) return <p>Henter search data...</p>;
//Imens API’et henter data vise:
//”Henter search data”
//Det giver brugeren svar på , mens vi venter svar på siden.
//if (error) return <p>Der kom en fejl ved hentning af search data.</p>;
//Hvis der vise en fejl ved API-kaldet, kommer der en fejl besked.
//  Denne fejlbesked kommer frem, så brugeren ved, hvorfor dataen ikke bliver vist.


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