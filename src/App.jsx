import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react"




function App() {

  const data = [
    {
      name: "Meelad Raza",
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFos_OjDFhvXA/profile-displayphoto-crop_800_800/B4DZzEtLqxIAAI-/0/1772826707708?e=1775088000&v=beta&t=5YOHOGED9QHAF410Xl3S1ghsE7HQ5vyRp53NQhtSLhs',
      text: "Passionate frontend developer who loves building modern web apps with React and JavaScript. Coding Night Champion among 1200+ students and always excited to learn new technologies. Focused on improving skills and becoming a professional MERN stack developer."
    },

    {
      name: "Hussain Lodhi",
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQGnYJ8a9uEEtw/profile-displayphoto-scale_200_200/B4EZm_XSR4IMAY-/0/1759852180136?e=1775088000&v=beta&t=U9kCH0D4lHEleG2rFSuGNXX5smr6XV_YXomlCGgOc-8',
      text: "Creative web developer who enjoys turning ideas into beautiful and functional websites. Skilled in HTML, CSS and JavaScript with strong problem solving ability. Always motivated to learn modern tools and build impactful digital products."
    },

    {
      name: "Usama",
      image: "https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/41572297_1961195167265828_8754218435396763648_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_ohc=KS8cHXw1uL0Q7kNvwEIn_AC&_nc_oc=AdmYHbOAiTT2uXuogGilnlPgr3BBLPRpfKg9agwYtyk7_eBgqZU95lmskj7co5OeEdw&_nc_zt=23&_nc_ht=scontent.fkhi10-1.fna&_nc_gid=cnch2WuJntqDOXb0z8t5Xg&_nc_ss=8&oh=00_AfzwgOFAGmwubcJJNlQ07aFBj73JPSjHOhFNmbG6Giqr1g&oe=69DC5916",
      text: "Dedicated programmer with strong interest in web development and modern frameworks. Loves exploring new technologies and improving coding skills every day. Believes in teamwork, continuous learning and building useful applications."
    },

    {
      name: "Talha Mohsin",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQG6L_g71K3zIw/profile-framedphoto-shrink_800_800/B4DZqxjb1zIMAo-/0/1763915447970?e=1774076400&v=beta&t=cA0ZATtZ0YzrSZFuLficj_A03yAqhvcIO4IOeQ8eBtI",
      text: "Enthusiastic developer passionate about creating responsive and user friendly web interfaces. Focused on writing clean code and learning advanced development concepts. Always ready to collaborate and build innovative projects."
    }
  ];

  const [index, setIndex] = useState(0);

  function prevReview() {
    if(index == 0) {
      setIndex(data.length - 1)
    } else {
      setIndex(index - 1)
    }
  };

  function nextReview() {
    if(index === data.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  };

  return (
    <div className = 'div'>
      <h1>Review Slider React Project</h1>

      <img src={data[index].image} width="150" />

      <h2>{data[index].name}</h2>

      <p>{data[index].text}</p>

      <button onClick={prevReview}>Previous</button>

      <button onClick={nextReview}>Next</button>

    </div>
  )

}

export default App
