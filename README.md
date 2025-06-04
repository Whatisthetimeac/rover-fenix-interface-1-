# Rover Fênix - Interface Web

🌱 Interface moderna para o controle e monitoramento do **Rover Fênix**, desenvolvido pela equipe **Myths Brazil** da UFF, para a competição **CIRC 2025**.

---

## 🔥 Visão Geral

Este projeto é uma interface web responsiva em modo noturno, com suporte para:

- Modo **AUTÔNOMO** (padrão)
- Modo **MANUAL** (com botões de direção)
- Monitoramento de sensores como:
  - KY-032 (distância frontal)
  - MPU6050 (inclinômetro)
  - Hall Sensor (rotação de rodas)
  - SW-420 / KY-020 (vibração/impacto)
  - Temperatura e umidade
  - Luz ambiente

---

## 🚀 Como usar

### 📁 1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/rover-fenix-interface.git
cd rover-fenix-interface
```

### 🌐 2. Abrir a interface no navegador

Abra o arquivo `index.html` diretamente no seu navegador.

---

## 📡 Integração com Raspberry Pi

A interface está pronta para se comunicar com um servidor Flask rodando no Raspberry Pi 5. Os dados dos sensores e comandos de movimento são enviados via HTTP para:

```
http://<IP-DA-RASPBERRY>:5000
```

Você pode alterar o IP diretamente no arquivo `script.js`.

---

## 📸 Captura de tela

![preview](https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif)

---

## 👨‍🚀 Sobre o projeto

Desenvolvido como parte da preparação para a competição [CIRC 2025](https://circ.cstag.ca/) no Canadá 🇨🇦, onde a equipe **Myths Brazil** operará o rover em cenários desafiadores e realistas simulando Marte.

---

## 📄 Licença

Este projeto é livre para uso acadêmico e educacional. Para usos comerciais, entre em contato com a equipe responsável.

> Feito com 💚 por Myths Brazil - UFF
