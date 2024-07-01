import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type iconprops= PropsWithChildren<{
    name:string
}>
const Icons=({name}:iconprops) => {
  switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color={'#192A56'}
         />
        
        break;
        case 'cross':
            return <Icon name='times' size={38} color={'#E71C23'}/>
  
    default:
        return <Icon name='pencil' size={38} color={'#4834DF'}/>
        break;
  }
}

export default Icons