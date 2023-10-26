import axios from 'axios';

const getUserOrders = async (userId) => {
  try {
    const { data } = await axios.get(`/api/order/${userId}`);

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getUserOrders;
