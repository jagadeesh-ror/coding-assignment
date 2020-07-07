import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`

const QuestionCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const Header = (props) => {
  const { name, id, questions } = props
  const questionsCount = questions ? questions.length : 0

  return (
    <Wrapper>
      <h1>{props.name}</h1>
      <div>
        <QuestionCount><span className="questions-count">{questionsCount}</span> questions</QuestionCount>     
      </div>
    </Wrapper> 
  )
}

export default Header