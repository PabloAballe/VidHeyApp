import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Main = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView>
          {children}
      </ScrollView>
    </SafeAreaView>
  )
}
