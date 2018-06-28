import { connect } from 'react-redux'

import CounterComponent from '../Components/CounterComponent'

// Define all variable for that file which you want to access, example CounterComponent
const mapStateToProps = (state) => ({
     count: state.counterReducer.count
});

//Define all function for that file, example CounterComponent
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: 'INCRE'}),
    decrement: () => dispatch({type: 'DECRE'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

