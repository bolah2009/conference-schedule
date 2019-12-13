import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToSchedules, removeSchedule } from '../actions/scheduleActions';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

const AddToScheduleButton = ({
  iconSize,
  buttonText,
  schedulesList,
  agendaID,
  addToSchedules,
  removeSchedule,
}) => {
  const buttonScheduleID = schedulesList.find(({ agenda_id: id }) => agendaID === id);
  const handleClick = () => {
    if (buttonScheduleID) {
      const { id: scheduleID } = buttonScheduleID;
      removeSchedule(scheduleID);
    } else {
      addToSchedules(agendaID);
    }
  };

  let text;
  if (buttonText !== 'Your Schedule') {
    text = buttonScheduleID ? 'Remove from your schedule' : 'Add to your schedule';
  }

  return (
    <button
      id={buttonScheduleID ? 'remove' : 'add'}
      className="d-flex jc-c add-to-schedule"
      type="button"
      onClick={handleClick}
    >
      <div className="content ai-c d-flex jc-sb">
        {buttonScheduleID ? (
          <MinusIcon width={iconSize} height={iconSize} />
        ) : (
          <PlusIcon width={iconSize} height={iconSize} />
        )}
        <div className="text">{text || buttonText}</div>
      </div>
    </button>
  );
};

export default connect(
  ({ schedules: { data: schedulesList } }) => ({ schedulesList }),
  { addToSchedules, removeSchedule },
)(AddToScheduleButton);

AddToScheduleButton.propTypes = {
  agendaID: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  iconSize: PropTypes.string,
  addToSchedules: PropTypes.func.isRequired,
  removeSchedule: PropTypes.func.isRequired,
  schedulesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      agenda_id: PropTypes.number,
    }),
  ),
};

AddToScheduleButton.defaultProps = {
  buttonText: 'Your Schedule',
  iconSize: '8px',
  schedulesList: [],
};
