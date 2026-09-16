import { useFetch } from '../../Hooks/useFetch'
import icons8favorite50 from '../../assets/icons/icons8-favorite-50.png'

const API_URL = "http://localhost:4000";

export function Jobannoncecard () {
    const {data, loading, error } = useFetch (`${API_URL}/api/job-listings`)
    
    
    
    if (loading) return <p>Henter jobannoncer detaljer...</p>;
      if (error) return <p>Der kom en fejl ved hentning af jobannoncer.</p>;
      if (!data || Object.keys(data).length === 0) return <p>Ingen artikler kom frem.</p>;

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