import type { VoteKey } from "./FactCard";

interface VoteButtonsProps {
  onVote: (voteType: VoteKey) => void;
  disabled: boolean;
  buttons: Array<{ voteType: VoteKey; emoji: string; count: number }>;
}

interface VoteButtonProps {
  emoji: string;
  count: number;
  disabled: boolean;
  onVote?: (voteType: VoteKey) => void;
  voteType: VoteKey;
}

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

const VoteButtons = ({ onVote, disabled, buttons }: VoteButtonsProps) => {
  return (
    <div className="vote-buttons">
      {buttons.map(({ voteType, emoji, count }) => (
        <VoteButton
          onVote={onVote}
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

export default VoteButtons;
