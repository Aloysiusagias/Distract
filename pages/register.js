import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const register = () => {
  const [nama, setNama] = useState();
  const [pass, setPass] = useState();
  const [phone, setPhone] = useState();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.035;
  const navigation = useNavigation();

  const checking = () => {
    if (nama == null || nama == '') {
      alert('Nama tidak boleh kosong');
    } else if (phone == null || phone == '') {
      alert('No hp tidak boleh kosong');
    } else if (pass == null || pass == '') {
      alert('Password tidak boleh kosong');
    } else {
      var nama2 = nama;
      var nomor2 = phone;
      var pass2 = pass;
      var Data = {
        Nama: nama2,
        Nomor: nomor2,
        Pass: pass2,
      };

      navigation.navigate('registerDaerah', Data);
    }
  };

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
              <Image source={require('../assets/person_outline.png')} />
              <TextInput
                placeholder="Nama"
                style={styles.inputtext}
                underlineColorAndroid="black"
                onChangeText={(item) => setNama(item)}
              />
            </View>
            <View style={[styles.input, {marginVertical: '5%'}]}>
              <Image source={require('../assets/call.png')} />
              <TextInput
                placeholder="Nomor Telepon"
                style={styles.inputtext}
                underlineColorAndroid="black"
                keyboardType="phone-pad"
                onChangeText={(item) => setPhone(item)}
              />
            </View>
            <View style={styles.input}>
              <Image source={require('../assets/vpn_key.png')} />
              <TextInput
                placeholder="Password"
                style={styles.inputtext}
                underlineColorAndroid="black"
                secureTextEntry={true}
                onChangeText={(item) => setPass(item)}
              />
            </View>
            <TouchableOpacity
              style={{marginTop: '15%', marginBottom: '10%'}}
              // onPress={() => navigation.navigate('registerDaerah')}
              onPress={() => checking()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>DAFTAR</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.punyaAkun}>
              Sudah punya akun?{' '}
              <Text
                style={{color: '#4D5BAA'}}
                onPress={() => navigation.navigate('login')}>
                Masuk
              </Text>
            </Text>
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
    backgroundColor: '#E4E3E3',
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputtext: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#0E49B5',
    width: '80%',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
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
});

export default register;
