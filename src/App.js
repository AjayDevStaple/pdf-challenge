
import './App.css';
// import { Document } from 'react-pdf'
import * as xlsx from 'xlsx'
import { useState } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'


function App() {


  const [Json, setJson] = useState();

  const [json4Table , setJson4Table] = useState();

  console.log(json4Table)

  const readUploadFile = (e) => {
    console.log(e.target.files)
    e.preventDefault();
    if (e.target.files) {
      
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            setJson(json);


        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}




function Id_Greater_Then10() {

  
const result = Json.filter(idLessThen10);

function idLessThen10(Json) {
  // console.log(Json.__EMPTY)
  return Json.__EMPTY > 10;
}

setJson4Table(result)

}

function Nationality_Dom() {

  
  const result = Json.filter(nationality_equal_dom);
  
  function nationality_equal_dom(Json) {
    // console.log(Json.__EMPTY)
    return Json.__EMPTY_3 === 'DOM';
  }
  
  setJson4Table(result)
  
  }


  function fillter_By_Location() {

  
    const result = Json.filter((Json) =>  {
      // console.log(Json.__EMPTY)
      return ( Json.__EMPTY_4?.trim()=== 'Dohren' || Json.__EMPTY_4 === 'Ansbach' ) ;
    } );
    
  
    
    setJson4Table(result)
    
    }


  return (
    <div className="App">
      <form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
    />
</form>

<button onClick={() => Id_Greater_Then10()}>Fillter By ID</button>
<button onClick={() => Nationality_Dom()}>Fillter By Nationality</button>

<button onClick={() => fillter_By_Location()}> Filter By Location</button>
<div>


            <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={json4Table}/>
            </PDFViewer>
  

  
  
</div>
    </div>
  );
}

export default App;
