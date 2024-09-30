"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image, Listbox, ListboxItem } from "@nextui-org/react";
import { SiNextdotjs, SiReact } from "react-icons/si";
import { Fade } from "react-swift-reveal";
import Typewriter from "react-ts-typewriter";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkExp = () => {
  const title = (
    <div className="flex">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="S_logo.jpeg" alt="LOGO" width={30} height={30} />
      </Button>
      <Typewriter text="PROFESSIONAL EXPERIENCE" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-200 py-6" id="WorkExperince">
      <Center>
        <Title title={title} />
        <Fade duration={1000} delay={500} distance="200px" bottom>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                @ CIB Egypt
              </h4>

              <Listbox>
                <ListboxItem
                  key="new"
                  className="text-danger font-bold text-lg"
                  color="danger"
                >
                  I am Responsible for:
                </ListboxItem>
                <ListboxItem key="new">
                  •Developing and implementing user interfaces,
                </ListboxItem>
                <ListboxItem key="copy">
                  •Creating dynamic and interactive .
                </ListboxItem>

                <ListboxItem key="edit">
                  •Data fetching and API integration using RTKQuery.
                </ListboxItem>
                <ListboxItem key="4">• state management with RTK.</ListboxItem>
              </Listbox>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiNextdotjs />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                Frontend Next Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                @ OFFTO
              </h4>

              <Listbox>
                <ListboxItem
                  key="new"
                  className="text-danger font-bold text-lg"
                  color="danger"
                >
                  I am Responsible for:
                </ListboxItem>
                <ListboxItem key="2">
                  •Developing and implementing user interfaces,
                </ListboxItem>
                <ListboxItem key="copy">
                  •Creating dynamic and interactive UIs using Next Ui.
                </ListboxItem>

                <ListboxItem key="edit">
                  • API integration using React Query Axios.
                </ListboxItem>
                <ListboxItem key="4">
                  • State management using Redux and Zustand.
                </ListboxItem>
              </Listbox>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="10-2021 - 4-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                Senior Frontend React Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                @ SQM , Egypt
              </h4>

              <div className="text-danger font-bold text-lg">
                I am Responsible for:
              </div>
              <div className="text-xs">
                <ul className="list-disc">
                  <li>Built a comprehensive real estate admin platform,</li>
                  <li>
                    focusing on feature development, form validation, and
                    performance optimization.
                  </li>
                  <li>
                    {" "}
                    Worked extensively with TypeScript, Redux Toolkit, and React
                    for the platform frontend.
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                Frontend React Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                @ Future of Egypt ,Egypt Army
              </h4>

              <Listbox>
                <ListboxItem
                  key="new"
                  className="text-danger font-bold text-lg"
                  color="danger"
                >
                  I am Responsible for:
                </ListboxItem>
                <ListboxItem key="new">
                  •Developing and implementing user interfaces,
                </ListboxItem>
                <ListboxItem key="copy">
                  •Creating dynamic and interactive UIs using MUI Ui.
                </ListboxItem>

                <ListboxItem key="edit">
                  •Data fetching and API integration using Axios.
                </ListboxItem>
                <ListboxItem key="4">
                  • state management with Context Api.
                </ListboxItem>
              </Listbox>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Fade>
      </Center>
    </div>
  );
};

export default WorkExp;
