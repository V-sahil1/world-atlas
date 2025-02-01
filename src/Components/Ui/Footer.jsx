import React from 'react'
import Data from '../Ui/Data.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'


function Footer() {
  const footerIcon ={
    MdPlace : <MdPlace/>,
    IoCallSharp :<IoCallSharp/>,
    TbMailPlus : <TbMailPlus/>

  }
  return (
<>
<footer className='footer-section'>
  <div className='container grid grid-three-cols'>
   
    {Data.map((val,index) => {
     const {icon,title,details} =val
      return (
        <div className='footer-contact'id={index} > 
          <div className='icon' id={icon} >{footerIcon[icon]}</div>
          <div className='footer-contact-text' id={index} >
            <p id={title}>{title}</p>
            <p id={details}>{details}</p>
          </div>
        </div>

      )
    })}
  </div>
  <div className='copyright-area'>
    <div className='container'>
      <div className='grid grid-two-cols'>
        <div className='copyright-text'>
          <p>
            Copyright &copy; 2025,All Right Reserved WorldAtlas
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* last me edit kar na hee 1:37:30 */}
</footer>
</>
  )
}

export default Footer