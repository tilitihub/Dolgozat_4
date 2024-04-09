/*
* File: App.js
* Author: Tiliczki Tibor
* Copyright: 2024, Tiliczki Tibor
* Group: Szoft II-1-E
* Date: 2024-04-09
* Github: https://github.com/tilitihub/Dolgozat_4.git
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStudents } from './services/studentsService';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents()
      .then(data => {
        console.log(data)
        setStudents(data);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitleText}>Tanulók</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.studentsList}>
            <view style={styles.dataRow}>
              <Text style={styles.nameTitleText}>Név:</Text>
              <Text style={styles.nameText}> {item.name}</Text>
            </view>
            <view style={styles.dataRow}>
              <Text style={styles.dataTitleText}>Város:</Text>
              <Text style={styles.dataText}> {item.city},</Text>
            </view>
            <view style={styles.dataRow}>
              <Text style={styles.dataTitleText}>Szül.:</Text>
              <Text style={styles.dataText}> {item.birth}</Text>
            </view>
            <view style={styles.dataRow}>
              <Text style={styles.dataTitleText}>Csoport:</Text>
              <Text style={styles.dataText}> {item.groupId}</Text>
            </view>
          </View>
        )
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
    marginBottom: 5
  },
  studentsList: {
    border: '2px solid blue',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: 'lightblue',
  },
  nameTitleText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nameText: {
    marginLeft: 5,
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dataTitleText: {
    color: 'blue',
    fontSize: 12,
    marginStart: 3,
  },
  dataText: {
    marginLeft: 5,
    color: 'red',
    fontSize: 12,
    marginStart: 3,
  },
  dataRow: {
    display: 'flex',
    flexDirection: 'row'
  }
});