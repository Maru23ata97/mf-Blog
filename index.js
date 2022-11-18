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
      description: 'Le monde du web est très vaste, car plusieurs langages est utilisées mais qui est complémentaire. HTML est le squelette, CSS est la peau, le muscle represente JavaScript',
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
    },
    {
      title: 'Le langage du HTML, CSS, JavaSccript',
      description: "A la découverte des fonctionnalités des trois langages... j'ai ",
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
    },
    {
      title: 'La création template',
      description: 'Découuverte et création template.... ',
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
    },
    {
      title: 'Création du PortFolio',
      description: 'La création du Portfolio est ...',
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
    },
    {
      title: '',
      description: 'Donne moi',
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
    },
    {
      title: 'Retourne moi',
      description: 'Donne moi',
      image:
        'https://www.photo-paysage.com/albums/userpics/10001/thumb_Les_rayons_du_soleil_a_travers_les_feuillages_dans_la_foret.JPG',
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
