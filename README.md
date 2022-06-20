# volkeno-password-field-validator

> react package for validate strong password

[![NPM](https://img.shields.io/npm/v/volkeno-password-field-validator.svg)](https://www.npmjs.com/package/volkeno-password-field-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-password-field-validator
```

## Usage

```tsx
import React, { Component, useState } from 'react'

import ValidatePassword from 'volkeno-password-field-validator'
import 'volkeno-password-field-validator/dist/index.css'

class Example extends Component {

  const [password , setPassword] = useState<any>('');

  render() {
    return <ValidatePassword value={password} setPassword={setPassword} />
  }
}
```

## License

MIT © [babasarr](https://github.com/babasarr)
