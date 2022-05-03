var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Usted cargó esta página el ' + new Date().toLocaleString()
  }
})

// Loop (v-if)
var api = new Vue({
      el: '#apex',
      data: {
        isHidden: false
      }
    })

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Construir algo increíble' }
    ]
  }
})

// Loop (v-for)
var Datos=new Vue({
  el: '#Juegos',
  data: {
    object: {
      title: 'Paladins',
      author: 'Mario Bros',
      publishedAt: 'Juegos Retro'
    }
  }
})
//Input  (v-on:click)
var Instrumentos= new Vue({
  el: '#Instrum',
  methods: {
    di: function (mensaje) {
      alert(mensaje)
    }
  }
})

//User Input (v-model)
var Youtube=new Vue({
  el: '#yt',
  data: {
    selected: 'Seleccióna main',
    options: [
			{ text: 'Religion', value: 'La voz de Jesús, Ascencion, Padre Adolfo' },
      { text: 'Musica', value: 'Luis Miguel' },
      { text: 'Noticias', value: 'TldrNews, Philip DeFranco' },
      { text: 'Politica', value: 'TldrNews' },
			{ text: 'Reseñas', value: 'Caja de Peliculas, Dayoscript, LevelUp' },
			{ text: 'Tech', value: 'Linus, NateGentile' },
			{ text: 'Cocina', value: 'Adam Raguesa' }
    ]
  }
})

//User Input (v-model)
var Instrumentos= new Vue({
  el: '#Instrum',
  methods: {
    di: function (mensaje) {
      alert(mensaje)
    }
  }
})




var Perdi = new Vue({
  el: '#per',
  data: {
    Perdi_el_tiempo: 'si'
  },
  computed: {
    Triste: function () {
      return this.Perdi_el_tiempo + ' ' +'Perdi el tiempo'+ ' Que triste';
    }
  }
})

var aumento = new Vue({
  el: '#Mond',
  data: {
    counter: 2,
		counter2: 1
  }
})
/*
Falle = new Vue({
  el: '#F',
  data: {
    posts: [
      { a: 1, title: 'Falle' },
      { a: 2, title: 'en todas' },
      { a: 3, title: 'mis actividades' }
    ]
  }
}) */

var dificultad = new Vue({
  el: '#dif',
   data: {
    message: 'Seleccióna dificultad',
		difi:'Normal'
  },
  computed: {
     Dificult: function () {
      // `this` apunta a la instancia vm
    if (this.difi =='Normal') {
   return 'Escudos al 80%; Norwood 2 al 3, no se requiere tanto medicamento quizas minoxidil';
} else {
   if (this.difi =='Heroica') {
 return 'Escudos al 50%; Norwood 3 vertrex, 4 o 5 leve, requieres minoxidil y quizas finasterida, considera implantes de cabellos';
} else {
   if (this.difi =='Legendaria') {
   return 'Escudos; al 15% Norwood 5 al 7, sera necesario cirujia además del los medicamentos, quizas debas resignarte y raparte la cabellera';
} else {
   if (this.difi =='Facil') {
   return 'Escudos al 100%; Norwood 1 al 2, no se requiere nada, eres un jovenazo';
					}
				}
			}
		}
			 return message;
  }
}})



lDOM = new Vue({
	el: '#ldom',
	data(){
		return{
		message:'no se que es DOM'}
	},
  methods:{
		pressed(){
			let text = this.$refs.app.message;
			alert(text + 'from $refs');
		}
	}
})
