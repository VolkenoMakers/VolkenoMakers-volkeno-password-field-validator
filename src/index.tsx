import React , { useState } from 'react'
import styles from './styles.module.css'

export const ValidatePassword = ({setPassword,password}:any) => {

  const [haveMinUppercase, setHaveMinUppercase] = useState<any>('');
  const [haveMinLowercase, setHaveMinLowercase] = useState<any>('');
  const [haveMinNumber, setHaveMinNumber] = useState<any>('');
  const [haveMinCharacter, setHaveMinCharacter] = useState<any>('');
  const [haveMinSpecialCharacter, setHaveMinSpecialCharacter] = useState<any>('');



  const countUppercase = (str: any) => {
    if (str.replace(/[^A-Z]/g, "").length >= 1) {
      return true;
    }
    return false;
  };

  const countLowercase = (str: any) => {
    if (str.replace(/[^a-z]/g, "").length >= 1) {
      return true;
    }
    return false;
  };

  const countNumber = (str: any) => {
    if (str.replace(/[^0-9]/g, "").length >= 1) {
      return true;
    }
    return false;
  };

  const countCharacters = (str: any) => {
    if (str.length >= 8) {
      return true;
    }
    return false;
  };

  const countSpecial = (str: any) => {
    const punct =
      " @ [ ] ^ _ ! \" # $ % & ' ( ) * + , - . / : ; { } < > = | ~ ? ";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!punct.includes(str[i])) {
        continue;
      }
      count++;
    }
    // return count;
    if (count >= 1) {
      return true;
    }
    return false;
  };

  const passwordHandleChange = (e: any) => {
    var password = e.target.value;
   
    if (countUppercase(password)) {
      setHaveMinUppercase(true);
    } else {
      setHaveMinUppercase(false);
    }
    if (countLowercase(password)) {
      setHaveMinLowercase(true);
    } else {
      setHaveMinLowercase(false);
    }
    if (countNumber(password)) {
      setHaveMinNumber(true);
    } else {
      setHaveMinNumber(false);
    }
    if (countCharacters(password)) {
      setHaveMinCharacter(true);
    } else {
      setHaveMinCharacter(false);
    }
    if (countSpecial(password)) {
      setHaveMinSpecialCharacter(true);
    } else {
      setHaveMinSpecialCharacter(false);
    }

    setPassword(password)


  };

  return (
    <div>
      <div className={styles.container_password} >
        <input
          className={styles.input_pwd}
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => passwordHandleChange(e)}
        />
      </div>
      <div className={styles.password_validation_terms_container}>
        <h4 className={styles.password_validation_terms_title+" "+
                      (haveMinCharacter &&
                        haveMinUppercase &&
                        haveMinLowercase && 
                        haveMinNumber && 
                        haveMinSpecialCharacter && styles.password_validation_terms_title_ok )}>
          Votre mot de passe doit contenir :{" "}
        </h4>
        <ul className={styles.password_validation_terms_ul}>
          <li
            className={
              styles.min_character  +" "+
              (haveMinCharacter && styles.min_character_count_ok )
            }
          >
            Au minimum 8 caractères
          </li>
          <li
            className={
              styles.min_character  +" "+
              (haveMinUppercase &&
                styles.min_character_uppercase_ok)
            }
          >
            Au minimum 1 caractère en majuscule
          </li>
          <li
            className={
              styles.min_character  +" "+
              (haveMinLowercase &&
                styles.min_character_lowercase_ok)
            }
          >
            Au minimum 1 caractère en minuscule
          </li>
          <li
            className={
              styles.min_character +" "+
              (haveMinNumber && styles.min_character_number_ok)
            }
          >
            Au minimum 1 nombre
          </li>
          <li
            className={
              styles.min_character  +" "+
              (haveMinSpecialCharacter &&
                styles.min_character_special_ok)
            }
          >
            Au minimum 1 caractère spéciale
          </li>
        </ul>
      </div>
    </div>
  )
}
