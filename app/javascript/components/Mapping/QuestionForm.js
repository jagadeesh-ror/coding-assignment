import React, { Fragment } from "react";
import styled from 'styled-components'


const Field = styled.div`
  border-radius: 4px;

  input, select {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`

const QuestionWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`

const QuestionHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`

const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`

const QuestionForm = (props) =>{

  return (
    <QuestionWrapper>
      <form onSubmit={props.handleSubmit}>
        <QuestionHeadline>Question Detail</QuestionHeadline>
        <Field>
          <input onChange={props.handleChange} type="text" name="content" placeholder="Content" value={props.question.content}/>
        </Field>
        <Field>
          <select onChange={props.handleChange} type="text" name="teaming_stages">
            <option value="All">All</option>
            <option value="Norming">Norming</option>
            <option value="Forming">Forming</option>
            <option value="Performing">Performing</option>
          </select>
        </Field>
        <Field>
          <input onChange={props.handleChange} type="text" name="appears_day" placeholder="Appears(Day)" value={props.question.appears_day}/>
        </Field>
        <Field>
          <input onChange={props.handleChange} type="text" name="content" placeholder="Frequency" value={props.question.frequency}/>
        </Field>
        <Field>
          <input onChange={props.handleChange} type="text" name="description" placeholder="Type" value={props.question.qtype}/>
        </Field>
        <Field>
          <select onChange={props.handleChange} type="text" name="conditions">
            <option value="Always">Always</option>
            <option value="Rare">Rare</option>
            <option value="Medium">Medium</option>
          </select>
        </Field>
        
        <SubmitBtn type="Submit">Create Question</SubmitBtn>
        { 
          props.error && 
          <Error>{props.error}</Error>
        }
      </form>
    </QuestionWrapper>
  )
}

export default QuestionForm
