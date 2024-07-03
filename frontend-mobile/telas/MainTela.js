import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const MainTela = (props) => {
  return (
    <View style={estilos.container}>
      
      <View style={estilos.cabecalho}>
        <Image source={require('../assets/logo-604x679.png')} style={estilos.logo}/>
        <Text style={estilos.titulo}>Gerador de Avaliações</Text>
      </View>
      
      <View style={estilos.descritivo}>

        <Text>
          Apresentamos a nova ferramenta para educadores: o Gerador de
          Avaliações, uma aplicação desenhada para transformar a maneira como os
          professores preparam testes e provas.
        </Text>

        
        <Text>
          Com uma interface amigável e recursos automatizados, nossa plataforma
          permite aos educadores criar avaliações personalizadas rapidamente,
          abrangendo uma ampla gama de disciplinas e níveis escolares. Não
          importa se você precisa de um teste rápido de matemática ou uma
          avaliação complexa de história, o Gerador de Avaliações oferece
          templates adaptáveis que garantem a qualidade e relevância dos
          conteúdos, otimizando o tempo e melhorando o desempenho dos alunos.
        </Text>

      </View>

    </View>
  )
}

const estilos = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },

  cabecalho: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 20
  },

  logo: {
    resizeMode: 'stretch',
    height: 100,
    width: 100
  },

  descritivo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }

});
 

export default MainTela;