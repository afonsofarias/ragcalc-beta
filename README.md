# Simulador de Dano bRO
Simulador de Dano para o jogo Ragnarok Online disponível em
https://bululo.github.io/ragcalc-beta/

## Estrutura do Projeto
```
ragcalc-beta/
├── data/              # Equipamentos
│   ├── equips/            # Equipamentos do Alt+Q
│   │   └── ...
│   ├── cards.js              # Cartas
│   ├── consumables.js        # Consumíveis
│   ├── costume_enchants.js   # Encantamentos Visuais
│   ├── enchants.js           # Encantamentos
│   └── shadows.js            # Equipamentos Sombrios
├── scripts/
│   ├── core/              # Lógica central e cálculos
│   │   ├── constants.js
│   │   ├── dmg_calculation.js
│   │   ├── jobstatbonus.js  # Bônus de Atributo por Classe
│   │   ├── monsters.js      # Monstros
│   │   ├── skills.js        # Habilidades
│   │   ├── stat.js
│   │   └── state.js
│   ├── ui/                # Manipulação e atualização da UI
│   │   ├── uiUpdater.js
│   │   └── ...
│   └── app.js             # Ponto de entrada principal
├── skill-tree/        # Árvores de Habilidade de cada Classe
│   └── ...
├── index.html
└── ...                # Demais arquivos necessários
```