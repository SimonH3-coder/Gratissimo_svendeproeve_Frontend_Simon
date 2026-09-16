import { useFetch } from '../Hooks/useFetch'
import { useParams, NavLink } from 'react-router'


const API_URL = "http://localhost:4000";


export function Newspage () {

     const { id } = useParams();
    // Henter det særlig nyheder og artikler fra dataen.
    const  {data, loadning, error} = useFetch(`${API_URL}/api/articles/1`)
   

    if (loadning) return <p>Henter nyhedsbeskrivelser</p>;
    if (error) return <p>Der dukker en fejl op ved hentning af nyheder</p>
    if (!data || Object.keys(data).length === 0) return <p>Ingen nyhder kom frem </p>

    // Hent billedstien (tjekker både data.image og data.articles.image for sikkerheds skyld)

    const imagePath = data.image?.url ||  data.articles?.image?.url;
    const fullimageUrl = imagePath ? `${API_URL}${imagePath}` : null;





    return (
        <main>
            <section>
                {/* Billedevisning */ }
                {fullimageUrl && (
                    <img src={fullimageUrl}
                    alt={data.fullimageUrl || "nyheds billede"}
                    />
                )}
                <div>
                    <h1>Lederjob som frivillig? Er det muligt eller blot en skrøne?</h1>
                    <p>d. 23/3 af {data.author}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse fugiat sunt reiciendis voluptatum, 
                        aut unde obcaecati molestias facilis expedita neque dolorem ea? Neque, quidem iusto asperiores accusamus incidunt est.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque 
                            quidem officia eius repellendus itaque architecto. Perspiciatis maxime adipisci numquam ut, 
                            dolorem quas officia? At expedita nisi omnis unde reiciendis.</p>
                </div>
            </section>
            <section>
                <h4>Alle Nyheder</h4>
                <div>
                   <img src= {fullimageUrl} alt= {data.user?.articles || "nyheder"} />
                   <p>d.23/3- {data.author}</p>
                </div>

            </section>

        </main>
  
    )
   
}