import React from "react"
import { HeaderButtons, Item } from "../react-navigation-header-buttons"

const BotaoCabecalho = (props) => {
  return(
    <HeaderButtons headerButtonComponents={BotaoCabecalho}>
      <Item
        title="Início"
        onPress={() => {
          console.log("Chamou a Tela de Inicio")
        }}
      />
    </HeaderButtons>
  )
}

export default BotaoCabecalho