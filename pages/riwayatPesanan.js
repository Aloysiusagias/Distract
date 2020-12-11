import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

const initialLayout = {width: Dimensions.get('window').width};

const riwayatPesanan = () => {
  var navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Dikemas'},
    {key: 'second', title: 'Selesai Dikemas'},
    {key: 'third', title: 'Selesai'},
  ]);

  const FirstRoute = () => (
    <FlatList
      data={[...Array(3)]}
      keyExtractor={(item, index) => index + 'a'}
      renderItem={({item, index}) => {
        let nama;
        switch (index) {
          case 0:
            nama = 'Toko ini';
            break;
          case 1:
            nama = 'Toko itu';
            break;
          case 2:
            nama = 'Toko tersebut';
            break;
        }

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('statusPesanan')}>
            <View style={styles.items}>
              <Text style={{fontSize: 24, color: '#fff'}}>{nama}</Text>
              <Text style={{fontSize: 16, color: '#fff'}}>
                25 November 2020
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );

  const SecondRoute = () => (
    <FlatList
      data={[...Array(1)]}
      keyExtractor={(item, index) => index + 'a'}
      renderItem={({item, index}) => {
        let nama;
        switch (index) {
          case 0:
            nama = 'Toko Sinar Mas';
            break;
        }
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('statusPesanan')}>
            <View style={styles.items}>
              <Text style={{fontSize: 24, color: '#fff'}}>{nama}</Text>
              <Text style={{fontSize: 16, color: '#fff'}}>
                25 November 2020
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );

  const ThirdRoute = () => (
    <FlatList
      data={[...Array(2)]}
      keyExtractor={(item, index) => index + 'a'}
      renderItem={({item, index}) => {
        let nama;
        switch (index) {
          case 0:
            nama = 'TobangaDO';
            break;
          case 1:
            nama = 'Joko Store';
            break;
        }
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('statusPesanan')}>
            <View style={styles.items}>
              <Text style={{fontSize: 24, color: '#fff'}}>{nama}</Text>
              <Text style={{fontSize: 16, color: '#fff'}}>
                25 November 2020
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.bgsquare}>
        <View style={styles.bgIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.bagIcon}
          />
        </View>
        <Text style={styles.teksToko}>Riwayat Pesanan</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar {...props} labelStyle={{textAlign: 'center'}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    width: '100%',
    height: '100%',
  },
  bgsquare: {
    width: '100%',
    height: '40%',
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
  },
  bagIcon: {
    width: '100%',
    height: '100%',
  },
  teksToko: {
    fontSize: 40,
    color: 'white',
  },
  items: {
    width: Dimensions.get('window').width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
    margin: '2%',
    backgroundColor: '#3A72D9',
    borderRadius: 10,
  },
});

export default riwayatPesanan;
