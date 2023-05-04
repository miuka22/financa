import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './Componetes/TelaLogin';
import TelaCadastro from './Componetes/TelaCadastro';
import TelaEsqueceu from './Componetes/TelaEsqueceu';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Esqueceu" component={TelaEsqueceu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
