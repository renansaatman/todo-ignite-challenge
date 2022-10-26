import { TouchableOpacity, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

type TaskProps = {
  title: string
  onChecked: () => void
  onRemove: () => void
  toggleCheckBox: boolean
}

export function Task({ title, onChecked, toggleCheckBox, onRemove} : TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={toggleCheckBox ? styles.checked : styles.notChecked}
        onPress={onChecked}
      >
        {toggleCheckBox ? <Ionicons name="checkmark-sharp" size={16} color="#F2F2F2" /> : null}
      </TouchableOpacity>

      <Text style={toggleCheckBox ? styles.titleWhenChecked : styles.title}>
        {title}
      </Text>


      <TouchableOpacity 
        style={styles.trashArea}
        onPress={onRemove}
      >
        <Ionicons name="trash-outline" size={24} color="#808080" />
      </TouchableOpacity>

    </View>
  );
}