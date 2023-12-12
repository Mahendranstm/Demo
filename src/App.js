import React from "react";

const App = () => {
  return (
    <div className="app w-11/12 mx-auto flex justify-center items-center flex-col">
      <div>
        <p className=" font-display text-2xl">
          MindBlowing Morning: Wellness Program
        </p>
        <p className=" font-display text-xl">By Mandar, Yoga Instructor</p>

        <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
        <span className="  mr-2 text-xs">4.5 rating</span>
        <i class="fa-solid fa-user-group text-yellow-400 mx-1"></i>
        <span className=" ml-2 text-xs">Students</span>
        <div className=" relative">
          <img
            src="https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg"
            alt="yoga"
            height="500px"
            width="500px"
          />
          <p className=" bg-yellow-200 text-2xl text-center p-2">
            Start Learning
          </p>
          <i class="fa-solid fa-play absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white border-2 border-solid border-white rounded-full p-3"></i>
        </div>
        <div className=" flex justify-between mt-2">
          <div className=" flex flex-col gap-2">
            <p className=" text-base font-semibold font-sans">Course Content</p>
            <p>21 Sessions</p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-base font-semibold font-sans">Course Content</p>
            <p>21 Sessions</p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-base font-semibold font-sans">Course Content</p>
            <p>21 Sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
