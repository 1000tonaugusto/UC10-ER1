import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Carrinho } from 'src/app/models/carrinho';
import { ProdutoService } from 'src/app/services/produto.service';
import { AppformularioComponent } from '../appformulario/appformulario.component';

@Component({
  selector: 'app-compra-item',
  templateUrl: './compra-item.component.html',
  styleUrls: ['./compra-item.component.css']
})

export class CompraItemComponent implements OnInit {

  carrinho: Carrinho = {
    id: '',
    nome: '',
    urlImagem: '',
    preco: '',
    quantidade: ''
  }
  

  constructor(private carrinhoService: CarrinhoService,
              private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
    this.renderizar()
    //this.carregaForm()

  }

  criarCarrinho(): void {
      let varNome = document.getElementById("tituloItem")!.textContent
      let varPreco = document.getElementById("preco")!.textContent
      let varUrlImagem = document.getElementById("urlImagem")!.textContent
      this.carrinho.nome = varNome!;
      this.carrinho.preco = varPreco!;
      this.carrinho.urlImagem = varUrlImagem!;
      this.carrinho.quantidade = "1"!;
      this.carrinhoService.adicionarCarrinho(this.carrinho).subscribe(() =>
      this.carrinhoService.mostraMensagem('Item adicionado ao carrinho!'))
  }

  renderizar() {

    let listaProdutos = [
        {
            idProduto: '1',
            nome: "ASSASSIN’S CREED VALHALLA",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/assassins_creed.png",
            fabricante: "Ubisoft",
            descricao: "MISSÃO BÔNUS: A TRAJETÓRIA DO BÁRBARO Em Assassin?s Creed Valhalla, você é Eivor, um guerreiro viking temível que cresceu em meio a histórias de batalhas e glória. Explore um belo e dinâmico mundo aberto que tem como cenário a Idade das Trevas da Inglaterra. Ataque seus inimigos, amplie seu assentamento e consolide seu poder político na busca para ganhar um lugar entre os deuses de Valhalla."
        },
        {
            idProduto: '2',
            nome: "CONSOLE PLAYSTATION 5",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/playstation_5.png",
            fabricante: "Sony",
            descricao: "Jogar não tem Limites. Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para Console PlayStation®5 - PS5."
        },
        {
            idProduto: '3',
            nome: "NBA 2k21",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/nba2K2.png",
            fabricante: "2K",
            descricao: "O nba 2k21 é o novo jogo da renomada franquia de sucesso nba 2k, que traz uma experiência esportiva líder de mercado. Com os melhores gráficos e jogabilidade da categoria, funcionalidades online competitivas e da comunidade, e modos de jogos variados e aprofundados, o nba 2k21 oferece uma imersão sem igual no mundo e na cultura do basquete da nba."
        },
        {
            idProduto: '4',
            nome: "FIFA 22",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/fifa_22.png",
            fabricante: "EA",
            descricao: "Powered by Football, EA SPORTS FIFA 22 deixa o jogo ainda mais real com avanços fundamentais de jogabilidade e uma nova temporada de inovações em todos os modos."
        },
        {
            idProduto: '5',
            nome: "FORZA HORIZON 5",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/forza_horizon.png",
            fabricante: "Microsoft",
            descricao: "Com este jogo Forza, você desfrutará de horas de diversão e novos desafios que lhe permitirão melhorar como jogador."
        },
        {
            idProduto: '6',
            nome: "HOT WHEELS UNLEASHED",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/hot_wheels.png",
            fabricante: "Microsoft",
            descricao: "Demonstre suas habilidades em corridas incríveis e prepare-se para a mais pura diversão! Deslize nas curvas, carregue o impulsor e lance o seu veículo em loops espetaculares. Mas tenha cuidado! Se você não acelerar o bastante, a gravidade não vai perdoar."
        },
        {
            idProduto: '7',
            nome: "JOYSTICK XBOX ONE",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/joystick_xbox_one.png",
            fabricante: "Microsoft",
            descricao: "Experimente o design modernizado do Novo Controle Sem Fio - Robot White, com superfícies esculpidas e geometria refinada para maior conforto durante o jogo. Fique no alvo com o grip texturizado e um direcional híbrido. Capture e compartilhe conteúdo perfeitamente com um botão Compartilhar dedicado."
        },
        {
            idProduto: '8',
            nome: "MOUSE GAMER CORSAIR",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/mouse_gamer_corsair.png",
            fabricante: "Corsair",
            descricao: "Com um formato ergonômico confortável com garras laterais de borracha e pesando apenas 85 g, o HARPOON RGB PRO está pronto para horas intermináveis de jogos com o mínimo de esforço."
        },
        {
            idProduto: '9',
            nome: "NOTEBOOK ALIENWARE",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/notebook_alienware.png",
            fabricante: "Dell",
            descricao: "Para nós, o design é mais do que simples mecânica: é arte. A tecnologia de refrigeração Cryo-Tech™ da Alienware é uma abordagem de engenharia que não compromete o desempenho dos jogos por meio de métodos elétricos e mecânicos."
        },
        {
            idProduto: '10',
            nome: "RESIDENT EVIL 6",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/resident_evil_6.png",
            fabricante: "Capcom",
            descricao: "Resident Evil 6, chamado no Japão de Biohazard 6, é um videojogo do gênero ação jogado em terceira pessoa desenvolvido e publicado pela Capcom. Apesar do nome é o nono jogo da série principal Resident Evil e foi lançado em 2 de outubro de 2012 para PlayStation 3 e Xbox 360."
        },
        {
            idProduto: '11',
            nome: "GOD OF WAR",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/god_of_war.png",
            fabricante: "Sony",
            descricao: "O jogo God of War Hits é o relançamento do clássico jogo de ação e aventura ao estilo “hack and slash” exclusivo para Playstation 4. Nessa nova versão econômica, você saberá o que aconteceu com Kratos após a sua derradeira vingança contra os Deuses gregos no Monte Olimpo. O ex-guerreiro espartano, agora tem uma nova chance de começar a sua vida ao lado do novo filho, Atreus, no reino dos monstros e deuses nórdicos."
        },
        {
            idProduto: '12',
            nome: "THE DIVISION 2",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/the_division_2.png",
            fabricante: "Ubisoft",
            descricao: "O DESTINO DO MUNDO LIVRE ESTÁ EM JOGO EM TOM CLANCY’S THE DIVISION® 2. Lidere uma equipe de agentes de elite na Washington, DC pós-pandemia para restaurar a ordem e evitar o colapso da cidade. Tom Clancy’s The Division 2 é uma experiência de tiro/ação/RPG online, onde a exploração e o progresso do jogador são essenciais. Salve um país à beira do colapso e explore um mundo aberto, dinâmico e hostil em Washington, DC."
        },
        {
            idProduto: '13',
            nome: "FAR CRY 6",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/farcry6.png",
            fabricante: "Ubisoft",
            descricao: "Far Cry 6 é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Ubisoft Toronto e publicado pela Ubisoft. É o sexto título principal da série Far Cry e foi lançado em 7 de outubro de 2021 para Amazon Luna, Google Stadia, Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X/S."
        },
        {
            idProduto: '14',
            nome: "DYING LIGHT 2 STAY HUMAN",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/dying2.png",
            fabricante: "Ubisoft",
            descricao: "Dying Light 2 Stay Human é um jogo eletrônico de ação e survival horror com elementos de RPG desenvolvido pela Techland e publicado pela Techland Publishing."
        },
        {
            idProduto: '15',
            nome: "DEATHLOOP",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/deathloop.png",
            fabricante: "Arkane Studios",
            descricao: "Deathloop é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Arkane Studios e publicado pela Bethesda Softworks. Foi lançado para Microsoft Windows e PlayStation 5."
        },
        {
            idProduto: "16",
            nome: "HORIZON ZERO DAWN",
            preco: "R$ 999,99",
            urlImagem: "./assets/img/produtos/horizonzero-dawn.png",
            fabricante: "Guerrilla Games",
            descricao: "Horizon Zero Dawn é um jogo eletrônico de RPG de ação pós-apocalíptico em um mundo aberto, desenvolvido pela Guerrilla Games, apresentado em 2015 na conferencia da Sony na feira E3 e lançado em 28 de fevereiro de 2017 para o console PlayStation 4 e em 7 de agosto de 2020 para o sistema Microsoft Windows."
        },
    ]

    let quadroDescricao = document.getElementById("quadroDescricao")!
    let modeloDescricao = "";

    const urlParams = new URLSearchParams(window.location.search);
    // acessamos o valor que desejamos
    let myParam = urlParams.get("idProduto") as string;
    
        let produtoEncontrado = listaProdutos.find( produto => produto.idProduto == myParam)!;
        modeloDescricao += `<div class="d-flex align-items-center p-3 lg-3">
                            <div class="col-lg-2">
                            <img class="imagemProduto justify-content-center img-fluid rounded"
            src="${produtoEncontrado.urlImagem}" id="urlImagem">
        </div>
        <div class="col-lg-7">
            <h2 id="tituloItem">${produtoEncontrado.nome}</h2>
            <p class="textoItem">Fabricante:  ${produtoEncontrado.fabricante}</p>
            <p class="textoItem">${produtoEncontrado.descricao}</p>
        </div>
        <div class="col-lg-3">
            <h3 id="preco" class="text-center textoItem" [(ngModel)]="carrinho.preco">${produtoEncontrado.preco}</h3>
        </div>
 </div>`;
                         quadroDescricao.innerHTML = modeloDescricao;
    }
}
