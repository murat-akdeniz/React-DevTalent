import React from "react";


// Import react-circular-progressbar module and styles
import {
   CircularProgressbar,
   buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";



const CircleProgress = (props) => {

   return (
      <Circle>
         <AnimatedProgressProvider
            valueStart={0}
            valueEnd={78}
            duration={2}
            easingFunction={easeQuadInOut}

         >
            {value => {
               const roundedValue = Math.round(value);
               return (
                  <CircularProgressbar
                     value={value}
                     text={`${roundedValue}%`}

                     styles={buildStyles({
                        textColor: "#241E6B",
                        pathColor: props.pieColor ? '#2F89FC' : '#30E3CA',
                        trailColor: "#FDFDFD"
                     })}
                  />
               );
            }}
         </AnimatedProgressProvider>
      </Circle>
   )
}



const Circle = (props) => {
   return (
      props.children
   )
}




export default CircleProgress
