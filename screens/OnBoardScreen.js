import { Image , View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnBoardScreen = () => {
  const navigation = useNavigation();
  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? 'border border-green-400' : ''
        }  p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? 'bg-green-400' : 'bg-green-200'
          } rounded-full`}
        ></View>
      </View>
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.replace('HomeTab')}
      onDone={() => navigation.replace('HomeTab')}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#1b1b1d',
          image: (
            <Image
              source={{
                uri: 'https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg',
              }}
              className="w-72 h-72 object-contain border-r-4"
            />
          ),
          title: 'Happy Shopping',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.',
        },
        {
          backgroundColor: '#1b1b1d',
          image: (
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top',
              }}
              className="w-72 h-72 object-contain border-r-4"
            />
          ),
          title: 'All you need in One PLace',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.',
        },
        {
          backgroundColor: '#1b1b1d',
          image: (
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/woman-shopping-sales-happy-young-holding-paper-bags-enjoying-126694001.jpg',
              }}
              className="w-72 h-72 object-contain border-r-4"
            />
          ),
          title: 'Happy Sale, Happy Customer',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.',
        },
      ]}
    />
  );
};

export default OnBoardScreen;
