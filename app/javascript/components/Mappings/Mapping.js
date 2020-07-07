import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const MappingName = styled.div`
  padding:20px;
`

const LinkWrapper = styled.div`
  margin: 20px 0;
  height:50px;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
  }
`

const Mapping = (props) => {
  const {name, id} = props.attributes

  return (
    <Card>
      <MappingName>
        {name}
      </MappingName>
      <LinkWrapper>
        <Link to={"/mappings/" + id}>View Questions</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Mapping