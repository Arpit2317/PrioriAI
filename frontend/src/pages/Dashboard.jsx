import { useState, useEffect } from "react";
import { analyzeTasks } from "../services/gemini";

import Navbar from "../components/Navbar/Navbar";
import RecommendationCard from "../components/RecommendationCard/RecommendationCard";
import TaskList from "../components/TaskList/TaskList";
import CoachCard from "../components/CoachCard/CoachCard";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import StatsCards from "../components/StatsCards/StatsCards";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

import "../styles/Dashboard.css";


export default function Dashboard() { 

  const defaultTasks = [
    {
      id: 1,
      title: "DBMS Assignment",
      deadline: "Tomorrow",
      priority: "High",
      duration: "3 Hours",
      completed: false,
    },
    {
      id: 2,
      title: "Placement Preparation",
      deadline: "Sunday",
      priority: "Medium",
      duration: "2 Hours",
      completed: false,
    },
    {
      id: 3,
      title: "Gym",
      deadline: "Today",
      priority: "High",
      duration: "1 Hour",
      completed: false,
    },
  ];


  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("prioriai-tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : defaultTasks;

  });


  useEffect(() => {

    localStorage.setItem(
      "prioriai-tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);



  const [aiResult, setAiResult] = useState({

    nextAction:
      "Click '✨ Optimize My Day' to receive your personalized AI plan.",

    reason: "",

    coachTip: "",

    productivityScore: "--",

    timeline: [],

  });



  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);



  function handleAddTask(newTask) {

    setTasks((prev) => [

      ...prev,

      {
        ...newTask,
        completed:false,
      }

    ]);



    setAiResult((prev)=>({

      ...prev,

      nextAction:
      "Click '✨ Optimize My Day' to generate a fresh plan.",

      timeline:[]

    }));

  }



  function handleToggleComplete(id) {
  const clickedTask = tasks.find((task) => task.id === id);

  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    )
  );

  // Remove task 3 seconds after marking it completed
  if (clickedTask && !clickedTask.completed) {
    setTimeout(() => {
      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );
    }, 3000);
  }
}





  async function testGemini(){

    setLoading(true);


    const taskPrompt = tasks
      .map((task)=>

`
Task: ${task.title}
Deadline: ${task.deadline}
Priority: ${task.priority}
Estimated Time: ${task.duration}
Status: ${task.completed ? "Completed":"Pending"}
`

      )
      .join("\n");



    try{

      const result =
      await analyzeTasks(taskPrompt);



      const cleaned =
      result.replace(/```json|```/g,"").trim();



      const parsed =
      JSON.parse(cleaned);



      setAiResult(parsed);



    }

    catch(error){

      console.error(
        "AI Error:",
        error
      );

    }



    setLoading(false);

  }





  return (

    <div className="dashboard">


      {loading && <LoadingOverlay />}



      <Navbar />



      <div className="dashboard-container">


        <div className="dashboard-header">


          <div className="header-left">

            <h1>
              Good Evening👋
            </h1>


            <p>
              Your AI-powered productivity dashboard.
            </p>

          </div>



          <div className="header-right">


            <button

              className="secondary-btn"

              onClick={()=>
                setShowModal(true)
              }

            >

              + Add Task

            </button>




            <button

              className="primary-btn"

              onClick={testGemini}

              disabled={loading}

            >

              ✨ Optimize My Day

            </button>



          </div>


        </div>





        <StatsCards

          tasks={tasks}

          productivityScore={
            aiResult.productivityScore
          }

        />







        <div className="dashboard-grid">



          <div className="dashboard-card mission">

            <RecommendationCard

              aiResult={aiResult}

            />

          </div>





          <div className="dashboard-card productivity">


            <div className="score-card">

              <h3>
                🧠 Productivity Score
              </h3>


              <div className="score-value">

                {aiResult.productivityScore}%

              </div>


              <p>
                AI Performance Rating
              </p>


            </div>


          </div>






          <div className="dashboard-card tasks">


            <TaskList

              tasks={tasks}

              onToggleComplete={
                handleToggleComplete
              }

            />


          </div>







          <div className="dashboard-card timeline">


            <TimelineCard

              timeline={
                aiResult.timeline
              }

            />


          </div>







          <div className="dashboard-card coach">


            <CoachCard

              aiResult={aiResult}

            />


          </div>



        </div>






        <AddTaskModal

          isOpen={showModal}

          onClose={()=>
            setShowModal(false)
          }

          onAddTask={
            handleAddTask
          }

        />



      </div>


    </div>

  );

}