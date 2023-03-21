//import logo from './logo.svg';
import './App.css';
import Qrcode from './components/Qrcode';
import qr_code from './image/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Qrcode image={qr_code}>
          <div className='Box'>
            <h5>Improve your front-end skills by building projects</h5>
            <p className='Para'>Scan the QR code to visit Frontend Mentor and take your codding skills to the next level</p>
          </div>
        </Qrcode>
      </header>
    </div>
  );
}

export default App;
