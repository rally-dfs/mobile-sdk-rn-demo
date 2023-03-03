import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {RlyNetwork} from '../../App';
import {balance as balanceState} from '../state';

export function StandardHeader() {
  const [balance, setBalance] = useRecoilState(balanceState);
  const navigation = useNavigation();

  useEffect(() => {
    const doAsyncWork = async () => {
      if (!balance) {
        const rlyBalance = await RlyNetwork.getBalance();
        setBalance(rlyBalance);
      }
    };
    doAsyncWork();
  }, [balance, setBalance]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.balanceContainer}>
          <Text>{`${balance === undefined ? '-' : balance} RLY`}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={async () => {
            //@ts-ignore
            navigation.navigate('Profile');
          }}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.profilePic}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 108,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF0',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    marginTop: 24,
  },
  profilePic: {
    height: 39,
    width: 39,
  },
  balanceContainer: {
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#19191B',
    borderRadius: 20,
  },
});
