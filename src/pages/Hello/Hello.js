import { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Hello.css";

const PASSIONS = ["Python", "great UX/UI", "photography", "data", "music"];

export const Hello = () => {
  const [passionIndex, setPassionIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (passionIndex === PASSIONS.length - 1) {
        setPassionIndex(0);
      } else {
        setPassionIndex(passionIndex + 1);
      }
    }, 2300);

    return () => clearTimeout(timer);
  }, [passionIndex]);

  return (
    <div className="hello">
      <h1 className="title">
        Hello, I am Daniel. I'm a software engineer who loves{" "}
        <SwitchTransition>
          <CSSTransition
            key={passionIndex}
            classNames="fade"
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            <span className="highlight">{PASSIONS[passionIndex]}</span>
          </CSSTransition>
        </SwitchTransition>
      </h1>
    </div>
  );
};
