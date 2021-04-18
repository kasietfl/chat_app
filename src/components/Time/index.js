import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow, parseISO  } from 'date-fns';

const Time = ({ date }) => (
  <Fragment>
    {formatDistanceToNow(new Date(parseISO(date)), { addSuffix: true })}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;