import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToSchedules } from '../actions/scheduleActions';
import PlusIcon from './icons/PlusIcon';

const AddToScheduleButton = ({ iconSize, buttonText, schedulesList, agendaID, addToSchedules }) => {
  const handleClick = () => addToSchedules(agendaID);
  const disableButton = (list, id) => list.includes(id);

  return (
    <button
      className="d-flex jc-c add-to-schedule"
      disabled={disableButton(schedulesList, agendaID)}
      type="button"
      onClick={handleClick}
    >
      <div className="content ai-c d-flex jc-sb">
        <PlusIcon width={iconSize} height={iconSize} />
        <div className="text">{buttonText}</div>
      </div>
    </button>
  );
};

export default connect(
  ({ schedules: { data: schedulesList } }) => ({ schedulesList }),
  { addToSchedules },
)(AddToScheduleButton);

AddToScheduleButton.propTypes = {
  agendaID: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  iconSize: PropTypes.string,
  addToSchedules: PropTypes.func.isRequired,
  schedulesList: PropTypes.arrayOf(PropTypes.number).isRequired,
};

AddToScheduleButton.defaultProps = {
  buttonText: 'Your Schedule',
  iconSize: '8px',
};
