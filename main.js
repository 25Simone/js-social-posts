// definisco la variabile di collegamento all'html
const postsContainer = document.getElementById('container');

// definisco l'array di post
const postsList = [
    {
        id: 1,
        icon: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likeCounter: 80
    },

    {
        id: 2,
        icon: 'https://unsplash.it/300/300?image=15',
        author: "Simone D'Antonio",
        data: '6 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://images.unsplash.com/photo-1596887245124-5150ad2491e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        likeCounter: 100
    },

    {
        id: 3,
        icon: 'https://unsplash.it/300/300?image=15',
        author: 'Pinco Pallino',
        data: '6 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        image: 'https://images.unsplash.com/photo-1599009432364-3dc0d1932da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        likeCounter: 75
    },

    {
        id: 4,
        icon: 'https://unsplash.it/300/300?image=15',
        author: 'Gianni Morandi',
        data: '7 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        image: 'https://images.unsplash.com/photo-1598816530544-0b53f3a23f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        likeCounter: 85
    },

    {
        id: 5,
        icon: 'https://unsplash.it/300/300?image=15',
        author: 'Gino Lino',
        data: '8 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        image: '',
        likeCounter: 126
    },

    {
        id: 6,
        icon: 'https://unsplash.it/300/300?image=15',
        author: 'Pinco Pallino',
        data: '1 anno fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        image: 'https://images.unsplash.com/photo-1582979170542-0f3279405d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        likeCounter: 105
    },
];

// definisco la funzione per stampare i post
function addNewPost(container, object) {
    container.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${object.icon}" alt="${object.author}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${object.author}</div>
                        <div class="post-meta__time">${object.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${object.text}</div>
            <div class="post__image">
                <img src="${object.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${object.likeCounter}</b> persone
                    </div>
                </div> 
            </div>            
    </div>`;
}

for(let i = 0; i < postsList.length; i++){
    addNewPost(postsContainer, postsList[i]);
}