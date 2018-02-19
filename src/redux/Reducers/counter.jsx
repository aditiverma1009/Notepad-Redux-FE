const increment = 'INCREMENT';
const decrement = 'DECREMENT';

const defaultValue = {
  count: 0,
};
const counter = (prevState = defaultValue, action) => {
  switch (action.type) {
    case increment: {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    }
    case decrement: {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default counter;
