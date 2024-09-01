import React, { useEffect, useState } from 'react';

const LanguageButton = () => {
    const url = 'https://judge0-ce.p.rapidapi.com/languages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '78f45f632bmsh69d47ff8d50a2bbp18f00ajsnb84621afacdd',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };

    const [languages, setLanguages] =useState([]);
    const [selectedLanguage,setSelectedLanguage] =useState("");
    useEffect(()=>{
            const fetchLanguages= async () => {
                try {
                const response = await fetch(url,options);
                if(!response.ok)
                    throw new Error(`Http error! : ${response.status}`);
                const data =await response.json();
                setLanguages(data);
            }
         catch (error) {
            console.error(error); 
        }
    };
        fetchLanguages()
    },[]);

    const handleSetLanguages = (event) =>{
        setSelectedLanguage(event.target.value)
    };
  return (
    < >
        <select name='language' value={selectedLanguage} onChange={handleSetLanguages} className='  border-solid border-gray-600 border-2 px-2 py-1 rounded-xl font-semibold text-base lg:self-center ml-2 sm:self-start'>
            <option value="">Select a Language :</option>
            {languages.map((language) => (
                <option value={language.id} key={language.id} >{language.name}</option>
            ))};
        </select>
    </>
  )
}

export default LanguageButton;