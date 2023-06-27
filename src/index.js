import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro/>
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar(){
  return(
    <img   className="avatar" src="a01.jpg" alt="My Avatar"/>
  );
}

function Intro(){
  return(
    <div>
      <h1>นางสาวจิราวรรณ ผางพันธ์</h1>
      <p>นักเรียนนักศึกษา ชั้นปีที่ 3 เทียบโอน รหัสนักศึกษา 66114640206 สาขาวิชาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี งานอดิเรก ชอบฟังเพลง ดูหนัง อ่านหนังสือ เล่นเกม ออกกำลังกาย 
        ชอบขายขำตัวเอง ถ้าไม่ได้ทำทั้งหมดนี่ก็คือ นอน.....
      </p>
    </div>
    
  );
}
function SkillList(){
  return(
    <div className="skill-list">
        <Skill skill = "HTML" emoji = "😃" color = "#D3D04F"/>
        <Skill skill = "CSS"  emoji = "😄" color = "#FF6666"/>
        <Skill skill = "Javascript" emoji = "🥺" color = "#ED2B2A"/>
        <Skill skill = "PHP" emoji = "🙂" color = "#64CCC5"/>
        <Skill skill = "React" emoji = "😵" color = "#19376D"/>
       
    </div>
  );
}
function Skill(props){
  return(
    <div className="skill" style={{backgroundColor:props.color,}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
