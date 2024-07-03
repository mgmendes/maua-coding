import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import PickerSelect from "react-native-picker-select";

const QuestionarioTela = (props) => {

  const [formData, setFormData] = useState({
    tema: "",
    diciplina: "",
    escolaridade: "",
    dificuldade: "",
    exemplo: "",
  })

  const evento = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <View style={estilos.container}>

      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Gerador de Avaliações</Text>
        <Text>
          Preencha os campos abaixo e veja como é possível elaborar uma avaliação
          em poucos instantes.
        </Text>
      </View>
      
      <View style={estilos.formulario}>
        
        <View style={estilos.card1}>
          <Text style={estilos.label}>Tema</Text>
          <TextInput
            style={estilos.input}
            placeholder='Ex: Trigonometria'
            onChangeText={(text) => evento('tema', text)}
          />
        </View>
        
        <View style={estilos.card2}>
          <Text style={estilos.label}>Diciplina</Text>
          <PickerSelect
            style={estilos.select}
            placeholder={{ label: "Selecione...", value: null }}
            onValueChange={(text) => evento('diciplina', text)}
            items={[
              { label: "Matemática", value: "Matemática" },
              { label: "Português", value: "Português" },
              { label: "História", value: "História" },
              { label: "Ciências", value: "Ciências" },
              { label: "Inglês", value: "Inglês" }
            ]}
          />
        </View>

        <View style={estilos.card3}>
          <Text style={estilos.label}>Nível de Escolaridade</Text>
          <PickerSelect
            style={estilos.select}
            placeholder={{ label: "Selecione...", value: null }}
            onValueChange={(text) => evento('escolaridade', text)}
            items={[
              { label: "1º Ano Ensino Médio", value: "1º Ano Ensino Médio" },
              { label: "2º Ano Ensino Médio", value: "2º Ano Ensino Médio" },
              { label: "3º Ano Ensino Médio", value: "3º Ano Ensino Médio" }
            ]}
          />
        </View>

        <View style={estilos.card4}>
          <Text style={estilos.label}>Dificuldade</Text>
          <PickerSelect
            style={estilos.select}
            placeholder={{ label: "Selecione...", value: null }}
            onValueChange={(text) => evento('dificuldade', text)}
            items={[
              { label: "Fácil", value: "Fácil" },
              { label: "Médio", value: "Médio" },
              { label: "Difícil", value: "Difícil" },
              { label: "Muito Difícil", value: "Muito Difícil" }
            ]}
          />
        </View>

        <View>
          <Text style={estilos.descricaoLabel}>Uma pergunta de exemplo é importante, 
            para que a AI consiga perceber qual direção você espera que ela siga.
          </Text>

          <Text style={estilos.label}>Insira uma pergunta de exemplo</Text>
          
          <TextInput
            style={estilos.descricao}
            multiline={true}
            onChangeText={(text) => evento('exemplo', text)}
          />
        </View>

      </View>

      <Pressable
      style={estilos.botao}
      onPress={() => console.log(formData)}
      >
        <Text style={estilos.botaoText}>Gerar Avaliação</Text>
      </Pressable>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },

  cabecalho: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 20,
    gap: 20
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 20
  },

  formulario: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },

  label :{
    fontWeight: 'bold'
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white'
  },

  select: {
    inputIOS: {
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      backgroundColor: 'white'
    },
    inputAndroid: {
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      backgroundColor: 'white'
    }
  },

  descricaoLabel: {
    borderTopWidth: 1,
    borderColor: 'black',
    paddingTop: 10,
    marginBottom: 10
  },
  
  descricao: {
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white'
  },

  botao: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#242424',
    borderRadius: 10
  },
  botaoText: {
    color: 'white'
  }
});

export default QuestionarioTela;