interface TagProps {
  label: string;
  color: string;
}

const Tag = ({ label, color }: TagProps) => {
  return (
    <span
      className="tag"
      style={{
        backgroundColor: color,
      }}
    >
      {label}
    </span>
  );
};

export default Tag;
