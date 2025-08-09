const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
]

export const getPosts = () => posts // Criando uma função que nos retorna cada objeto do array "posts" (usamos o export para permitir que nós exportemos para onde quisermos)

export const getPostsLenght = () => posts.length

export default getPosts