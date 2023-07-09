/*** examples/src/index.js ***/
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import EncryptedInput from './components/index';
import './index.scss'
const App = () => {
    const [initValue, setInitValue] = useState('')
    const renderTable = () => {
        return <div className='example-attr'>
            <div className='title'> Config </div>
            <div className='attr-wrap'>
                <div className='attr-item'>
                    <p className='attr-item-name'>initValue:</p>
                    <p className='attr-item-val'>< input value={initValue} onChange={e => setInitValue(e.target.value)} /></p>
                </div>
                <div className='attr-item'>
                    <p className='attr-item-name'>front:</p>
                    <p className='attr-item-val'>2</p>
                </div>
                <div className='attr-item'>
                    <p className='attr-item-name'>end:</p>
                    <p className='attr-item-val'>3</p>
                </div>
            </div>
        </div>
    }
    return (<div>
        <p>请注意：如果想看到front,end,style的效果需要刚开始就设置，demo中不支持动态设置</p>
        <div className='example-wrap'>
            {renderTable()}
            <div className='example'>
                <div className='title'>Example</div>
                <EncryptedInput initValue="我爱你啊梦" front="1" end="2" onChange={(d1, d2) => { console.log(d1, d2) }} mode="plain" />
            </div>
        </div>

    </div>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);