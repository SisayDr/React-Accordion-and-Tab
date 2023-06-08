import DependantAccordion from "./components/DependantAccordion";
import { useState } from "react";
import defenseNotes from "./assets/defenseNotes.json";

function App() {
  const [activeId, setActiveId] = useState(0);
  const [activeTab, setActiveTab] = useState("Notes");
  return (
    <>
      <div className="sm:w-11/12 max-w-5xl mx-auto p-2 md:p-16 my-10 bg-white/20 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg space-y-5 font-mono italic">
        {/* <h1 className="text-center text-4xl text-white shadow-xl mx-auto mb-12 p-4 bg-white/5 rounded-lg italic">
          Defense Notes
        </h1> */}
        <div className="flex gap-2 justify-evenly px-4 pt-5 flex-wrap">
          <button
            onClick={() => setActiveTab("CommonQuestions")}
            className={
              "text-white p-2 min-w-[25%] rounded-lg flex-grow " +
              (activeTab == "CommonQuestions"
                ? "bg-indigo-400 text-lg"
                : "bg-slate-500")
            }
          >
            Common Questions
          </button>
          <button
            onClick={() => setActiveTab("Notes")}
            className={
              "text-white p-2 min-w-[25%] rounded-lg flex-grow " +
              (activeTab == "Notes" ? "bg-indigo-400 text-lg" : "bg-slate-500")
            }
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab("CommonMistakes")}
            className={
              "text-white p-2 min-w-[25%] rounded-lg flex-grow " +
              (activeTab == "CommonMistakes"
                ? "bg-indigo-400 text-lg"
                : "bg-slate-500")
            }
          >
            Common Mistakes
          </button>
        </div>
        {activeTab == "Notes" &&
          defenseNotes["Notes"].map((story, index) => {
            return (
              <DependantAccordion
                key={index}
                id={story.id}
                title={story.title}
                content={story.body}
                setActiveId={setActiveId}
                activeId={activeId}
              />
            );
          })}
        {activeTab == "CommonQuestions" && (
          <ul className="text-md font-mono tracking-tighter italic">
            {defenseNotes["CommonQuestions"].map((question, index) => {
              return (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: question }}
                  className="bg-white p-4 my-4"
                />
              );
            })}
          </ul>
        )}
        {activeTab == "CommonMistakes" && (
          <ul className="text-md font-mono tracking-tighter italic">
            {defenseNotes["CommonMistakes"].map((mistake, index) => {
              return (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: mistake }}
                  className="bg-white p-4 my-4"
                />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
export default App;
