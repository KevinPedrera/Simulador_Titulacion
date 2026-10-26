import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import {getFirestore,doc,getDoc,setDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const config={apiKey:"AIzaSyAKG_CJ0VCje4zOe5dOTr7aBzaj5MTbFXo",authDomain:"appmoviliii.firebaseapp.com",projectId:"appmoviliii",appId:"1:5104112793:web:aed0ce4a032c6774bcd408"};
const app=initializeApp(config),auth=getAuth(app),db=getFirestore(app);
const provider=new GoogleAuthProvider();
const state={user:null};
onAuthStateChanged(auth,user=>{state.user=user;window.dispatchEvent(new CustomEvent('firebase-user-changed',{detail:{signedIn:!!user,email:user?.email||''}}))});
async function login(){if(auth.currentUser)return auth.currentUser;const result=await signInWithPopup(auth,provider);return result.user}
async function upload(session){const user=await login();if(!session||!session.version)throw Error('No hay sesión para guardar');for(let tries=0;tries<15;tries++){const pin=String(crypto.getRandomValues(new Uint32Array(1))[0]%10000).padStart(4,'0');const ref=doc(db,'users',user.uid,'transfers',pin);const existing=await getDoc(ref);if(existing.exists()&&existing.data().expiresAt>Date.now())continue;await setDoc(ref,{session:JSON.stringify(session),expiresAt:Date.now()+24*60*60*1000,updatedAt:Date.now(),owner:user.uid});return pin}throw Error('No fue posible generar un PIN. Intenta nuevamente.')}
async function download(pin){const user=await login();if(!/^\\d{4}$/.test(pin))throw Error('Introduce exactamente cuatro números');const ref=doc(db,'users',user.uid,'transfers',pin),snapshot=await getDoc(ref);if(!snapshot.exists())throw Error('No existe una sesión con ese PIN en tu cuenta');const data=snapshot.data();if(data.expiresAt<Date.now()){await deleteDoc(ref);throw Error('Este PIN ha caducado')}return JSON.parse(data.session)}
window.firebaseSync={login,upload,download,getUser:()=>auth.currentUser};
