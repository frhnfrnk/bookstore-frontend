import React, {useContext, useState} from "react";
import styled from "styled-components";
import { SwitchThemeContext } from "../../context/SwitchTheme";


const ButtonSwitch = () => {
     


    const {theme, setTheme} = useContext(SwitchThemeContext)
    const handleChange = () =>{
        if (theme === 'dark') {
            setTheme('light')
          } else {
            setTheme('dark')
          }
    }
    // const checkbox = document.querySelector(".theme-switcher");

    // checkbox.addEventListener("change", function() {
    //     if (this.checked) {
    //       setTheme('light')
    //     } else {
    //       setTheme('dark')
    //     }
    //   });

    return (
        <>
            <Container>
                <div>
                        <div class="content">
                            <div class="demo">
                            <label class="switch">
                                <input type="checkbox" class="theme-switcher" onClick={handleChange}/>
                                <span class="slider round"></span>
                            </label>
                            </div>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default ButtonSwitch

const Container = styled.div`

@import url(https://fonts.googleapis.com/css?family=Lato:700);
:root {
  /* light */
  --c-light-background: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  --c-light-checkbox: #fce100;
  /* dark */
  --c-dark-background:linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
  --c-dark-checkbox: #757575;
}

.grid {
  display: grid;
  justify-items: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  font-family: "Lato", sans-serif;
}

.demo {
  font-size: 32px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch .theme-switcher {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #757575;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "🌑";
  height: 0px;
  width: 0px;
  left: -10px;
  top: 16px;
  line-height: 0px;
  transition: 0.4s;
}

.theme-switcher:checked + .slider:before {
  left: 4px;
  content: "🌞";
}

.theme-switcher:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

`

