<h3 align="center">
  <img src="https://imgur.com/a/QXzh6qt" alt="Logo" height="85"/>
</h3>

# 💙 Harmonicamente
<p> Harmonicamente é mais do que um simples website ou blog; é um espaço dedicado a conscientizar as pessoas sobre a importância do cuidado com a saúde mental, explorando o fascinante mundo da musicoterapia de maneira descontraída e animada! Aqui, mergulhamos nas notas e ritmos que podem transformar vidas, proporcionando insights valiosos sobre como a música pode ser uma aliada poderosa para o bem-estar emocional.</p>

##  🖥️Site Institucional
<p>O site institucional da GrapeTec oferece informações sobre nossa expertise em monitoramento de temperatura para vinícolas. Descubra quem somos, como funciona nossa tecnologia, faça orçamentos, cadastre-se e acesse sua conta. </p>
<img  src="https://i.imgur.com/xiHH0qd.png"/>
<img  src="https://i.imgur.com/sittusF.png"/>
<img  src="https://i.imgur.com/PEPcEJs.png"/>
<img  src="https://i.imgur.com/DwDKEiZ.png"/>
<img  src="https://i.imgur.com/LmCLdd8.png"/>
<img src="https://i.imgur.com/7RuV6HM.png" />

## 📊 Dashboard
<p>
Na GrapeTec, disponibilizamos um dashboard que permite aos funcionários das vinícolas gerenciar as condições de temperatura em seus armazéns. Essa ferramenta intuitiva oferece controle em tempo real sobre o ambiente de armazenamento, garantindo a preservação da qualidade dos vinhos de forma conveniente e eficaz.
</p>
<img  src="https://i.imgur.com/DOuvgyT.png" />

## 🔢 Calculadora Orçamental
<p>Em nosso site, apresentamos uma calculadora de orçamento especial desenvolvida em JavaScript. Essa ferramenta foi criada com o propósito de mostrar aos interessados o impacto de nossa solução. Ela revela quanto estão perdendo sem o nosso monitoramento de temperatura e, ao mesmo tempo, demonstra o quanto poderiam economizar com a implementação da GrapeTec. É uma maneira prática de entender o valor real que nossa tecnologia pode agregar ao mundo dos vinhos.</p>

~~~javascript
function calcular () {
    var armazenamento = Number(litrosArmazenados.value)
    var lucro = Number(lucroAnual.value)
    var litrosVendidos = armazenamento * 0.75
    var lucroMaximo = armazenamento * lucro/litrosVendidos
    var perdaVinho = armazenamento * 0.25
    var perdaDinheiro = lucroMaximo - lucro
    var reduzirPerda = perdaVinho * 0.6
    var reduzirPerdaDinheiro = reduzirPerda*perdaDinheiro/perdaVinho

    exibirPerda.innerHTML =
    `
    <p>Conforme foi informado a quantidade de vinho que a sua empresa armazena é de ${armazenamento} litros, e o seu lucro anual
     é de R$${lucro}. <br><br> A média de perda de vinho causada por falta de controle de temperatura é de cerda de 25%, o que
    para a sua empresa significa uma perda de aproximadamente ${perdaVinho} litros. Esses litros perdidos representam aproximadamente
    R$${Math.round(perdaDinheiro)}, por tanto seu lucro total poderia ser de R$${Math.round(lucroMaximo)}.<br><br> Com a nossa
    solução sua empresa pode reduzir em até 60% a suas perdas,o que representa aproximadamente ${reduzirPerda} litros ou em dinheiro
    cerca de R$${Math.round(reduzirPerdaDinheiro)}.</p>
    `
}
~~~
## 💾 Banco de Dados
Aqui na GrapeTec, utilizamos um banco de dados construído com o MySQL. Ele nos ajuda a armazenar e acessar informações de maneira segura e eficaz, o que significa que podemos oferecer um serviço confiável e de alta qualidade para nossos clientes no mundo do vinho.
<br>Consulte nossas tabelas [nesses repositorio.](https://github.com/1ADSA-GrapeTec/GrapeTec/tree/main/Banco%20de%20Dados)


## ⚙ Tecnologias utilizadas
  
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"  width="60"/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"  width="60"/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"  width="60"/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  width="60"/>

<hr/>

