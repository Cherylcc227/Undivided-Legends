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
      <div>
        <li>Allie</li>
        <img id='bgePhoto' src={Allie}/>
      </div>
      <br/>
      <div>
        <li>Alex</li>
        <img id='bgePhoto' src={Alex}/>
      </div>
      <br/>
      <div>
        <li>Amy</li>
        <img id='bgePhoto' src={Amy}/>
      </div>
      <br/>
      <div>
        <li>Andy</li>
        <img id='bgePhoto' src={Andy}/>
      </div>
      <br/>
      <div>
        <li>Austin</li>
        <img id='bgePhoto' src={Austin}/>
      </div>
      <br/>
      <div>
        <li>BJ</li>
        <img id='bgePhoto' src={BJ}/>
      </div>
      <br/>
      <div>
      <li>Bo</li>
        <img id='bgePhoto' src={Bo}/>
      </div>
      <br/>
      <div>
      <li>Cheryl</li>
        <img id='bgePhoto' src={Cheryl}/>
      </div>
      <br/>
      <div>
      <li>Jenny</li>
        <img id='bgePhoto' src={Jenny}/>
      </div>
      <br/>
      <div>
      <li>Jesse</li>
        <img id='bgePhoto' src={Jesse}/>
      </div>
      <br/>
      <div>
      <li>John</li>
        <img id='bgePhoto' src={John}/>
      </div>
      <br/>
      <div>
      <li>Katie</li>
        <img id='bgePhoto' src={Katie}/>
      </div>
      <br/>
      <div>
      <li>Kenneth</li>
        <img id='bgePhoto' src={Kenneth}/>
      </div>
      <br/>
      <div>
      <li>Nic</li>
        <img id='bgePhoto' src={Nick}/>
      </div>
      <br/>
      <div>
      <li>Richard</li>
        <img id='bgePhoto' src={Richard}/>
      </div>
      <br/>
      <div>
      <li>Tobin</li>
        <img id='bgePhoto' src={Tobin}/>
      </div>
      <br/>
      <div>
      <li>Yuriy</li>
        <img id='bgePhoto' src={Yuriy}/>
      </div>
    </div>
  )
}

export default SpecialEdition