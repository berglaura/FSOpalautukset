import React from 'react';

const Course = ({ course }) => {

    const Header = ({ course }) => {
        return (
          <h1>{course.name}</h1>
        );
    }
  
    const Part = ({ name, exercise }) => {
        return (
            <p>{name} {exercise}</p>
        )
    }
  
    const Content = ({ course }) => course.parts.map(part =>
        <Part key={part.id} name={part.name} exercise={part.exercises}/>)
        
    
  
    const Total = ({ course }) => <p><strong>total of {course.parts.reduce((sum, part) => 
                (sum + part.exercises), 0)} exercises</strong></p>


    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default Course