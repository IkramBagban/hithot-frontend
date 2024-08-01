import { PropsWithChildren } from 'react';
import { View, Text,TextInput,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

type Iconprops = PropsWithChildren<{
    name:String,
}>

interface Passvalue{
    image:String,
}


const Icons = ({name}:Iconprops) =>{
   switch(name){
    case 'circle':
        return <Icon name='circle-thin' size={38} color="white" />
        break;
    case 'fa-heart':
        return <Icon name='fa-heart' size={58} color="red" />
        break;
    default:

    
   }
}

const UserMode = () => {
    return (
        <View>
            <StoryCard />
        </View>
    );
};



const StoryCard = () =>{
    return(
        <View className='w-screen h-screen  bg-yellow-500'>
          <View className="flex flex-row items-center justify-between p-4 rounded-lg">
        <View className='flex flex-row w-screen'>
      <View className="flex flex-row items-center">    
            
         <Image
         source={{
            uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
          className="w-16 h-16 rounded-full mr-4"
        />
        <View>
          <Text className="text-white font-bold text-lg">Jessica Iskandar</Text>
          <Text className="text-gray-400 text-sm">2hrs</Text>
        </View>

        </View> 
        {/* <View>
            <Text>Button</Text>
        </View> */}
      </View>
     

          {/* <View className='absolute bottom-0 left-0 w-full flex flex-row items-center justify-between'>
          <View className='bg-transparent flex-1'>
      <TextInput
        className='border border-gray-300 p-2 rounded'
        placeholder="Send your message"
      />
          </View>

          <View className='bg-black rounded-full justify-center items-center w-10 h-10 ml-2'>
            <Icons name="fa-heart"/>
          </View>
          <View className='bg-black rounded-full justify-center items-center w-10 h-10 ml-2'>
            <Icons name="fa-heart"/>
          </View>
        </View> */}
        </View>
        </View>
    )
}

export default UserMode;
