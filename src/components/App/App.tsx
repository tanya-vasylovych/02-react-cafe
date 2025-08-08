import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css";
import { useState } from "react";
import { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";


function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });


 const handleVote = (value: VoteType) => {
    setVotes(votes => ({
      ...votes,
      [value]: votes[value] + 1,
    }));
  };
  
  const resetVotes = () => {
   setVotes({ good: 0, neutral: 0, bad: 0 });
}
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0}/>
      {totalVotes > 0 ? (
          <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/>
        ) : (<Notification/>)  
      } 
      
    

</div>
  );
}

    
export default App;
