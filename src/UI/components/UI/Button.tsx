import { ButtonProps } from '../../interfaces/UI/UiInterface';

const Button = ({
  icon,
  size = 'md',
  color = 'green',
  variant = 'solid',
  onClick,
  title,
  type = 'button',
  children,
  disabled,
  role = 'button',
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${size} btn--${variant} btn--${color}`}
      onClick={onClick}
      title={title}
      type={type}
      disabled={disabled}
      role={role}
    >
      {children}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
