# App de Carrinho de Compras - React Native

Este projeto é um aplicativo de carrinho de compras desenvolvido em React Native com Expo, integrado ao Firebase para gerenciamento de produtos.

## 🚀 Funcionalidades Implementadas

### ✅ Sistema de Carrinho Completo
- **Exibição do carrinho**: Interface visual completa mostrando todos os itens adicionados
- **Controles de quantidade**: Botões para aumentar (+) e diminuir (-) a quantidade de itens
- **Remoção de itens**: Botão para remover itens completamente do carrinho
- **Cálculo automático**: Total individual por item e total geral do carrinho
- **Estado vazio**: Mensagem amigável quando o carrinho está vazio

### 🎨 Interface do Usuário
- **Design moderno**: Cards com sombras, bordas arredondadas e layout responsivo
- **Imagens dos produtos**: Exibição das imagens dos itens no carrinho
- **Informações detalhadas**: Nome, preço unitário e total por item
- **Navegação intuitiva**: Ícone do carrinho no header com contador de itens

### 🔧 Funcionalidades Técnicas
- **Gerenciamento de estado**: Estado do carrinho centralizado no App.js
- **Funções assíncronas**: Carregamento correto de produtos do Firebase
- **Tratamento de erros**: Validação e tratamento de erros na adição de itens
- **Performance**: Uso de FlatList para renderização eficiente de listas

## 📱 Estrutura do Projeto

```
src/
├── components/
│   ├── CartIcon.js          # Ícone do carrinho no header
│   ├── Product.js           # Componente de produto
│   └── ProductAdvanced.js   # Componente avançado de produto
├── screens/
│   ├── Cart.js              # Tela principal do carrinho (IMPLEMENTADA)
│   ├── ProductDetails.js    # Detalhes do produto
│   └── ProductList.js       # Lista de produtos
└── services/
    ├── firebase.js          # Configuração do Firebase
    ├── numberFormat.js      # Formatação de números
    └── productsService.js   # Serviços de produtos
```

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento
- **Firebase** - Backend para produtos e dados
- **React Navigation** - Navegação entre telas
- **JavaScript ES6+** - Linguagem de programação

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Configurar Firebase**:
   - Configure suas credenciais do Firebase no arquivo `src/services/firebase.js`

3. **Executar o projeto**:
   ```bash
   npm start
   ```

4. **Testar no dispositivo**:
   - Use o Expo Go no seu smartphone
   - Escaneie o QR code gerado

## 📋 Funcionalidades da Tela do Carrinho

### Interface Visual
- **Lista de itens**: Exibição em cards com informações completas
- **Controles intuitivos**: Botões grandes e fáceis de usar
- **Feedback visual**: Cores e estilos que indicam ações disponíveis
- **Layout responsivo**: Adapta-se a diferentes tamanhos de tela

### Operações Disponíveis
1. **Adicionar quantidade**: Botão "+" para aumentar a quantidade
2. **Diminuir quantidade**: Botão "-" para reduzir a quantidade
3. **Remover item**: Botão de lixeira para remover completamente
4. **Visualizar total**: Cálculo automático e exibição do total geral

### Estados da Tela
- **Carrinho com itens**: Lista completa com controles
- **Carrinho vazio**: Mensagem amigável incentivando adicionar produtos

## 🔄 Fluxo de Funcionamento

1. **Adicionar produto**: Usuário adiciona produto na tela de detalhes
2. **Navegar para carrinho**: Toca no ícone do carrinho no header
3. **Gerenciar itens**: Usa os controles para ajustar quantidades
4. **Visualizar total**: Acompanha o valor total em tempo real

## 📝 Commits Realizados

O projeto foi desenvolvido com commits incrementais seguindo boas práticas:

1. **Estrutura inicial**: Base do projeto com navegação
2. **Funções do carrinho**: Implementação das funções de gerenciamento
3. **Interface completa**: Tela do carrinho com todos os controles
4. **Correções**: Melhorias na função assíncrona de adicionar itens

## 🎯 Próximos Passos Sugeridos

- [ ] Implementar persistência local do carrinho
- [ ] Adicionar animações nas transições
- [ ] Implementar checkout/finalização da compra
- [ ] Adicionar validações de estoque
- [ ] Implementar sistema de favoritos

## 📞 Suporte

Para dúvidas ou sugestões sobre este projeto, consulte a documentação do React Native e Expo, ou entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ usando React Native e Expo**
