import React, { useState }  from 'react'

import { ValidatePassword } from 'volkeno-password-field-validator'
import 'volkeno-password-field-validator/dist/index.css'

const App = () => {

  const [password , setPassword] = useState<any>('');

  return <ValidatePassword
            value={password}
            setPassword={setPassword}
            validatorContainerClassName='pipi-dodo'
            listItemClassName='list-item-style'
            inputContainerClassName='containery'
            inputClassName="form-control"
            listParentClassName="parent-list"
          />
}

export default App
