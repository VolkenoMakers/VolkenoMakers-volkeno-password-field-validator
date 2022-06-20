import React, { useState }  from 'react'

import { ValidatePassword } from 'volkeno-password-field-validator'
import 'volkeno-password-field-validator/dist/index.css'

const App = () => {

  const [password , setPassword] = useState<any>('');

  console.log(password)

  return <ValidatePassword setPassword={setPassword}/>
}

export default App
