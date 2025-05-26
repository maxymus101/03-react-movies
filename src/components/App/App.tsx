import { useState } from "react";
import css from "../App/App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import type { Votes, VoteType } from "../../types/votes.ts";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

export default function App() {
  const [votes, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVote((value) => ({
      ...value,
      [type]: value[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = votes;
  const totalVotes = good + neutral + bad;
  const positiveRate = totalVotes ? Math.round((good / totalVotes) * 100) : 0;
  const canReset = totalVotes > 0 ? true : false;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
