import React from "react";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import tabsStyles from "./tabs.module.css";
import { motion } from "framer-motion";

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return (
    <li className={tabsStyles.tabsList__item} onClick={onClick}>
      {children}
    </li>
  );
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <>{children}</> : null;
};

const TabsVertical = () => (
  <section className={tabsStyles.tabs}>
    <Tabs>
      <ul className={tabsStyles.tabsList}>
        <Tab>
          {/* <button className={tabsStyles.tabsList__item-button}> */}
          <a href="#tab1" className={tabsStyles.tabsList__itemLink}>
            Profile
          </a>
          {/* </button> */}
        </Tab>

        <Tab>
          {/* <button className={tabsStyles.tabsList__item-button}> */}
          <a href="#tab2" className={tabsStyles.tabsList__itemLink}>
            Experience
          </a>
          {/* </button> */}
        </Tab>

        <Tab>
          {/* <button className={tabsStyles.tabsList__item-button}> */}
          <a href="#tab3" className={tabsStyles.tabsList__itemLink}>
            Personality
          </a>
          {/* </button> */}
        </Tab>
      </ul>

      <Panel>
        <motion.div className={tabsStyles.tabsText}>
          <p>Text 1</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
        </motion.div>
        <div className={tabsStyles.tabsImg}>
          <img
            src="https://source.unsplash.com/random#500x1000"
            alt="tab show"
          ></img>
        </div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text 2</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
        </div>
        <div className={tabsStyles.tabsImg}>
          <img
            src="https://source.unsplash.com/random#500x1000"
            alt="tab show"
          ></img>
        </div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text 3</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            blanditiis, aut voluptas quibusdam maxime expedita quaerat quo
            consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati
            quibusdam accusantium blanditiis provident labore.{" "}
          </p>
        </div>
        <div className={tabsStyles.tabsImg}>
          <img
            src="https://source.unsplash.com/random#500x1000"
            alt="tab show"
          ></img>
        </div>
      </Panel>
    </Tabs>
  </section>
);

export default TabsVertical;
