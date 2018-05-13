import { AsyncStorage } from 'react-native'
import contactType from '../constants/contactType';

export const getContact = async () => {
  let item = await AsyncStorage.getItem('contact');
  return JSON.parse(item)
}

export const setContact = async (contact) => {
  await AsyncStorage.setItem('contact', JSON.stringify(contact));
}

export const setPosition = async (position) => {
  await AsyncStorage.setItem('position', JSON.stringify(position));
}

