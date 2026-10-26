(()=>{'use strict';
const KEY='itsqmet-data-saver-v1';
const network=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
let stored=null;try{stored=localStorage.getItem(KEY)}catch{}
let enabled=stored===null?!!network?.saveData:stored==='1';
const listeners=new Set();
const notify=()=>{for(const callback of listeners){try{callback(enabled)}catch{}}document.documentElement.classList.toggle('data-saver',enabled)};
const setEnabled=value=>{enabled=!!value;try{localStorage.setItem(KEY,enabled?'1':'0')}catch{}notify()};
const isEnabled=()=>enabled;
window.dataSaver={isEnabled,setEnabled,subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn)}};
notify();
})();