import React, {useState} from 'react';
import Allie from "../images/Allie.jpeg"
import Alex from "../images/Alex.jpeg"
import Amy from "../images/Amy.jpeg"
import Andy from "../images/Andy.jpeg"
import Austin from "../images/Austin.jpeg"
import BJ from "../images/BJ.jpeg"
import Bo from "../images/Bo.jpeg"
import Cheryl from "../images/Cheryl.jpeg"
import Jenny from "../images/Jenny.jpeg"
import Jesse from "../images/Jesse.jpeg"
import John from "../images/John.jpeg"
import Katie from "../images/Katie.jpeg"
import Kenneth from "../images/Kenneth.jpeg"
import Nick from "../images/Nick.jpeg"
import Richard from "../images/Richard.jpeg"
import Tobin from "../images/Tobin.jpeg"
import Yuriy from "../images/Yuriy.jpeg"

const SpecialEdition = ()=> {
  const [bge, setBge] = useState(false);
  return (
    <div id='bge1'>
      <h2>*SPECIAL EDITION BGE1*</h2>
      <h3>RELEASE DATE........APRIL 1, 2022</h3>
      <div>Allie  :
        <img id='bgePhoto' src={Allie}/>
      </div>
      <div>Alex  :
        <img id='bgePhoto' src={Alex}/>
      </div>
      <div>Amy  :
        <img id='bgePhoto' src={Amy}/>
      </div>
      <div>Andy  :
        <img id='bgePhoto' src={Andy}/>
      </div>
      <div>Austin  :
        <img id='bgePhoto' src={Austin}/>
      </div>
      <div>BJ  :
        <img id='bgePhoto' src={BJ}/>
      </div>
      <div>Bo  :
        <img id='bgePhoto' src={Bo}/>
      </div>
      <div>Cheryl  :
        <img id='bgePhoto' src={Cheryl}/>
      </div>
      <div>Jenny  :
        <img id='bgePhoto' src={Jenny}/>
      </div>
      <div>Jesse  :
        <img id='bgePhoto' src={Jesse}/>
      </div>
      <div>John  :
        <img id='bgePhoto' src={John}/>
      </div>
      <div>Katie  :
        <img id='bgePhoto' src={Katie}/>
      </div>
      <div>Kenneth  :
        <img id='bgePhoto' src={Kenneth}/>
      </div>
      <div>Nick  :
        <img id='bgePhoto' src={Nick}/>
      </div>
      <div>Richard  :
        <img id='bgePhoto' src={Richard}/>
      </div>
      <div>Tobin  :
        <img id='bgePhoto' src={Tobin}/>
      </div>
      <div>Yuriy  :
        <img id='bgePhoto' src={Yuriy}/>
      </div>
    </div>
  )
}

export default SpecialEdition