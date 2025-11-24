import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  title?: string;
  classname?: string;
  children?: ReactNode;
  sideNode?: ReactNode;
}

const Card = ({ title, classname, children, sideNode }: Props) => {
  return (
    <View className={[`p-4 bg-white rounded-2xl`, classname].join(" ")}>
      <View className='flex flex-row justify-between items-center'>
        {
          title && <Text className='text-lg font-bold'>{title}</Text>
        }
        {
          sideNode && sideNode
        }
      </View>
      {children}
    </View>
  )
}

export default Card