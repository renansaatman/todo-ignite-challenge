import { View, Image, Text } from 'react-native';

import { styles } from './styles';

const logoImg = require('../../assets/logo-todo-3x.png')

export function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={{width: 110, height: 32}}
      />
    </View>
  );
}