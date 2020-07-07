import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
`
const Title = styled.div`
  padding: 20px 0px;
  font-weight: bold;
`
const Description = styled.div`
  padding: 0 0 20px 0;
`

const Question = (props) => {
  return (
    <Card>
      <Title>
        Question: {props.content}
      </Title>
      <Description>
        Teaming Stage: {props.teaming_stages}
      </Description>
      <div className="question-type">
        Qtype: {props.qtype}
      </div>
    </Card>
  )
}

export default Question