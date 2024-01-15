import { Hibauzenet } from './HibauzenetProps';
import { useState } from 'react'

const [password, setPassword] = useState(' ');
const pattern = /[0-9]/;
const test = !pattern.test(password)

export function Main(){
    return    <main>
    <input type='password' onInput={e => {setPassword(e.currentTarget.value)}} />
    <p>Az jelszo: {password}</p>
    <Hibauzenet hibauzenetek={password.length < 8 || test ? ['A jelszó nem elég biztonságos']: []} 
    biztonsag = {password.length < 8 || test} mennyirebizt={password.length < 8}/>
  </main>
}