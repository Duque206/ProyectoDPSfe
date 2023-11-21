import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginData = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);

    console.log('token stored Successfully');
  } catch (error) {
    console.error('Error saving login data: ', error);
  }
}

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
    
  } catch (error) {
    console.error('Error getting auth token: ', error);
    return null;
  }
}

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('token deleted successfuly');

} catch (error) {
    console.error('Error logging out: ', error);
  }
}