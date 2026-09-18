import { useFetch } from '../../Hooks/useFetch'
import icons8favorite50 from '../../assets/icons/icons8-favorite-50.png'

// // Her gemmer jeg adressen på API’et  i en konstant
const API_URL = "http://localhost:4000";


//Her laves en react component som kaldes Jobannoncecard
export function Jobannoncecard () {
    const {data, loading, error } = useFetch (`${API_URL}/api/job-listings`)
    // Her hentes alle hentes job-listings fra postman API'et
    //Jeg får tre værdier ud, data indhold, error fortæller hvis der er sket fejl, loading siger om data bliver hentet
    
    
    if (loading) return <p>Henter jobannoncer detaljer...</p>;
      if (error) return <p>Der kom en fejl ved hentning af jobannoncer.</p>;
      if (!data || Object.keys(data).length === 0) return <p>Ingen artikler kom frem.</p>;
      // }, [data]);
//Her siges der til React, at useEffect skal køre igen, når værdien af data ændre sig.
//if (loading) return <p>Henter teams...</p>;
//Men mine teams bliver hentet, kommer der en besked til brugeren om at data bliver indlæst.
//if (error) return <p>Der opstod en fejl ved hentning af teams.</p>;
//Hvis der foregår en fejl under hentningen, kommer der en fejlbesked istedetfor for at forsøge at  vise teams.


      return (
        <div >
                    <p>Organisation/Forening</p>
                  {data.map((item) => (
           <div key= {item.id || item._id } >
           
           
            <p>{item.title}</p>
              <p>{item.description}</p>
                <p>Lokation:{item.city}</p>
        <p>Indrykket: d. 22/3-25</p>
        <button >Gem</button>
        <img src={icons8favorite50} alt="heart"/>
        <button>Åben</button>
        
            
           </div>
          
        ))}
        
        </div>

      )
}