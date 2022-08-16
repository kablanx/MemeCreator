import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

    // Creación de variables y funciones para asignar valor a las variables.
    const [line1, setLine1] = useState('Hi World!');
    const [line2, setLine2] = useState('Hi Earth!');
    const [image, setImage] = useState('fire');

    // Funciones que captan cualquier modificación en los campos
    const onChangeLine1 = function (event) {
        setLine1(event.target.value);
    };

    const onChangeLine2 = function (event) {
        setLine2(event.target.value);
    };
    const onChangeImage = function (event) {
        setImage(event.target.value);
    };
    const onClickExport = function (event) {
        // alert("Export");
        /* Canvas es un objeto HTML*/
        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    };

    return (
        <div className="App">
            {/* Select picker de imágenes*/}
            <select onChange={onChangeImage}>
                <option value="fire">House on fire</option>
                <option value="futurama">Futurama</option>
                <option value="history">History Channel</option>
                <option velue="matrix">Matrix</option>
                <option value="philosoraptor">Philosoraptor</option>
                <option value="smart">Smart Guy</option>
            </select> <br />
            {/* Input text - First line */}
            <input type="text" placeholder='Line 1' onChange={onChangeLine1} /> <br />
            {/* Input text - Second line */}
            <input type="text" placeholder='Line 2' onChange={onChangeLine2} /> <br />
            {/* // Button Export  */}
            <button onClick={onClickExport}>Export</button>
            <div className='meme' id='meme'>
                <span>{line1}</span> <br />
                <span>{line2}</span> <br />
                <img src={"/img/" + image + ".jpg"} />
            </div>
        </div>

    );
}

export default App;
