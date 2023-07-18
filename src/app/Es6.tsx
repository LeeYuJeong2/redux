import React from "react"

const Es6 = () => {
  const person = {
    name: "yujeong",
    age: 29,
  }

  const { name, age } = person

  console.log(name)
  console.log(age)

  //만약 구조분해할당을 이용하지 않으면 다음과 같이 대입해야한다.
  //const name = person.name
  //const age = person,age

  return <div></div>
}

export default Es6
