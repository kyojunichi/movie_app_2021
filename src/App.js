function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/800029.jpeg',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://asset.oceans-nadia.com/upload/save_image/b7/b75a64b548feb52a2b6dfef1198299be.jpg?impolicy=cropwm&w=500&h=500',
    rating: 4.3,
  },
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
