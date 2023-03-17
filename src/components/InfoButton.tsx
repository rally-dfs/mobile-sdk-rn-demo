import React, {ReactNode, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function InfoButton({children}: {children: ReactNode}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <TouchableHighlight
        style={styles.clickContainer}
        onPress={() => {
          setShowInfo(true);
        }}>
        <Image
          source={require('../../assets/images/Info.png')}
          style={styles.infoIcon}
        />
      </TouchableHighlight>
      <Modal visible={showInfo} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContentContainer}>
            <View style={styles.closeButtonContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowInfo(false);
                }}>
                <Text style={styles.closeIcon}>{'\u2715'}</Text>
              </TouchableWithoutFeedback>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  infoIcon: {
    height: 25,
    width: 25,
  },
  clickContainer: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    zIndex: 100,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#D2D2D2',
  },
  modalContentContainer: {
    backgroundColor: '#FAFAFA',
    height: '70%',
    marginTop: 64,
    width: '80%',
    alignSelf: 'center',
    padding: 24,
    borderRadius: 40,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    marginRight: 8,
    marginBottom: 12,
  },
  closeIcon: {
    fontSize: 18,
  },
});
