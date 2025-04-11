import React, { useState } from 'react';
import { View, Text, SectionList, TextInput, Image, StyleSheet } from 'react-native';

interface ChatItem {
  id: string;
  name: string;
  mensagem: string;
  time: string;
  perfil: string;
  alertaMensagem?: number;
}

interface Section {
  title: string;
  data: ChatItem[];
}

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  
  const chats: Section[] = [
    {
      title: 'Pinned',
      data: [
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
          name: 'Carlao da TI',
          mensagem: 'O cs2 da muito bugado mano',
          time: '03:22 AM',
          perfil: 'https://randomuser.me/api/portraits/thumb/men/16.jpg',
        },
        {
          id: '4',
          name: 'Fatima santos',
          mensagem: 'Vem aqui no setor de RH, a impressora quebrou.',
          time: '13:24 PM',
          perfil: 'https://randomuser.me/api/portraits/thumb/women/17.jpg',
        },
        {
          id: '5',
          name: 'toin do churraco',
          mensagem: 'No mercado ta com uma promocao muito boa de carne.',
          time: '21:39 PM',
          perfil: 'https://randomuser.me/api/portraits/thumb/men/99.jpg',
        },
        {
          id: '6',
          name: 'Fatima santos',
          mensagem: 'Vem aqui no setor de RH, a impressora quebrou.',
          time: '18:03 PM',
          perfil: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
        },
        {
          id: '7',
          name: 'Bertolt vieira',
          mensagem: 'vc vai hoje?',
          time: '7:45 AM',
          perfil: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
        },
      ],
    },
    {
      title: 'Recent',
      data: [
        {
          id: '8',
          name: 'rafaela morais',
          mensagem: 'A consulta vai ser que dia?',
          time: '14:06 PM',
          perfil: 'https://randomuser.me/api/portraits/thumb/women/39.jpg',
        },
        {
          id: '9',
          name: 'tia mariuda',
          mensagem: 'E as namoradinhas?',
          time: 'Online',
          perfil: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
        },
      ],
  },
];

  const filteredChats = chats.map(section => ({
    title: section.title,
    data: section.data.filter(chat =>
      chat.name.toLowerCase().includes(searchText.toLowerCase())
    ),
  })).filter(section => section.data.length > 0);

  const renderItem = ({ item }: { item: ChatItem }) => (
    <View style={styles.chatItem}>
      <Image source={{ uri: item.perfil }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mensagem}>{item.mensagem}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.alertaMensagem && (
          <View style={styles.mensagemNaoLida}>
            <Text style={styles.textoNaoLido}>{item.alertaMensagem}</Text>
          </View>
        )}
      </View>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <SectionList
        sections={filteredChats}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
        style={styles.list}
        stickySectionHeadersEnabled={false}
      />
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
  list: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    color: 'gray',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
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