import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import {useNavigation} from '@react-navigation/native';

const statusPesanan = () => {
    const navigation = useNavigation();
    let {width, height} = Dimensions.get('window');
    height = height - height * 0.108;
    return(
    <ScrollView>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bag}
            />
          </View>
          <Text style={styles.teksToko}>TobangaDO</Text>
          <Text style={styles.teksStatus}>Status: Dikemas</Text>
        </View>   
        <View >   
            <TouchableOpacity
              onPress={() => navigation.navigate('')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tekan disini untuk hubungi penjual</Text>
              </View>
            </TouchableOpacity>  
            <View style={styles.items}>
            <Image source={require('../assets/dancow.png')} />
            <Text style={{fontSize: 24, color: 'black'}}>Dancow</Text>
            <Text style={{fontSize: 13, color: 'black'}}>Rp. 5000 x 2 </Text>
            </View>
         
        </View> 
      </View>
    </ScrollView>

    )
}

const styles = StyleSheet.create({
bgsquare: {
    width: '100%',
    height: '35%',
    backgroundColor: '#0E49B5',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgIcon: {
    width: 100,
    height: 100,
    borderRadius: 130 / 2,
    backgroundColor: '#E4E3E3',
    padding: '5%',
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
  },
  bag: {
    width: '90%',
    height: '90%',
    
  },
  teksToko: {
    marginTop: 10,
    fontSize: 32,
    color: 'white',
   fontWeight: 'bold'
  },
  teksStatus: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#0E49B5',
    height: '26%',
    width: '90%',
    padding: 4,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: '4%',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  produk: {
    
    alignItems: 'center',
  },
  items: {
    width: Dimensions.get('window').width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
    margin: '2%',
  },
});

export default statusPesanan;