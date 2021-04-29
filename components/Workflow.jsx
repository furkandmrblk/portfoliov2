import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

export const Workflow = (props) => {
  const data = props.props.fields;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeIn0 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.2,
      },
    },
  };
  const fadeIn2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.4,
      },
    },
  };
  const fadeIn3 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.6,
      },
    },
  };
  const fadeIn4 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.8,
      },
    },
  };
  const fadeIn5 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1,
      },
    },
  };
  const fadeIn6 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1.2,
      },
    },
  };

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

  return (
    <WorkflowContainer>
      <WorkflowBackgroundBlock />
      <WorkflowDiv>
        <WorkflowTitle
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn0}
        >
          Workflow
        </WorkflowTitle>
        <WorkflowItemContainer>
          <WorkflowItemDiv
            onClick={openDescription}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <WorkflowItem>{data.workflowTitle}</WorkflowItem>
            <WorkflowItemArrow id="Arrow" />
          </WorkflowItemDiv>
          <WorkflowDescription open={open}>
            {data.workflowDescription}
          </WorkflowDescription>
          <WorkflowItemDiv
            onClick={openDescription2}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn2}
          >
            <WorkflowItem>{data.workflowTitle2}</WorkflowItem>
            <WorkflowItemArrow id="Arrow2" />
          </WorkflowItemDiv>
          <WorkflowDescription2 open2={open2}>
            {data.workflowDescription2}
          </WorkflowDescription2>
          <WorkflowItemDiv
            onClick={openDescription3}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn3}
          >
            <WorkflowItem>{data.workflowTitle3}</WorkflowItem>
            <WorkflowItemArrow id="Arrow3" />
          </WorkflowItemDiv>
          <WorkflowDescription3 open3={open3}>
            {data.workflowDescription3}
          </WorkflowDescription3>
          <WorkflowItemDiv
            onClick={openDescription4}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn4}
          >
            <WorkflowItem>{data.workflowTitle4}</WorkflowItem>
            <WorkflowItemArrow id="Arrow4" />
          </WorkflowItemDiv>
          <WorkflowDescription4 open4={open4}>
            {data.workflowDescription4}
          </WorkflowDescription4>
          <WorkflowItemDiv
            onClick={openDescription5}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn5}
          >
            <WorkflowItem>{data.workflowTitle5}</WorkflowItem>
            <WorkflowItemArrow id="Arrow5" />
          </WorkflowItemDiv>
          <WorkflowDescription5 open5={open5}>
            {data.workflowDescription5}
          </WorkflowDescription5>
          <WorkflowItemDiv
            onClick={openDescription6}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn6}
          >
            <WorkflowItem>{data.workflowTitle6}</WorkflowItem>
            <WorkflowItemArrow id="Arrow6" />
          </WorkflowItemDiv>
          <WorkflowDescription6 open6={open6}>
            {data.workflowDescription6}
          </WorkflowDescription6>
        </WorkflowItemContainer>
      </WorkflowDiv>
    </WorkflowContainer>
  );
};
