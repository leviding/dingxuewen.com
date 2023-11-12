import { Icon } from '@/components';

interface Props {
  label?: string;
  date: string;
  noIcon?: boolean;
  className?: string;
}

const Date = ({ label, date, noIcon = false, className }: Props) => {
  return (
    <div
      className={`${
        className || ''
      } flex items-center whitespace-nowrap text-sm mb-1 text-gray-600 dark:text-gray-300`}
    >
      {!noIcon && <Icon icon="calendar" iconDark="calendar-lighter" />}
      {label && <div className="text-gray-800 dark:text-gray-200">{label || ''}</div>}
      {date.slice(0, date.indexOf('T'))}
    </div>
  );
};

export default Date;
