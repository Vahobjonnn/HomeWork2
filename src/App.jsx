import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import favicon from "../public/favicon.svg"
import logo1 from "../public/telegram.svg"
import journal from "../public/journal.svg"
import edit from "../public/edit.svg"
export const App = () => {
  const data=[
    {
      id:1,
    group:"Next.js",
    telegram:logo1,
    students:"5",
    qualifiers:"8",
    date:"Oct 5,2026 -Nov 5,2026",
    journal:journal,
    edit:edit,
    branch:"profsouz"
    },
    {
      id:2,
    group:"Figma September 2026",
    telegram:logo1,
    students:"5",
    qualifiers:"2",
    course:"Graphic Design October 2026",
    date:"Oct 5,2026 -Nov 5,2026",
    journal:journal,
    edit:edit,
    branch:"Profsouz"
    },
    {
      id:3,
    group:"Next.js",
    telegram:logo1,
    students:"5",
    qualifiers:"3",
    course:"Graphic Design October 2026",
    date:"Oct 5,2026 -Nov 5,2026",
    journal:journal,
    edit:edit,
    branch:"Profsouz"
    }
  ]
  return (
    <>
{
  data.map((e)=>{
    return <Card key={e.id} {...e}/>
  })
}
    </>
  )
}