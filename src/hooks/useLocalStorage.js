// import { json } from 'body-parser';
// import React, { useState, useEffect } from 'react'

// function useLocalStorage(key, initialValue) {
//     const PREFIX = 'code-pen-clone';
//     const prefixKey = PREFIX + key;
//     console.log(prefixKey);
//     const [value, setValue] = useState(() => {
//         const jsonValue = localStorage.getItem(prefixKey);
//         if(jsonValue != null) return JSON.parse(jsonValue);

//         if(typeof initialValue === 'function'){
//             return initialValue()
//         }else{
//             return initialValue;
//         }
//     })

//     useEffect(() => {
//       localStorage.setItem(prefixKey, JSON.stringify(value))
//     }, [prefixKey, value])
    
//   return [value, setValue]
// }

// export default useLocalStorage