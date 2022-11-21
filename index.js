const card = (title, description, image) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src="${image}" class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>
        </div>
        <div class="card-text">
          <p>${description}</p>
        <a href="#" class="btn btn-outline-info rounded-0 float-end">Read More</a>
      </div>
    </div>
  </div>
`;

(async () => {
  const apiData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());
  console.log(apiData);
  const myData = [
    {
      title: 'Le monde du web',
      description:
        'Le monde du web est très vaste, car plusieurs langages sont utilisés. Afin de découvrir les différentes fonctionnalités de ces langages, nous avons pu naviguer au travers de leur fonctionnement…',
      image:
        'https://res.cloudinary.com/nmg-assets/image/upload/c_scale,f_auto,h_564,q_auto/v1/Img/FICHEPRATIQUE/2020/8/352240/Quelles-sont-veritables-utilites-API-dans-monde-numerique--LE.jpg',
    },
    {
      title: 'Le langage du HTML, CSS, JavaSccript',
      description:
        "À la découverte des fonctionnalités des trois langages... J'ai pu découvrir la complexité de créer une page web... Pour pouvoir comprendre ce que c'est le JavaScript, nous avons réalisé un cube avec deux boutons différents...",
      image:
        'https://kinsta.com/fr/wp-content/uploads/sites/4/2021/08/comment-devenir-un-developpeur-web-1024x512.jpeg',
    },
    {
      title: "Qu'est-ce qu'un Framework ? ",
      description:
        "Un framework est un ensemble d'outils et de composants logiciels organisés conformément à un plan d'architecture et des patterns, l'ensemble formant ou promouvant un squelette  de programme...",
      image:
        'https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/cover-template--5-.png',
    },
    {
      title: "Création d'un PortFolio grâce aux connaissances acquises",
      description:
        "Le Portfolio est un outil qui peut être un jour pourra remplacer le curriculum vitae. Les connaissances acquises lors de la réalisation d'un cube et du jeu morpion nous a permis d'acquérir des connaissances et des techniques afin de réaliser notre propre portfolio… ",
      image:
        'https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/greenThemeLight.png',
    },
    {
      title: "Qu'est-ce que le Jsonplaceholder",
      description:
        "La réalisation d'un blog est très complexe et nécessite de la donnée qu'on récupère sur le site Jsonplaceholder. Ce site propose de la donnée factice. Il est grandement compatible avec différents frameworks et bibliothèques JavaScript comme Backbone, AngularJS.... ",
      image: 'https://apilist.fun/images/social/api/jsonplaceholder.png',
    },
    {
      title: 'Impréssionnant ! Non ?',
      description:
        'Si en me posait la question "Est-il facile de créer un site internet ?" avant que je fasse la formation Moorea Code Camp.Ma réponse sera "Bien sûr que OUI !", grâce à cette formation,je peux répondre avec affirmation que créer un site internet n\'est pas facileJe suis fière d\'acquérir encore plus de connaissance dans ce domaine qui peut être un jour, je pourrais me reconvertir dans le domaine du Web developer.',
      image:
        'https://thumbs.dreamstime.com/b/vous-%C3%AAtes-impressionnant-sur-la-pierre-117350879.jpg',
    },
  ];

  let cardList = '';

  myData.forEach((post) => {
    console.log(post.title);
    document.getElementById('card-list').innerHTML += card(
      post.title,
      post.description,
      post.image
    );
  });
})();

(async () => {
  await fetch(
    'https://api.airtable.com/v0/appAmNmzTMmL6BigS/tblrQ3Zh0BTOvqLfE',
    {
      headers: {
        Authorization: 'Bearer key6fjkFBOYXl39BO',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
})();
