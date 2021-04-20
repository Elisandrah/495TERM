import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableHighlight, ScrollView, TextInput, Switch } from 'react-native';
import { SearchableSectionList } from "react-native-searchable-list";
import { QuestionDetails } from './FAQData';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class FAQScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchAttribute: "question",
      ignoreCase: true
    };
  }

  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }

  render()
  { 
      const { searchTerm, searchAttribute, ignoreCase } = this.state;
      return (
        <View style={{ flex: 1 }}>
        <View style={styles.pageContainer}>
            <View style={styles.searchInputs}>
              <TextInput
                style={styles.search}
                placeholder={"Search for your question"}
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
            </View>
            <SearchableSectionList
              sections={QuestionDetails}
              style={styles.list}
              data={QuestionDetails}
              searchTerm={searchTerm}
              searchAttribute={searchAttribute}
              ignoreCase={ignoreCase}
              searchByTitle={false}
              renderSectionHeader={({ section: { title } }) => ( <Text style={{ fontWeight: "bold" }}>{title}</Text> )}
              renderItem={({ item }) => (
                <View style={{ margin: 20 }}>
                  <TouchableHighlight underlayColor="#FFFFFF" onPress={() =>
                    this.props.navigation.navigate('QuestionDetailsScreen', {question: item.question, answer: item.answer})}>
                    <View style={styles.button}>
                      <Text style=
                        {styles.buttonText}>
                        {item.question}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
              keyExtractor={item => item.id}
            />
        </View>
      </View>
    );
  }
}

//export default withNavigation(SearchableSymptoms);

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
    flex: 1
  },
  searchInputs: {
    flexDirection: "row"
  },
  search: {
    flex: 8,
    marginBottom: 20,
    borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 10,
    borderColor: "#f4cfce",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2
  },
  info: {
    padding: 10,
    marginTop: 20,
    borderColor: "#f4cfce",
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f4cfce"
  },
  row1: {
    flexDirection: "row"
  },
  prop: {
    flex: 1,
    padding: 10
  },
  val: {
    borderLeftWidth: 1,
    alignSelf: "center",
    flex: 2
  },
  button: {
    justifyContent: 'center',
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
});