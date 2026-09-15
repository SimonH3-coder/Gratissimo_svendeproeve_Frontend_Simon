import { useFetch } from '../../Hooks/useFetch'
import { NavLink } from 'react-router'

const API_URL = "http://localhost:4000";

export function Slider() {
    const {data, error,  loading } = useFetch(`{API_URL}/api/articles`)

    if (loading) return <p>Henter slider data</p>
    if (error) return <p>Der kom en fejl i forbindelse med at hente slider data</p>
    if (!data || Object.keys(data).length === 0) return <p>Ingen slider og articles data kommer frem</p>

    return (
        <div >
            <h3>Gratissimo Hjalp mig tilbage i arbejde</h3>
            {data.map((item) => (
                <p key= {item.id || item._id}>
                    {item.content}
                    {item.author}
                </p>
               

            ))}
        </div>
    )
       
}