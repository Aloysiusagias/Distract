import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import {set} from 'react-native-reanimated';

const registerDaerah = () => {
  let {width, height} = Dimensions.get('window');
  const [province, setProvince] = useState();
  const [kabupaten, setKabupaten] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [listProv, setProv] = useState({});
  const [listKab, setKab] = useState({});
  const [listKec, setKec] = useState({});
  const navigation = useNavigation();
  const [isReadyAPI, setReadyAPI] = useState(false);
  const [lengkap, setLengkap] = useState(false);
  height = height - height * 0.035;

  useEffect(() => {
    getProvinsi();
  }, []);

  const getProvinsi = () => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi', {})
      .then(function (response) {
        // console.log('Res : ', response.data.provinsi);
        var data = response.data.provinsi;
        data.unshift({
          id: 0,
          nama: 'Pilih Provinsi',
        });
        setProv(data);
        setReadyAPI(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getKab = (item) => {
    setReadyAPI(false);
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/kota', {
        params: {
          id_provinsi: item,
        },
      })
      .then(function (response) {
        // console.log('Res : ', response.data.kota_kabupaten);
        setKab(response.data.kota_kabupaten);
        setReadyAPI(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getKec = (item) => {
    setReadyAPI(false);
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan', {
        params: {
          id_kota: item,
        },
      })
      .then(function (response) {
        // console.log('Res : ', response.data.kecamatan);
        setKec(response.data.kecamatan);
        setReadyAPI(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChangeProvince = (index) => {
    if (index == 0) {
      alert('Pilih provinsi');
    } else {
      let id_provinsi = listProv[index].id;
      getKab(id_provinsi);
    }
  };

  const handleChangeKabupaten = (index) => {
    let id_kabupaten = listKab[index].id;
    getKec(id_kabupaten);
  };

  const checking = () => {
    if (lengkap == true) navigation.navigate('bottomTabs');
    else alert('data tidak lengkap');
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
              <Text style={styles.teksKet}>Provinsi</Text>
              {/* PICKER PROVINSI */}
              <Picker
                selectedValue={province}
                onValueChange={(item, index) =>
                  handleChangeProvince(index) + setProvince(item)
                }
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                {isReadyAPI && listProv.length > 0 ? (
                  listProv.map((data) => {
                    return (
                      <Picker.Item
                        label={data.nama}
                        value={data.id}
                        key={data.id}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Picker>
            </View>
            <View style={[styles.input, {marginVertical: '5%'}]}>
              <Text style={styles.teksKet}>Kabupaten</Text>
              {/* PICKER KABUPATEN */}
              <Picker
                selectedValue={listKab.length > 0 ? kabupaten : 'Kabupaten'}
                onValueChange={(item, index) =>
                  setKabupaten(item) + handleChangeKabupaten(index)
                }
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                {isReadyAPI && listKab.length > 0 ? (
                  listKab.map((data) => {
                    return (
                      <Picker.Item
                        label={data.nama}
                        value={data.id}
                        key={data.id}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Picker>
            </View>
            <View style={styles.input}>
              <Text style={styles.teksKet}>Kecamatan</Text>
              {/* PICKER KECAMATAN */}
              <Picker
                selectedValue={listKec.length > 0 ? kecamatan : 'Kabupaten'}
                onValueChange={(item, index) =>
                  setKecamatan(item) + setLengkap(true)
                }
                style={styles.inputtext}
                itemStyle={{fontSize: 20}}>
                {isReadyAPI && listKec.length > 0 ? (
                  listKec.map((data) => {
                    return (
                      <Picker.Item
                        label={data.nama}
                        value={data.id}
                        key={data.id}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Picker>
            </View>
            <TouchableOpacity
              style={{marginTop: '15%', marginBottom: '10%'}}
              // onPress={() => checking()}
              onPress={() => navigation.navigate('bottomTabs')}
              >
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
      <Modal visible={!isReadyAPI} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}
          opacity={0.5}>
          <ActivityIndicator animating={true} size="large" color="blue" />
        </View>
      </Modal>
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
  teksKet: {
    fontSize: 20,
  },
});

export default registerDaerah;
