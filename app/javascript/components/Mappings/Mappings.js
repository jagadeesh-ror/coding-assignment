import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Mapping from './Mapping'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
`
const Header = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`
const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding:20px;

  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Mappings = () => {
  const [mappings, setMappings] = useState([])

  useEffect( () => {
    axios.get('/api/v1/mappings.json')
    .then( resp => {
      setMappings(resp.data.data)
    })
    .catch( data => {
      debugger
    })
  }, [mappings.length])

  const grid = mappings.map( (mapping, index) => {
      return (
      	<Mapping 
          key={index} 
          attributes={mapping.attributes}
        />
      )
  })

  return(
    <Home>
      <Header>
        <h1>Topics</h1>
        <Subheader>CRUD questions under each of the Topics.</Subheader>
      </Header>
      <Grid>
       {grid}
      </Grid>
    </Home>
  )
}

export default Mappings