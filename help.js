function starth(){
    const speed = require('performance-now');
    const gplink = "https://chat.whatsapp.com/GuS9NThAyFw6aXsjQfHcco"
    const melink = "https://wa.me/553898456180"
    const cjlink = `http://api.whatsapp.com/send?phone=994402148484&text=.help`
    const botlink = `https://api.whatsapp.com/send?phone=17192245473&text=.menu`
    const loglink = `http://api.whatsapp.com/send?phone=14099086308&text=.help`
    const hrnlink = `ttps://api.whatsapp.com/send?phone=5511986937027&text=.menu`
    const boelink = `https://api.whatsapp.com/send?phone=12702787538&text=.menu`
    var timestamp = speed();
    var vel = speed() - timestamp
  
  const help = (prefix) => {
      return`╔═════════════════════════
             ║        LOG BOT'S 
             ╠═════════════════════════
  
    
  GRUPO OFC
     
  
  *_ENTRE NO GRUPO OFICIAL DO BOT_*:
  
  ${gplink}
  ou
  https://chat.whatsapp.com/GuS9NThAyFw6aXsjQfHcco
  
  *_SE QUISER SABER MAIS, ENVIE O COMANDO ${prefix}gp_*
  
         
  INFO
         
  
  ➭ Prefixo:  _*「${prefix} 」*_
  
  ➭ Status: _*「 Online 」*_
  
  ➭Tempo de Resposta do bot:
  _*「${vel.toFixed(4)} Segundos :)」*_
  
  
  ➭ Comando : *${prefix}doar*
  ➭ útil em : envia as informações para vc doar para ajudar no desenvolvimento do bot 
  ➭ uso : basta enviar o comando 
      
  *Número do criador: wa.me/553898456180*
  
  
           
  FIGURINHAS
           
        
  ➭ Comando : *${prefix}fig* ou *${prefix}figurinha*
  ➭ útil em : converter imagem/gif/vídeo em adesivo
  ➭ uso : responder imagem/gif/video ou enviar imagem/gif/video com legenda
  ➭ Nota : Video/gif de até 10s
  
  ➭ Comando : *${prefix}txtfig*
  ➭ útil em : converter texto em adesivo
  ➭ uso : ${prefix}txtfig + texto q vc quiser
  ➭ Nota : Não faz com textos especiais
  
  ➭ Comando : *${prefix}toimg*
  ➭ útil em : converter adesivo em imagem
  ➭ uso : adesivo de resposta
  
         
  GRUPOS
        
  
  ➭ Comando : *${prefix}gp ou ${prefix}grupo*
  ➭ útil em : Convida você ao grupo oficial do bot
  ➭ uso : *basta enviar o comando*
  
  ➭ Comando : *${prefix}soadm*
  ➭ útil em : fechar ou abrir o grupo
  ➭ uso : envie o comando ( ${prefix}soadm) com 1 ou 0 no final. ex: ${prefix}soadm 1
  ➭ Nota : Você precisa ser admin e o bot também
    
  ➭ Comando : *${prefix}linkgroup*
  ➭ útil em : enviar o link do grupo
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}marcaradm*
  ➭ útil em : Marca os adms do grupo
  ➭ uso : *basta enviar o comando*
  ➭ Nota : Use somente se for nescessário, vai tomar ban bobão
  
  ➭ Comando : *${prefix}marcar*
  ➭ útil em : marcar todos os membros do grupo, incluindo administradores
  ➭ uso : basta enviar o comando
  ➭ Nota : Você precisa ser administrador do grupo
  
  ➭ Comando : *${prefix}welcome*
  ➭ útil em : ativar o modo de boas vindas no grupo
  ➭ uso : *${prefix}welcome 1* para ativar o modo de boas vindas e *${prefix}welcome 0* para desativar o modo de boas vindas
  ➭ Nota : Você precisa ser administrador do grupo
  
  ➭ Comando : *${prefix}add*
  ➭ útil em : adicionar membro ao grupo
  ➭ uso : *${prefix}add 55(ddd)xxxx-xxxx*
  ➭ Nota : o bot precisa ser admin!
  
  ➭ Comando : *${prefix}kick*
  ➭ útil em : remover membros do grupo
  ➭ uso : *${prefix}kick e o @da pessoa*
  ➭ Nota : Você precisa ser admin e o bot também
  
  ➭ Comando : *${prefix}promote*
  ➭ útil em : tornar membro do grupo um administrador
  ➭ uso : *${prefix}promote e o @da pessoa*
  ➭ Nota : Você precisa ser admin e o bot também
  
  ➭ Comando : *${prefix}demote*
  ➭ útil em : tornar o administrador um membro comum
  ➭ uso : *${prefix}demote e o @da pessoa*
  ➭ Nota : Você precisa ser admin e o bot também
  
         
  DOWNLOADER
        
         
  ➭ Comando : *${prefix}ytvideo* [_*OFF*_]
  ➭ útil em : Baixar videos do youtube
  ➭ uso : *${prefix}ytvideo + url do video*
  
  ➭ Comando : *${prefix}ytmsc*
  ➭ útil em : Baixar videos do youtube no formato mp3 (musica)
  ➭ uso : *${prefix}ytmsc + nome da musica ou url*
  
  ➭ Comando : *${prefix}tomp3*
  ➭ útil em : Trasforma videos em mp3 (musica)
  ➭ uso : comando em resposta a um video
  
        
  AUDIO
     
  
  ➭ Comando : *${prefix}audio*
  ➭ útil em : Trasforma texto em áudio
  ➭ uso : ${prefix}audio + codigo de idioma + texto
  ➭ Exemplo: ${prefix}audio pt Chollo o brabo
  
  ➭ Comando : *${prefix}est* ou *${prefix}estourar
  ➭ útil em : Estourar o audio marcado
  ➭ uso : ${prefix}est marcando o audio q deseja estourar
  
           
  DIVERSÃO
        
          
  ➭ Comando : *${prefix}dado*
  ➭ útil em : Envia um número aleatorio de dado
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}quão*
  ➭ útil em : Diz o quão algo vc é
  ➭ uso : ${prefix}quão (palavra que deseja comparar)
  ➭ Exemplo: ${prefix}quão hetero
  
  ➭ Comando : *${prefix}gay*
  ➭ útil em : Diz o quão gay parece
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}roleta ou ${prefix}rl*
  ➭ útil em : Falar se vc morre ou sobrevive em um jogo de roleta russa
  ➭ uso : Basta enviar o comando
          
  ➭ Comando : *${prefix}sn*
  ➭ útil em : Responder perguntas de sim ou não
  ➭ uso : ${prefix}sn + pergunta que deseja fazer
  ➭ Exemplo: ${prefix}sn BOT é o brabo?
  
  ➭ Comando : *${prefix}lista*
  ➭ útil em : Listar os mais gados do grupo
  ➭ uso : basta enviar o comando 
          
        
  OUTROS
          
        
  ➭ Comando : *${prefix}doar*
  ➭ útil em : Doar quantias em dinheiro para ajudar o desenvolvimento do BOT
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}bug*
  ➭ útil em : Envia report de bugs ao proprietário do bot
  ➭ uso : ${prefix}bug "Seu report aqui" 
   
  ➭ Comando : *${prefix}outros*
  ➭ útil em : Envia o número dos meus companheiros 
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}loli1*
  ➭ útil em : 😳
  ➭ uso : basta enviar o comando 
  
  ➭ Comando : *${prefix}del*
  ➭ útil em : Deleta a mensagem enviada somente pelo bot
  ➭ uso : Mensagem que deseja apagar em resposta
  
  ➭ Comando : *${prefix}tab*
  ➭ útil em : Envia minha tabela para nomes
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}lofi*
  ➭ útil em : Envia a foto do lofi
  ➭ uso : basta enviar o comando 
  
  ➭ Comando : *${prefix}bomdia*
  ➭ útil em : Da bom dia
  ➭ uso : basta enviar o comando 
  
  ➭ Comando : *${prefix}boatarde*
  ➭ útil em : Da boa tarde 
  ➭ uso : basta enviar o comando 
  
  ➭ Comando : *${prefix}info*
  ➭ útil em : Exibir informações sobre o bot
  ➭ uso : basta enviar o comando 
    
  ➭ Comando : *${prefix}ping*
  ➭ útil em : Mostrar o tempo de resposta do bot
  ➭ uso : *basta enviar o comando*
  
  ➭ Comando : *${prefix}wame ou wa.me*
  ➭ útil em : Gerar um link whatsapp com seu número
  ➭ uso : basta enviar o comando 
  
  ➭ Comando : *${prefix}ctt*
  ➭ útil em : manda o contato do criador
  ➭ uso : basta enviar o comando
  
  ➭ Comando : *${prefix}ler*
  ➭ útil em : pegar o texto da foto e lhe enviar
  ➭ uso : responder imagem ou enviar mensagem com legenda
  
  ➭ Comando : *${prefix}creditos*
  ➭ útil em : Envia os creditos dos criadores
  ➭ uso : basta enviar o comando
  
  
  ╔════════════════════
    BY: LOG KKKK 
    eterno chollo!
    
    Estou off? Aqui vai o numero dos meus companheiros:
    
    𝐶𝐽 𝐵𝑂𝑇:
    ${cjlink}
    𝐿𝑂𝐺 𝐵𝑂𝑇:
    ${loglink}
    𝒦𝒶𝓀𝓊𝓏𝓊𝕭𝖔𝕿 𝐵𝑂𝑇:
    ${boelink}
    НЯИ‽ 𝐵𝑂𝑇:
    ${hrnlink}
    
    Para ver todos envie ${prefix}outros
    
  ╚════════════════════`
  }
  
  exports.help = help
  
  }
  starth()