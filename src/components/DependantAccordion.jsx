import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

function DependantAccordion(props) {
  let setActiveId = props.setActiveId;
  let activeId = props.activeId;
  return (
    <div className="bg-gray-100">
      <p
        onClick={() =>
          props.id != activeId ? setActiveId(props.id) : setActiveId(null)
        }
        className="cursor-pointer p-5 text-lg bg-white border-gray-500 shadow-lg flex justify-between"
      >
        {props.title}
        <button className="text-xl">
          {props.id != activeId ? <BsChevronDown /> : <BsChevronUp />}
        </button>
      </p>
      <div
        className={` p-5 max-h-0 ${
          props.id != activeId
            ? "hidden"
            : " max-h-fit transion-all duration-1000"
        } transition duration-1000`}
      >
        <p dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  );
}

export default DependantAccordion;
