import { connect} from 'react-redux';
import { fetchCar, deleteCar } from '../../actions/car_actions';
import CarShow from './car_show';
import { openModal, closeModal } from '../../actions/modal_actions';

import { fetchRentals } from '../../actions/rental_actions';

import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
  // debugger
  const carId = ownProps.match.params.id; 
  return {
    car: state.entities.cars[carId],
    currentUserId: state.session.id,
    // reviews: state.entities.
  };
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id)),
  deleteCar: (id) => dispatch(deleteCar(id)),

  openModal: (modal) => dispatch(openModal(modal)),

  // fetchRentals: () => dispatch(fetchRentals()),

  fetchReviews: (id) => dispatch(fetchReviews(id))

});

export default connect(
  mSTP,
  mDTP
)(CarShow);
