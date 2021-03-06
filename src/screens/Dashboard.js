import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import NavHeader from '../components/header';
import ContentCards from '../components/cards';
import { Font } from 'expo';
import Products from '../components/products';
import Sales from '../components/sales';
import New from '../components/new'
import { renderer } from 'react-test-renderer';

export default class Dashboard extends Component {
  //checking state for if font is loaded or not.
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    //Setting the state to true when font is loaded.
    this.setState({ fontLoaded: true });
}
    renderSelectedTab () {
      switch (this.state.selectedTab) {
        case 'products':
          return (<Products />);
          break;
        case 'sales':
          return (<Sales />);
          break;
        case 'new':
          return (<New />);
          break;
        case 'settings':
          return (<Products />);
          break;
        default:
        return (<Products />)
      }
    }

  render() {
    return (
      
            <Container>
          {
            this.state.fontLoaded ? (
            <Container>
            <StatusBar
              barStyle="light-content"
            />
            
                <Header style={styles.header}>
                  <Title style={styles.title}>Dashboard</Title>
                </Header>
                <Content>
                  {this.renderSelectedTab()}
                </Content>
              <Footer>
                <FooterTab style={styles.footer}>
                  <Button active={this.state.selectedTab==='products'} 
                    onPress={() => this.setState({selectedTab: 'products'})}>
                    <Text>All products</Text>
                  </Button>                                                                                                                                                                                                    
                  <Button active={this.state.selectedTab==='sales'} 
                    onPress={() => this.setState({selectedTab: 'sales'})}>
                    <Text>sales</Text>
                  </Button>
                  <Button active={this.state.selectedTab==='new'} 
                    onPress={() => this.setState({selectedTab: 'new'})}>
                    <Text>New Product</Text>
                  </Button>
                  <Button active={this.state.selectedTab==='settings'} 
                    onPress={() => this.setState({selectedTab: 'settings'})}>
                    <Text>Settings</Text> 
                  </Button>
                </FooterTab>
              </Footer> 
            </Container>
            ) : null
                    }   
            </Container>
            

        )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    backgroundColor: '#5D4037',
    height: 60,
  },
  title: {
    marginTop: 15,
    width: 180,
    textAlign: 'center',
    fontSize: 40,
  },
  footer: {
    backgroundColor: '#5D4037',
  },
  cont: {
    height: 20
  },
  button: {
    backgroundColor: '#A1887F'
  }
})