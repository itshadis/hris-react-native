import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  title?: string;
  classname?: string;
  children?: ReactNode;
}

const Card = ({ title, classname, children }: Props) => {
  return (
    <View className={[`p-4 bg-white rounded-2xl`, classname].join(" ")}>
      {
        title && <Text className='text-lg font-bold'>{title}</Text>
      }
      {children}
    </View>
  )
}

export default Card