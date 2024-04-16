import React from "react";
import { Schedule } from "./components/workoutschedule/Schedule";
import { Route, Routes } from "react-router-dom";
import { BottomBar } from "./components/bottombar/BottomBar";
import { SignUp } from "./components/signup/SignUp";
import { YourGoals } from "./components/yourgoal/YourGoals";
import { WorkoutTracker } from "./components/workouttracker/WorkoutTracker";
import { CreateAc } from "./components/createAc/CreateAc";
import { Goal } from "./components/goalPage/Goal";
import { Burn } from "./components/burnPage/Burn";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Goal />} />
        <Route exact path="/goal" element={<Goal />} />
        <Route exact path="/burn" element={<Burn />} />
        <Route exact path="/createac" element={<CreateAc />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/yourgoals" element={<YourGoals />} />
        <Route exact path="/workouttracker" element={<WorkoutTracker />} />
        <Route exact path="/bottombar" element={<BottomBar />} />
        <Route exact path="/schedule" element={<Schedule />} />
        {/* <Route exact path="*" element={} /> */}
      </Routes>
    </>
  );
}

export default App;
