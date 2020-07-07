import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import Question from './Question'
import QuestionForm from './QuestionForm'

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
`

const Mapping = (props) => {
  const [mapping, setMapping] = useState({})
  const [question, setQuestion] = useState({})
  const [loaded, setLoaded] = useState(false)


  useEffect( () =>{
    const id = props.match.params.id
    const url = '/api/v1/mappings/' + id + '.json'
    axios.get(url)
    .then( resp => {
      setMapping(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setQuestion(Object.assign({}, question, {[e.target.name]: e.target.value}))
  }

  // Create a question
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  let questions
  if (mapping.included && mapping.included.length > 0) {
    questions = mapping.included.map( (question, index) => {
      return (
        <Question 
          key={index}
          content={question.attributes.content}
          teaming_stages={question.attributes.teaming_stages} 
          qtype={question.attributes.qtype}  
        />
      )
    })
  }

  return(
    <div>
      <Column>
        { 
          loaded &&
          <Header 
            name={mapping.data.attributes.name}
            id={mapping.data.attributes.id}
            questions={mapping.included}
          />
        }

        <div className="reviews">
          {questions}
        </div>

      </Column>
      <Column>
        <QuestionForm
          question={question}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
         />
      </Column>
    </div>
  )
}

export default Mapping