import React, { useRef, useEffect, useState } from 'react';
import {
  WorkflowBackgroundBlock,
  WorkflowContainer,
  WorkflowDescription,
  WorkflowDescription2,
  WorkflowDescription3,
  WorkflowDescription4,
  WorkflowDescription5,
  WorkflowDescription6,
  WorkflowDiv,
  WorkflowItem,
  WorkflowItemArrow,
  WorkflowItemContainer,
  WorkflowItemDiv,
  WorkflowTitle,
} from './Workflow.styled';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Workflow = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const openDescription = () => {
    setOpen(!open);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
  };
  const openDescription2 = () => {
    setOpen2(!open2);

    if (open === true) {
      setOpen(!open);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
  };
  const openDescription3 = () => {
    setOpen3(!open3);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open === true) {
      setOpen(!open);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
  };
  const openDescription4 = () => {
    setOpen4(!open4);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open === true) {
      setOpen(!open);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
  };
  const openDescription5 = () => {
    setOpen5(!open5);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open === true) {
      setOpen(!open);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
  };
  const openDescription6 = () => {
    setOpen6(!open6);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open === true) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (open === true) {
      document.getElementById('Arrow').style.transform = 'rotate(180deg)';
    } else if (open === false) {
      document.getElementById('Arrow').style.transform = 'rotate(0deg)';
    }
    if (open2 === true) {
      document.getElementById('Arrow2').style.transform = 'rotate(180deg)';
    } else if (open2 === false) {
      document.getElementById('Arrow2').style.transform = 'rotate(0deg)';
    }
    if (open3 === true) {
      document.getElementById('Arrow3').style.transform = 'rotate(180deg)';
    } else if (open3 === false) {
      document.getElementById('Arrow3').style.transform = 'rotate(0deg)';
    }
    if (open4 === true) {
      document.getElementById('Arrow4').style.transform = 'rotate(180deg)';
    } else if (open4 === false) {
      document.getElementById('Arrow4').style.transform = 'rotate(0deg)';
    }
    if (open5 === true) {
      document.getElementById('Arrow5').style.transform = 'rotate(180deg)';
    } else if (open5 === false) {
      document.getElementById('Arrow5').style.transform = 'rotate(0deg)';
    }
    if (open6 === true) {
      document.getElementById('Arrow6').style.transform = 'rotate(180deg)';
    } else if (open6 === false) {
      document.getElementById('Arrow6').style.transform = 'rotate(0deg)';
    }
  });

  let Title = useRef(null);
  let Item01 = useRef(null);
  let Item02 = useRef(null);
  let Item03 = useRef(null);
  let Item04 = useRef(null);
  let Item05 = useRef(null);
  let Item06 = useRef(null);

  useEffect(() => {
    gsap.from(Title, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item02,
      },
    });
    gsap.from(Item01, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item03,
      },
    });
    gsap.from(Item02, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item04,
      },
    });
    gsap.from(Item03, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item05,
      },
    });

    setTimeout(() => {
      gsap.from(Item04, 1.5, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: Item06,
        },
      });
      gsap.from(Item05, 1.5, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: Item05,
        },
      });
      gsap.from(Item06, 1.5, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: Item06,
        },
      });
    }, 300);
  }, []);

  return (
    <WorkflowContainer>
      <WorkflowBackgroundBlock />
      <WorkflowDiv>
        <WorkflowTitle ref={(el) => (Title = el)}>Workflow</WorkflowTitle>
        <WorkflowItemContainer>
          <WorkflowItemDiv
            ref={(el) => (Item01 = el)}
            onClick={openDescription}
          >
            <WorkflowItem>01 Discovery Session</WorkflowItem>
            <WorkflowItemArrow id="Arrow" />
          </WorkflowItemDiv>
          <WorkflowDescription open={open}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription>
          <WorkflowItemDiv
            ref={(el) => (Item02 = el)}
            onClick={openDescription2}
          >
            <WorkflowItem>02 Analysis</WorkflowItem>
            <WorkflowItemArrow id="Arrow2" />
          </WorkflowItemDiv>
          <WorkflowDescription2 open2={open2}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription2>
          <WorkflowItemDiv
            ref={(el) => (Item03 = el)}
            onClick={openDescription3}
          >
            <WorkflowItem>03 UI/UX Design</WorkflowItem>
            <WorkflowItemArrow id="Arrow3" />
          </WorkflowItemDiv>
          <WorkflowDescription3 open3={open3}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription3>
          <WorkflowItemDiv
            ref={(el) => (Item04 = el)}
            onClick={openDescription4}
          >
            <WorkflowItem>04 Prototype</WorkflowItem>
            <WorkflowItemArrow id="Arrow4" />
          </WorkflowItemDiv>
          <WorkflowDescription4 open4={open4}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription4>
          <WorkflowItemDiv
            ref={(el) => (Item05 = el)}
            onClick={openDescription5}
          >
            <WorkflowItem>05 Development</WorkflowItem>
            <WorkflowItemArrow id="Arrow5" />
          </WorkflowItemDiv>
          <WorkflowDescription5 open5={open5}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription5>
          <WorkflowItemDiv
            ref={(el) => (Item06 = el)}
            onClick={openDescription6}
          >
            <WorkflowItem>06 SEO & Deployment</WorkflowItem>
            <WorkflowItemArrow id="Arrow6" />
          </WorkflowItemDiv>
          <WorkflowDescription6 open6={open6}>
            The Discovery Session is an important step in the process of a
            project. In order to create a great product we first need to gain
            crucial information to begin the analysis.
          </WorkflowDescription6>
        </WorkflowItemContainer>
      </WorkflowDiv>
    </WorkflowContainer>
  );
};
