import React from "react"
import { FaCode, FaDatabase, FaBrain } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I can integrate the frontend with the backend and end up knowing what I'm doing at the end of it. Whether its Node or C# I can do it!`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "database development",
    text: `Whether its SQL or MongoDB with libraries like Sequelize I am proficient with databases when it comes to developing applications.`,
  },
  {
    id: 3,
    icon: <FaBrain className="service-icon" />,
    title: "highly adaptable",
    text: `Throw me at a framework, library or programming language and I can within a reasonable time learn it enough to make use of it.`,
  },
]
