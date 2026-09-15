import { useFetch } from "../../Hooks/useFetch"
import { useParams, NavLink } from "react-router"


const API_URL = "http://localhost:4000";

export function Kategori() {


const {data, loading, error } = useFetch (`${API_URL}/api/job-categories`)



  if (loading) return <p>Henter holddetaljer...</p>;
  if (error) return <p>Der kom en fejl ved hentning af holdet.</p>;
  if (!data || Object.keys(data).length === 0) return <p>Ingen hold kom frem.</p>;

  return (
    
     <div>
        <h4>Find job ved kategori</h4>
      
        {data.map((item) =>  (
            <h3 key= {item.id || item._id } >
                {item.name}
            </h3>
        ))}
       
       

       
      </div>

  )
}