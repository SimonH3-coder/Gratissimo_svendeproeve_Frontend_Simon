import { NavLink } from 'react-router'
import {useFetch } from '../../Hooks/useFetch'

const API_URL = "http://localhost:4000";

export function Nyhedscard () {
const {data, loading, error } = useFetch (`${API_URL}/api/articles`)



if (loading) return <p>Henter artikle detaljer...</p>;
  if (error) return <p>Der kom en fejl ved hentning af artikler.</p>;
  if (!data || Object.keys(data).length === 0) return <p>Ingen artikler kom frem.</p>;


return (
    <div>
        <h4>Udvalgte Nyheder</h4>
    
{data.map((item) => (
   <div key= {item.id || item._id } >
    {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
    <p>d.22/3 {item.author}</p>
    <p>{item.title}</p>

    
   </div>
))}
</div>

        
           
        )
         
        }
        