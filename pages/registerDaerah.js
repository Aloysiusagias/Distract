import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const registerDaerah = () => {
  let {width, height} = Dimensions.get('window');
  const [province, setProvince] = useState('Select');
  const navigation = useNavigation();
  height = height - height * 0.035;
  return (
    <ScrollView>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare} />
        <View style={styles.container}>
          <Text style={styles.teksPendaftaran}>Pendaftaran</Text>
          <View style={styles.container5}>
            <Image source={require('../assets/person.png')} />
          </View>
          <View style={styles.containerIsi}>
            <View style={[styles.input, {marginTop: '20%'}]}>
              <Text style={styles.teksKet}>Provinsi</Text>
              <Picker
                selectedValue={province}
                onValueChange={(item, index) => setProvince(item)}
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                <Picker.Item label="Jawa Tengah" value="Jawa Tengah" />
                <Picker.Item label="Jawa Timur" value="Jawa Timur" />
                <Picker.Item label="Jawa Barat" value="Jawa Barat" />
              </Picker>
            </View>
            <View style={[styles.input, {marginVertical: '5%'}]}>
              <Text style={styles.teksKet}>Kabupaten</Text>
              <Picker
                selectedValue={province}
                onValueChange={(item, index) => setProvince(item)}
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                <Picker.Item label="Pati" value="Pati" />
                <Picker.Item label="Sragen" value="Sragen" />
                <Picker.Item label="Karang Anyar" value="Karang Anyar" />
              </Picker>
            </View>
            <View style={styles.input}>
              <Text style={styles.teksKet}>Kecamatan</Text>
              <Picker
                selectedValue={province}
                onValueChange={(item, index) => setProvince(item)}
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                <Picker.Item label="Karang Malang" value="Karang Malang" />
                <Picker.Item label="Dayueh Kolot" value="Dayueh Kolot" />
                <Picker.Item label="Sragen" value="Sragen" />
              </Picker>
            </View>
            <TouchableOpacity
              style={{marginTop: '15%', marginBottom: '10%'}}
              onPress={() => navigation.navigate('bottomTabs')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SELESAI</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/logo_distract.png')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  bgsquare: {
    width: '100%',
    height: '40%',
    backgroundColor: '#0E49B5',
    position: 'absolute',
  },
  teksPendaftaran: {
    color: 'white',
    fontSize: 48,
  },
  containerIsi: {
    marginTop: '13%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
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
  input: {
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputtext: {
    width: '70%',
    marginLeft: '5%',
  },
  button: {
    backgroundColor: '#0E49B5',
    width: '80%',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF8CD',
    fontSize: 20,
    textAlign: 'center',
  },
  punyaAkun: {
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  container5: {
    width: 120,
    height: 120,
    backgroundColor: '#E4E3E3',
    borderRadius: 120 / 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    justifyContent: 'center',
    position: 'absolute',
    top: '12%',
  },
  teksKet: {
    fontSize: 20,
  },
});

export default registerDaerah;
