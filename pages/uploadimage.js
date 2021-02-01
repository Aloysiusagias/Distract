import React, {useState, useEffect} from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyle} from 'assets';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {Header, Texts, Icon} from 'components';
import styles from './styles';
import moment from 'moment';
import Reinput from '../../components/reinput';
import Datepicker from '../../components/Datepicker';
const InputSapi = (props) => {
  const {navigation} = props;
  const [totalImage, setTotalImage] = useState(0);
  const [image, setImage] = useState([]);
  const [btnPress, setBtnPress] = useState(true);
  const [dataSapi, setDataSapi] = useState([
    {name: 'harga', data: ''},
    {name: 'bobot', data: ''},
    {name: 'jenis', data: ''},
    {name: 'lokasi', data: ''},
    {name: 'totalImage', data: ''},
    {name: 'tinggi', data: ''},
    {name: 'usia', data: ''},
    {name: 'warna', data: ''},
    {name: 'kawin', data: ''},
    {name: 'melahirkan', data: ''},
    {name: 'token', data: '2020R4udh4hF4rmAPIsapi'},
  ]);

  const [update, setUpdate] = useState('');

  useEffect(() => {}, [dataSapi]);

  function datepickKawin(data) {
    let value =
      data.mode == 'date'
        ? moment(data.value).format('DD-MM-YYYY')
        : data.value.getHours() + ':' + data.value.getMinutes();
    insertData(8, value);
    setUpdate(value);
    //console.log(value);
  }

  function datepickLahir(data) {
    let value =
      data.mode == 'date'
        ? moment(data.value).format('DD-MM-YYYY')
        : data.value.getHours() + ':' + data.value.getMinutes();
    insertData(9, value);
    setUpdate(value);
    // console.log(value);
  }

  const selectImage = () => {
    //alert('clicked');
    const options = {
      title: 'Plih Gambar',
      takePhotoButtonTitle: 'Melalui Camera',
      chooseFromLibraryButtonTitle: 'Melalui Galeri',
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        //let source = {uri: response.uri};
        var imageFile = 'image' + (totalImage + 1);
        var imageName = 'image' + (totalImage + 1) + '.png';

        var newDataSapi = Object.assign(dataSapi);
        var total = totalImage + 1;
        newDataSapi[4].data = total.toString();
        setDataSapi(newDataSapi);

        var newDataSapi = dataSapi.slice();
        newDataSapi.push({
          name: imageFile,
          filename: imageName,
          data: response.data,
        });

        setDataSapi(newDataSapi);
        var dataImage = image.slice();
        dataImage.push({
          uri: response.uri,
        });
        setImage(dataImage);
        setTotalImage(totalImage + 1);
      }
    });
  };

  const uploadData = () => {
    setBtnPress(false);
    if (
      dataSapi[0].data != '' &&
      dataSapi[1].data != '' &&
      dataSapi[2].data != '' &&
      dataSapi[3].data != '' &&
      dataSapi[4].data != '' &&
      dataSapi[5].data != '' &&
      dataSapi[6].data != '' &&
      dataSapi[7].data != '' &&
      dataSapi[8].data != ''
    ) {
      RNFetchBlob.fetch(
        'POST',
        'http://markasdigital.my.id/Raudhah-Farm/api/sapi-create',
        {
          'Content-Type': 'multipart/form-data',
        },
        dataSapi,
      ).then((res) => {
        //     console.log(res.data);
        if (res.data == 'Success') {
          alert('Tambah Data Sapi Berhasil');
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
          setBtnPress(true);
        } else {
          alert('Tambah Data Sapi Gagal');
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
          setBtnPress(true);
        }
      });
    } else {
      alert('Data Harus Lengkap');
      setBtnPress(true);
    }
  };

  const addData = () => {
    var newDataSapi = dataSapi.slice();
    newDataSapi.push({name: 'image', data: '123.png'});
    setDataSapi(newDataSapi);
  };

  const insertData = (index, data) => {
    var newDataSapi = Object.assign(dataSapi);
    newDataSapi[index].data = data;
    setDataSapi(newDataSapi);
    setUpdate('insert');
  };

  const imageList = () => {
    return image.map((data, i) => {
      return (
        <View key={i}>
          <Image
            source={data}
            resizeMode="contain"
            style={{width: wp('30'), height: wp('30'), marginHorizontal: 5}}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.wrapper}>
      <Header
        back
        color={globalStyle.color.main}
        title="Tambah Data Sapi"
        backTo={() => navigation.goBack()}
      />
      <View style={[styles.sectionTop]} />
      <View style={[styles.sectionMain]}>
        <ScrollView style={{paddingHorizontal: wp('10=')}}>
          <Reinput
            label="Harga"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            keyboardType="numeric"
            onChangeText={(text) => insertData(0, text)}
          />
          <Reinput
            label="Jenis"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            onChangeText={(text) => insertData(2, text)}
          />
          <Reinput
            label="Bobot (kg)"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            keyboardType="numeric"
            onChangeText={(text) => insertData(1, text)}
          />
          <Reinput
            label="Tinggi (cm)"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            keyboardType="numeric"
            onChangeText={(text) => insertData(5, text)}
          />
          <Reinput
            label="Usia"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            onChangeText={(text) => insertData(6, text)}
          />
          <Reinput
            label="Warna"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-2.8%')}
            onChangeText={(text) => insertData(7, text)}
          />
          <Datepicker
            placeholder="Terakhir Kawin"
            mode="date"
            confirm={(data) => datepickKawin(data)}
            value={dataSapi[8].data}
            marginBottom={hp('2%')}
            editable={true}
          />
          <Datepicker
            placeholder="Terakhir Melahirkan"
            mode="date"
            confirm={(data) => datepickLahir(data)}
            value={dataSapi[9].data}
            marginBottom={hp('2%')}
            editable={true}
          />
          <Reinput
            label="Lokasi"
            height={10}
            underlineActiveColor={globalStyle.color.main}
            labelActiveColor={globalStyle.color.main}
            marginBottom={hp('-3%')}
            onChangeText={(text) => insertData(3, text)}
          />

          <Texts
            text="Foto"
            size={image == '' ? 15 : 12}
            color="grey"
            mrL={2}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                width: 35,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4%',
              }}
              onPress={() => selectImage()}>
              <Icon name="plus" type="feather" color="grey" size={30} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={{paddingBottom: 10}}>
            {imageList()}
          </ScrollView>

          {btnPress ? (
            <TouchableOpacity
              style={{
                backgroundColor: globalStyle.color.main,
                marginTop: '8%',
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => uploadData()}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                TAMBAH
              </Text>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator
              animating={true}
              size="small"
              color={globalStyle.color.main}
            />
          )}
          <View style={{marginBottom: '10%'}} />
        </ScrollView>
      </View>
    </View>
  );
};

export default InputSapi;
