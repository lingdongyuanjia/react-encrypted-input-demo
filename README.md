## react-encrypted-input

React compoent for encrypting the input characters

## Installation

` npm install react-encrypted-input --save`

or 

` yarn add react-encrypted-input `

## Usage

```

import EncryptedInput from 'react-encrypted-input'

<EncryptedInput front="1" end="2" />

```
![pic1](https://s1.ax1x.com/2023/07/06/pC6YPYt.jpg)

![pic2](https://s1.ax1x.com/2023/07/06/pC6J2WV.jpg)


## Props

| Property   | Type   | Default          |  Description |
|  ----      | ----   |  ----            |  ----        |
|  initValue | string |  ''              | default value for input   |
|  front     | number |  0               | number of digits displayed before the string,eg: if the input value is '123456',front is 2, this input value will show 12****   |
|  end       | number |  0               | number of digits displayed after the string,eg: if the input value is '123456',end is 2, this input value will show 1234**  |
|  showIcon  | string | showIconDefault  | Icon for plaintext input  |
|  closeIcon | string | closeIconDefault | Icon for plaintext input  |
|  style     | object |  {}              | the component style,if you want to change input's style ,you can set style = {input:{fontSize:'20px'}}；If you want to change icon's style,you can set style = {icon:{width:'100px',border:'1px solid red'}}  |


