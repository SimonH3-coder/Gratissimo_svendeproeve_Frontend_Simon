import { SearchBar } from '../Component/Soeg/searchBar'
import { Filtering } from '../Component/Filtering/filtering'
import { Kategori } from '../Component/Kategori/kategori'
import { Nyhedscard } from '../Component/Nyhedscard/nyhedscard'
import { Slider } from '../Component/Slider/slider'

export function Frontpage () {
    return (
    <>
        <h1>Frontpage</h1>
        <SearchBar/>
        <Filtering/>
        <Kategori/>
        <Nyhedscard/>
        <Slider/>
    </>
   )
}