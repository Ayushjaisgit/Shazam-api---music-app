import { createApi, fetchBaseQuery} from  '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
//       'X-RapidAPI-Key': '50c4800206msh783e6c9007d1c9cp10740fjsn24b2150baf52'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            // baseUrl:'https://shazam-core.p.rapidapi.com/v1/charts/world', 
            baseUrl:'https://shazam-core.p.rapidapi.com/v1', 
            prepareHeaders :(headers) =>{
                headers.set('X-RapidAPI-Key', '50c4800206msh783e6c9007d1c9cp10740fjsn24b2150baf52' );
                return headers;
            },
        }),
        endpoints: (builder) =>({
            getTopCharts : builder.query({
                query: () => '/charts/world'
            }),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;
