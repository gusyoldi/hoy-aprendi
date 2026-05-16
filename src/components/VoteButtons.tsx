import type { VoteKey } from "./FactCard";

export type VoteButtonsType = Array<{
  voteType: VoteKey;
  emoji: string;
  count: number;
}>;
interface VoteButtonsProps {
  handleVote: (voteType: VoteKey) => void;
  disabled: boolean;
  buttons: VoteButtonsType;
}

interface VoteButtonProps {
  emoji: string;
  count: number;
  disabled: boolean;
  onVote?: (voteType: VoteKey) => void;
  voteType: VoteKey;
}

const VoteButtons = ({ handleVote, disabled, buttons }: VoteButtonsProps) => {
  return (
    <div className="vote-buttons">
      {buttons.map(({ voteType, emoji, count }) => (
        <VoteButton
          onVote={handleVote}
          key={voteType}
          emoji={emoji}
          disabled={disabled}
          voteType={voteType}
          count={count}
        />
      ))}
    </div>
  );
};

const VoteButton = ({
  count,
  emoji,
  disabled,
  onVote,
  voteType,
}: VoteButtonProps) => {
  return (
    <button onClick={() => onVote?.(voteType)} disabled={disabled}>
      {emoji} {count}
    </button>
  );
};

export default VoteButtons;
