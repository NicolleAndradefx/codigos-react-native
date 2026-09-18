import { View, TouchableOpacity} from "react-native";
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function App(){
  
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Feather 
        name="users"
        //name="slack"
        //name="mic-off"
        //name="cpu"
        size={45}
        color='#ff0000'
      />

      <FontAwesome6 
        iconStyle="solid"
        name="users"
        size={45}
        color='#333333'
      />

      <TouchableOpacity style={{
        backgroundColor: '#a74b5595', width: 100, borderRadius: 5, alignItems: 'center'
      }}>
        <Feather 
          name="video"
          size={60}
          color='#000000'
        />
      </TouchableOpacity>
    </View>
  )
}
