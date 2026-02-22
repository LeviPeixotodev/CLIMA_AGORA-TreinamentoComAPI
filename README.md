# 🌤️ Clima Agora!

Aplicação web para consultar o clima de qualquer cidade em tempo real, com background dinâmico baseado na cidade pesquisada.

> **Projeto pessoal em estágio MVP.** As chaves de API estão expostas intencionalmente — estou ciente dos riscos, sei utilizar `.gitignore` para protegê-las, mas optei por não fazê-lo neste projeto para simplificar o acesso e por conta do site nao possuir um backend para um .env.

## Funcionalidades

- Temperatura atual, descrição do clima, umidade e velocidade do vento
- Bandeira do país da cidade buscada
- Background dinâmico com fotos da cidade via Unsplash
- Interface responsiva e moderna

##  Tecnologias

- HTML5, CSS3, JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/api) — dados de clima
- [Unsplash API](https://unsplash.com/developers) — fotos de background
- [Flags API](https://flagsapi.com/) — bandeiras dos países

---

## Como usar

### Opção 1 — Acessar pelo GitHub Pages

Acesse direto pelo navegador, sem precisar instalar nada:

🔗 **[seu-usuario.github.io/seu-repositorio](https://seu-usuario.github.io/seu-repositorio)**

### Opção 2 — Rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Renomeie `js/config.example.js` para `js/config.js` e adicione suas próprias chaves de API (nao utilize as minhas por gentileza)
3. Abra o `index.html` no navegador (ou use Live Server no VS Code)



## 📁 Estrutura

```
clima-agora/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── script.js
    └── config.js
```