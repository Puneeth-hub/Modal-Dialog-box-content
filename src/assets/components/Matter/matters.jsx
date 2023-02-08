import {useQuery, gql} from '@apollo/client';
import MatterItem from '../MatterItem/matterItem';
import { TailSpin } from 'react-loader-spinner';
import './matters.css'

const CONTENT_QUERY = gql`
    {
     messages  {
               items {
                      id
                      subject
                      body
                      language
                      href
                      view_href
                      search_snippet 
                      post_time
                      popularity

                }
        }
    }

`

const Matters = () => {
    const {loading, data, error} = useQuery(CONTENT_QUERY)
    console.log(data)

    if(loading)return(
        <div className="loader-container">
        <TailSpin  className='spinner-class'  visible={true} ariaLabel='tail-spin-loading'/>
        <p className='loading'>Loading..!</p>
      </div>
    )
    if(error) return<p>Error:{error}</p>
    return(
        <div className='dialog-content'>
            <h1 className='heading'>Dialog Content from Graphql using vite+react</h1>
            
            {data && data.messages.items.map((matter) => 
            (<MatterItem key={matter.id} matter={matter}/>)
        )}
        
        </div>
    )
}

export default Matters