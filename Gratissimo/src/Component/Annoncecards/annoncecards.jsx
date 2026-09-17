import { useFetch } from "../../Hooks/useFetch"
import { useNavigate, NavLink } from "react-router"

const API_URL = "http://localhost:4000";

export function Annoncecards () {

    // Fetch kategorier fra API'et 
    const {} = useFetch (`${API_URL}/api/categories`)

    const navigate = useNavigate()

    function handleChange(event) {
        const value = event.target.value;

        if (value) {
            navigate(value)
        }
    }
    
async function annonce(event) {
        event.preventDefault();
        const Dataform = new Dataform(event.target);
        // Fetch job-listnings fra API'et 
        const response = await fetch (`${API_URL}/api/job-listings`, {
            method: 'POST',
            headers: {
                'Conten-Type': 'application/json',
            },

            body: JSON.stringify({
                title: Dataform.get('title'),
                organization: Dataform.get('organisation/forening'),
                region: Dataform.get('lokation'),
                jobCategory: Dataform.get('kategori'),
                workType: Dataform.get('arbejdstid'),
                address: Dataform.get('adresse'),
                zipcode: Dataform.get('postnummer'),
                city: Dataform.get('by'),
                description: Dataform.get('jobbeskrivelse'),
            }),
        })
    }

    return (
        <>
           <header>
<h1>Opret en annonce og find frivillige til din forening</h1>
<p>Gratissimo er gratis for alle.Frivillige organisationer og foreninger. Du skaber det
    frivillige liv og vi formidlere kontakten. Når du har fundet en frivillig til din forening,
    kan du blot fjerne annoncen igen ved at gå til din side.
   
</p>

<NavLink to={"/mypage"}>Gå til min side</NavLink> 
       </header>
        <form onSubmit={annonce}>
        <p>Overskrift</p>
        <input
        name = "title"
        type = "text"
        placeholder = "Eks. Mågejæger søges..."
        required />
        <p>Organisation/forening</p>
        <input
        name = "organisation/forening"
        type = "text"
        placeholder = "Skriv din forening her..."
        required/>
        <div>
            <p>Lokation</p>
            <select name= "lokation" onChange={handleChange} defaultvalue="">
                <option value="" >Vælg lokation...</option>
                <option value={'job-listnings/region=5'}>Sjælland</option>
                <option value={'job-listnings/?region=2'}>Midtjylland</option>
                <option value={'job-listnings/?region=1'}>Nordjylland</option>
                <option value={'job-listnings/?region=3'}>Sønderjylland</option>
                <option value={'job-listnings/?region=4'}>Fyn</option>
                <option value={'job-listnings/?region=6'}>Bornholm</option>
            </select>
        </div>
        <div>
            <p>Kategori</p>
            <select name= "kategori"   onChange={handleChange} defaultvalue="">
            <option value="" >Vælg kategori...</option>
            <option value={'categories/name=1'}>Undervisning</option>
            <option value={'categories/name=2'}>Teknologi</option>
            <option value={'categories/name=3'}>Kultur</option>
            <option value={'categories/name=4'}>Håndværk</option>
            <option value={'categories/name=5'}>Industri</option>
            <option value={'categories/name=6'}>Service</option>
            <option value={'categories/name=7'}>Kommunation</option>
            <option value={'categories/name=8'}>Kontor</option>
            <option value={'categories/name=9'}>Øvrige</option>
            </select>
        </div>

        <div>
            <p>Arbejdstid</p>
            <select name="arbejdstid" onChange={handleChange} defaultvalue="">
            <option value="" >Vælg arbejdstid...</option>
            <option value={'job-listings/type=2'}>Fuldtid</option>
            <option value={'job-listings/type=1'}>Deltid</option>
            <option value={'job-listings/type=3'}>Flex</option>
            <option value={'job-listings/type=4'}>Ikke fastsat</option>
            </select>

        </div>
        <p>Adresse</p>
        <input
        name = "title"
        type = "text"
        placeholder = "Eks. Holmegade 22, 1.sal"
        required
        />
        <p>Postnummer</p>
        <input
        name = "title"
        type = "nummer"
        placeholder = "Eks.9200"
        required
        />
        <p>By</p>
        <input
        name = "title"
        type = "text"
        placeholder = "Eks. Aalborg SV"
        required
        />
        <p>Job beskrivelse</p>
        <input
        name = "title"
        type = "nummer"
        placeholder = "Her kan du beskrive jobbet,hvilke erfaringer der kræves og hvad der forventes af den frivillige..."
        required />
    <button type="submit">Opret annonce</button>
       


        </form>
        </>
        
  
    
        
    )
}