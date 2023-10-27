import React from 'react';
import './Modal.css';
import ImgNFT from '../assets/images/NFT.gif';
import ImgDropDown from '../assets/images/DropDown.gif';
import ImgMario from '../assets/images/Mario.gif';
import ImgTestimonials from '../assets/images/Testimonials.gif';

const Modal = ({isOpen, setOpenModal}) => {



    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
          setOpenModal(false); 
        }
      }

      if (isOpen) {
          return (
              <div className={`modal ${isOpen ? 'animeOpenModal' : ''}`} onClick={handleOutsideClick}>
                <h1 className='modalTitle'>OTHER CHALLENGES</h1>
                <h1 className='modalTitle'>OTHER CHALLENGES</h1>

                 <div  className='containerModal'>
                 <a href={"https://github.com/rodrigompires/DesafioNFTPreview2"} className='cardLinks' target="_blank" rel="noopener noreferrer"><div style={{ '--r': '-15' }} data-text = 'Nft' className={`cardRodrigo`}>
                        <div className='containerImg'>
                            <img src={ImgNFT} alt={''} className={'cardImg'}/>
                        </div>
                    </div></a>
                    <a href={"https://github.com/rodrigompires/Dropdown-React"} className='cardLinks' target="_blank" rel="noopener noreferrer"><div style={{ '--r': '20' }} data-text = 'Rating' className={`cardRodrigo`}>
                        <div className='containerImg'>
                            <img src={ImgDropDown} alt={''} className={'cardImg'}/>
                        </div>
                    </div></a>
                    <a href={"https://github.com/rodrigompires/Game-Mario"} className='cardLinks' target="_blank" rel="noopener noreferrer"><div style={{ '--r': '-15' }} data-text = 'Mario' className={`cardRodrigo`}>
                        <div className='containerImg'>
                            <img src={ImgMario} alt={''} className={'cardImg'}/>
                        </div>
                    </div></a>
                    <a href={"https://github.com/rodrigompires/Testimonials-React"} className='cardLinks' target="_blank" rel="noopener noreferrer"><div style={{ '--r': '5' }} data-text = 'Testimonials' className={`cardRodrigo`}>
                        <div className='containerImg'>
                            <img src={ImgTestimonials} alt={''} className={'cardImg'}/>
                        </div>
                    </div></a>
                </div>
            </div>
          ) 
      } else {
        return null;
      }
}

export default Modal