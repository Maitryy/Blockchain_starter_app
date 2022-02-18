// import  React, { Component } from "react";
// import Particles from 'react-tsparticles';
// import { tsParticles } from "https://cdn.skypack.dev/tsparticles";

// class ParticleSettings extends Component{
//     render() {
//         return (
//             <div>
//                 {/* <Particles
//                    height="1000px" width="100vw"
//                    id="tsparticles"
//                    options={{
//                        background:{
//                            color:{
//                                value: "#0d47a1"
//                            },
//                        },
//                        fpsLimit:60,
//                        interactivity:{
//                            detect_on: 'canvas',
//                            events:{
//                                onClick:{
//                                    enable: 'true',
//                                    mode: 'push'
//                                },
//                                onHover: {
//                                    enable: 'true',
//                                    mode: 'repulsive'
//                                },
//                                resize : 'true',
//                            },
//                            modes: {
//                                bubble:{
//                                    distance: 400,
//                                    duration: 2,
//                                    opacity: 0.8,
//                                    size: 40,
//                                },
//                                push:{
//                                    quantity: 4,
//                                },
//                                repulse:{
//                                    distance: 200,
//                                    duration: 0.4,
//                                },
//                            }
//                        }
//                    }} 
//                 /> */}
                




//             </div>
//         )
//     }
// }

// export default ParticleSettings;

import * as React from "react";
import Particles from "react-tsparticles";
import "./styles.css";

export default function ParticleSettings() {
  return (
    <div className="App">
      <Particles
        params={{
            background:{
                           color:{
                               value: "#000"
                           },
                       },
          fpsLimit: 10,
          particles: {
            color: {
              value: "#fff"
            },
            links: {
              enable: true,
              color: "#fff",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
    </div>
  );
}
