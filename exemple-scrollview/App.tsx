import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, StyleSheet } from 'react-native';

interface ChatItem {
  id: string;
  name: string;
  mensagem: string;
  time: string;
  perfil: string;
  alertaMensagem?: number;
}

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  
  const chats: ChatItem[] = [
    {
      id: '1',
      name: 'pedro advogado',
      mensagem: 'Ola, tem um minuto?',
      time: '10:30 AM',
      perfil: 'https://randomuser.me/api/portraits/men/1.jpg',
      alertaMensagem: 2,
    },
    {
      id: '2',
      name: 'Emanuele chefe',
      mensagem: 'A reuinao e as 3 horas da tarde ok?',
      time: '12:18 PM',
      perfil: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: '3',
      name: 'Fatima santos',
      mensagem: 'Vem aqui no setor de RH, a impressora quebrou.',
      time: '18 PM',
      perfil: 'https://randomuser.me/api/portraits/thumb/women/17.jpg',
    },

    {
      id: '4',
      name: 'Carlao da TI',
      mensagem: 'O cs2 da muito bugado mano',
      time: '03:22 AM',
      perfil: 'https://randomuser.me/api/portraits/thumb/men/16.jpg',
    },

    {
      id: '5',
      name: 'tia mariuda',
      mensagem: 'E as namoradinhas?',
      time: 'Online',
      perfil: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
    },

  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <ScrollView style={styles.scrollView}>
        {filteredChats.map(chat => (
          <View key={chat.id} style={styles.chatItem}>
            <Image source={{ uri: chat.perfil }} style={styles.perfil} />
            <View style={styles.chatContent}>
              <Text style={styles.name}>{chat.name}</Text>
              <Text style={styles.mensagem}>{chat.mensagem}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{chat.time}</Text>
              {chat.alertaMensagem && (
                <View style={styles.mensagemNaoLida}>
                  <Text style={styles.textoNaoLido}>{chat.alertaMensagem}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  scrollView: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagem: {
    color: 'gray',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  mensagemNaoLida: {
    backgroundColor: '#25D366',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  textoNaoLido: {
    color: 'white',
    fontSize: 12,
  },
});

export default App;