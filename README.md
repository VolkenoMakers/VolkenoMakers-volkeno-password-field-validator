# volkeno-password-field-validator

> Volkeno Password Field Validator is the ReactJS module for validate strong password that is made of 8 characters, 1 uppercase character, 1 lowercase character, 1 numeric, 1 special character.

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
    return <ValidatePassword
              value={password}
              setPassword={setPassword}
              {... all others props}
            />
  }
}
```
## Configuration - Props

| Property                   |   Type   | Default | Description                                                                              |
| ------------------------   | :------: | :-----: | ---------------------------------------------------------------------------------------- |
| password                   | string   | null    | Input password value **(Required)**
| setPassword                | string   | void    | State function to handle password value **(Required)**
| inputNameValue             | string   | null    | Input name property value **(Required)**
| inputClassName             | string   | null    | Input custom className
| validatorTitle             | string   | null    | Validator textual label value
| characterCountLabel        | string   | null    | Character count label
| uppercaseCountLabel        | string   | null    | Uppercase count label
| lowercaseCountLabel        | string   | null    | Lowercase count label
| specialCharacterCountLabel | string   | null    | Special character count label
| inputPlaceholderValue      | string   | null    | Password input placeholder value
| inputContainerClassName    | string   | null    | Password input div container custom className
| validatorTitleClassName    | string   | null    | Validator title tag container custom className
| listParentClassName        | string   | null    | Validator item ul parent custom className
| listItemClassName          | string   | null    | Validator item li custom className
| validatorContainerClassName| string   | null    | Validator div parent tag custom className

## License

MIT © [VolkenoMakers](https://github.com/VolkenoMakers)
