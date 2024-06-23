
import {} from 'react'
import {

  SafeAreaView, ScrollView,StatusBar,StyleSheet
} from 'react-native'
import Header from '../components/Header';
import Firstplayers from '../components/Firstplayers';
import Board from '../components/Board';
import Secondplayer from '../components/Secondplayer';


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})


function App(): JSX.Element {
  
  return (
    <>
    
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor='black' />
    <ScrollView>
      <Header/>
    <Firstplayers/>
     <Board/>
     <Secondplayer/>
    </ScrollView>
  </SafeAreaView>
  </>
  );
}


export default App;
