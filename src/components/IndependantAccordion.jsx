import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

function IndependantAccordion(props) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="bg-gray-200">
      <p
        onClick={() => setCollapsed(!collapsed)}
        className="title cursor-pointer p-4 border-b-2 border-gray-500 flex justify-between"
      >
        {props.title}
        <button className="text-xl">
          {collapsed ? <BsChevronDown /> : <BsChevronUp />}
        </button>
      </p>
      <div className={`content p-5 ${collapsed ? "hidden" : ""} transition`}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default IndependantAccordion;
