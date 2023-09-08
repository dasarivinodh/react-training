

// npm to manage dependecnies > babel for jsx compilation(also helpful in converting es6 or higher version to es5 or lower versions)  > wepack for building or bundleing the app > dev server or web server

//https://github.com/aniljos/React-Sept-04-2023
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { App } from './app';

const root= ReactDOM.createRoot(document.getElementById("app"));
root.render(<App/>);