import './icons.scss';

type IconProps = {
  ariaLabel?: string;
  className?: string;
  description?: string;
  id: string;
};

export const Icon = ({ className = '', ariaLabel, description, id }: IconProps): JSX.Element => (
  <svg role="img" aria-label={ariaLabel} className={`${className} icon`}>
    <use xlinkHref={`#${id.toString()}`} xlinkTitle={description || undefined} />
  </svg>
);
