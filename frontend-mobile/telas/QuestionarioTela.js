import React, { useState } from 'react'
import PickerSelect from "react-native-picker-select"
import { 
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View, ScrollView 
} from 'react-native'

const QuestionarioTela = (props) => {

  const [avoindingKey, setAvoindingKey] = useState(false)

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

  const [errorTema, setErrorTema] = useState(null)
  const [errorDiciplina, setErrorDiciplina] = useState(null)
  const [errorEscolaridade, setErrorEscolaridade] = useState(null)
  const [errorDificuldade, setErrorDificuldade] = useState(null)
  const [errorExemplo, setErrorExemplo] = useState(null)

  const validacao = async () => {

    let error = false
    
    if (formData.tema == ""){
      setErrorTema("Obrigatório preencher um tema")
      error = true
    } else {setErrorTema(null)}
    if (formData.diciplina == "" || formData.diciplina == "null"){
      setErrorDiciplina("Obrigatório escolher uma diciplina")
      error = true
    }  else {setErrorDiciplina(null)}
    if (formData.escolaridade == "" || formData.escolaridade == "null"){
      setErrorEscolaridade("Obrigatório escolher um nível de escolaridade")
      error = true
    }  else {setErrorEscolaridade(null)}
    if (formData.dificuldade == "" || formData.dificuldade == "null"){
      setErrorDificuldade("Obrigatório escolher um nível de dificuldade")
      error = true
    } else {setErrorDificuldade(null)}
    if (formData.exemplo == ""){
      setErrorExemplo("Obrigatório preencher um exemplo")
      error = true
    } else {setErrorExemplo(null)}


    // INSERE LOG NO BANCO DE DADOS
    if (error == false){

    /*
     
    await fetch("http://localhost:3000/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensagem: `${
          new Date(Date.now()).toUTCString() +
          " - " +
          formData.tema +
          " | " +
          formData.disciplina +
          " | " +
          formData.escolaridade +
          " | " +
          formData.dificuldade +
          " | " +
          formData.exemplo
        }`,
      }),
    });

    */

    console.log(formData)

    } else {

      console.log('Erro no formulário')

    }

  }

  return (
    
    <ScrollView>
    
      <KeyboardAvoidingView
      style={estilos.container}
      behavior='position'
      keyboardVerticalOffset={40}
      enabled={avoindingKey}
      >
        
        <View style={estilos.cabecalho}>
          <Text style={estilos.titulo}>Gerador de Avaliações</Text>
          <Text>
            Preencha os campos abaixo e veja como é possível elaborar uma avaliação
            em poucos instantes.
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={estilos.formulario}>
          
            <View style={estilos.card1}> 
              <Text style={estilos.label}>Tema</Text>
              <TextInput
                style={estilos.input}
                placeholder='Ex: Trigonometria'
                onPress={() => setAvoindingKey(false)}
                onChangeText={(text) => {
                  evento('tema', text)
                  setErrorTema(null)
                }}
              />
              {errorTema && <Text style={estilos.errorMessage}>{errorTema}</Text>}
            </View>
            
            <View style={estilos.card2}>
              <Text style={estilos.label}>Diciplina</Text>
              <PickerSelect
                style={estilos.select}
                placeholder={{ label: "Selecione...", value: null }}
                onValueChange={(text) => {
                  evento('diciplina', text)
                  setErrorDiciplina(null)
                }}
                items={[
                  { label: "Matemática", value: "Matemática" },
                  { label: "Português", value: "Português" },
                  { label: "História", value: "História" },
                  { label: "Ciências", value: "Ciências" },
                  { label: "Inglês", value: "Inglês" }
                ]}
              />
              {errorDiciplina && <Text style={estilos.errorMessage}>{errorDiciplina}</Text>}
            </View>

            <View style={estilos.card3}>
              <Text style={estilos.label}>Nível de Escolaridade</Text>
              <PickerSelect
                style={estilos.select}
                placeholder={{ label: "Selecione...", value: null }}
                onValueChange={(text) => {
                  evento('escolaridade', text)
                  setErrorEscolaridade(null)
                }}
                items={[
                  { label: "1º Ano Ensino Médio", value: "1º Ano Ensino Médio" },
                  { label: "2º Ano Ensino Médio", value: "2º Ano Ensino Médio" },
                  { label: "3º Ano Ensino Médio", value: "3º Ano Ensino Médio" }
                ]}
              />
              {errorEscolaridade && <Text style={estilos.errorMessage}>{errorEscolaridade}</Text>}
            </View>

            <View style={estilos.card4}>
              <Text style={estilos.label}>Dificuldade</Text>
              <PickerSelect
                style={estilos.select}
                placeholder={{ label: "Selecione...", value: null }}
                onValueChange={(text) => {
                  evento('dificuldade', text)
                  setErrorDificuldade(null)
                }}
                items={[
                  { label: "Fácil", value: "Fácil" },
                  { label: "Médio", value: "Médio" },
                  { label: "Difícil", value: "Difícil" },
                  { label: "Muito Difícil", value: "Muito Difícil" }
                ]}
              />
              {errorDificuldade && <Text style={estilos.errorMessage}>{errorDificuldade}</Text>}
            </View>

            <View style={estilos.card5}>
              <Text style={estilos.descricaoLabel}>Uma pergunta de exemplo é importante, 
                para que a AI consiga perceber qual direção você espera que ela siga.
              </Text>

              <Text style={estilos.label}>Insira uma pergunta de exemplo</Text>
              
              <TextInput
                style={estilos.descricao}
                multiline={true}
                onPress={() => setAvoindingKey(true)}
                onChangeText={(text) => {
                  evento('exemplo', text)
                  setErrorExemplo(null)
                }}
              />
              {errorExemplo && <Text style={estilos.errorMessage}>{errorExemplo}</Text>}
            </View>

          </View>

        </TouchableWithoutFeedback>
        
        <Pressable
        style={estilos.botao}
        onPress={validacao}
        >
          <Text style={estilos.botaoText}>Gerar Avaliação</Text>
        </Pressable>

      </KeyboardAvoidingView>

    </ScrollView>

  )
}


const estilos = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 20
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
  },
  errorMessage: {
    color: 'red'
  }

});

export default QuestionarioTela;