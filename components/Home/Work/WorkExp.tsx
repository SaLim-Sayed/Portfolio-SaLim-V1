"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { SiNextdotjs, SiReact, SiReacthookform } from "react-icons/si";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Accordion,
  AccordionItem,
  Button,
  Image,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
const WorkExp = () => {
  const title = (
    <div className="flex">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="S_logo.svg" alt="LOGO" width={30} height={30} />
      </Button>
      <Typewriter text="PROFESSIONAL EXPERIENCE" loop delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-200 py-6" id="WorkExperince">
      <Center>
        <Title title={title} />
        <VerticalTimeline>
          {/* <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2017 - 2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Bachelor of Computer Sceince & Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Faculty of Electronic Engineering / Menoufia University
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>

           */}
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

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Center>
    </div>
  );
};

export default WorkExp;
