import React from 'react'
import './Main.css';
import {ReactComponent as IconArrowDown} from "../assets/images/keyboard_arrow_down.svg"
import ContainerCard from './ContainerCard';



const Main = () => {

  const regions = ['Filter by Region','Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
  const [rotate, setRotate] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('Filter by Region');
  const [searchTerm, setSearchTerm] = React.useState('');


  const handleClick = () => {
    setOpenFilter(!openFilter);
    setRotate(!rotate);
  }

  const handleChangeInputFilter = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleClickRegion = (regionName) => {
    setSelectedRegion(regionName);
    // Fecha o modal de filtro
    setOpenFilter(false);
    setRotate(!rotate);
  };

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  const clickedRegion = selectedRegion;


  return (
    <main className='main'>
        <div className='mainContainer'>
            <div className='mainInputs'>
                <input type="text" name="" id="" placeholder='Search for a country...' className='inputSearch' onChange={handleSearchChange} />
                <div className='inputFilter' onClick={handleClick}>
                    <span className='inputPlaceholder' value={selectedRegion} onChange={handleChangeInputFilter}>{selectedRegion}</span>
                    <IconArrowDown className={`iconArrowDown ${rotate ? "rotateIcon" : ''}`} />
                </div>

                <div className={`contentFilter ${openFilter ? 'animeShowModal' : 'animeCloseModal'}`} >
                    {regions.map((regionName) => <p key={regionName} className='nameRegions' onClick={() => handleClickRegion(regionName)}>{regionName}</p>)}
                </div>
            </div>


            <div className='containerCard'>
                <ContainerCard clickedRegion={clickedRegion} searchTerm={searchTerm}/>
            </div>
        </div>
    </main>
  )
}

export default Main