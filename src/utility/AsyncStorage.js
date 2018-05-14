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

export const getMessageContent = async () => {
  let item = await AsyncStorage.getItem('messageContent');
  return JSON.parse(item)
}

export const setMessageContent = async (content) => {
  const old = await getMessageContent()
  const newContent = [...old, content]
  await AsyncStorage.setItem('messageContent', JSON.stringify(newContent));

  return newContent
}

export const updateMessageContent = async (content) => {
  let allContent = await getMessageContent()
  const idx = allContent.findIndex((el) => el.key === content.key)
  allContent[idx] = content
  await AsyncStorage.setItem('messageContent', JSON.stringify(allContent));

  return allContent
}
