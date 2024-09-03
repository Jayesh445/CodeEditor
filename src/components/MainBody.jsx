import React  from 'react'
import LanguageButton from './LanguageButton';


const MainBody = ({children}) => {
    const url ='https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
    const options = {
        method:"POST",
        headers:{
            'x-rapidapi-key': '78f45f632bmsh69d47ff8d50a2bbp18f00ajsnb84621afacdd',
		'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
		'Content-Type': 'application/json'
        },
        body:{

        }
    }
    window.addEventListener("change", ()=>{
        console.log(LanguageButton.selectedLanguage);
    })
 
  return (
    <div className='lg:grid grid-cols-2 gap-2 place-content-center '>
        {children}

      </div>
  )
}

export default MainBody