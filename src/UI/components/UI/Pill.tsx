import { PillProps } from '../../interfaces/UI/UiInterface';

const Pill = ({ icon, label }: PillProps) => {
  return (
    <div className="pill">
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default Pill;
