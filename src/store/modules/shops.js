import Vue from 'vue'
// initial state
// shape: [{ id, photos, likes, dislikes, name, link_one, link_two, link_three, rating, user, categories, vote_status }]
function calcRating (likes, dislikes) {
  const ups = likes
  const n = ups + dislikes
  let rating
  if (n === 0) {
    rating = 0
  } else {
    const z = 1.281551565545
    const p = ups / n

    const left = p + 1 / (2 * n) * z ** 2
    const right = z * Math.sqrt(p * (1 - p) / n + z ** 2 / (4 * n ** 2))
    const under = 1 + 1 / n * z ** 2
    rating = Math.round((left - right) / under * 100)
  }
  return rating
}

const state = {
  shops: []
}

// getters
const getters = {
  allShops: state => state.shops,
  sortedShops (state) {
    return [...state.shops].sort((a, b) => b.rating - a.rating)
  }
}

// mutations
const mutations = {
  appendShops (state, payload) {
    state.shops.push(...payload)
  },
  setVotes (state, payload) {
    let shop = state.shops.find(item => payload.id === item.id)
    shop.likes = payload.likes
    shop.dislikes = payload.dislikes
    shop.vote_status = payload.voteStatus
    if ('rating' in payload) {
      shop.rating = payload.rating
    }
  },
  calcRating (state, payload) {
    let shop = state.shops.find(item => payload === item.id)
    shop.rating = calcRating(shop.likes, shop.dislikes)
  }
}

// actions
const actions = {
  loadShops (context) {
    Vue.axios.get('api/shops/?format=json').then((response) => {
      Vue.$storage.set('shops', response.data)
      context.commit('appendShops', response.data)
    }, () => {
      // this.shops = JSON.parse('[{"id":2,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image7.jpg"}],"likes":0,"dislikes":0,"name":"Pizza Store","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":10,"user":1,"categories":[3],"vote_status":0},{"id":3,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image10.jpg"}],"likes":0,"dislikes":0,"name":"Adidas","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/nanisday/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[5,7],"vote_status":0},{"id":4,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image12.jpg"}],"likes":0,"dislikes":0,"name":"RR Cars","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[2,3],"vote_status":0},{"id":5,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image14.jpg"}],"likes":0,"dislikes":0,"name":"Thrasher Store","link_one":"https://vk.com/dadoem","link_two":"","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0},{"id":6,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image8.jpg"}],"likes":0,"dislikes":0,"name":"Watch Store","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[2,3,6],"vote_status":0},{"id":7,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image11.jpg"}],"likes":0,"dislikes":0,"name":"Nike","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[1,3,5,6,7],"vote_status":0},{"id":8,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image13.jpg"},{"url":"/media/shops-images/2018/01/13/Gucci-shop.jpg"}],"likes":0,"dislikes":0,"name":"Gucci","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[1,6],"vote_status":0},{"id":9,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image15.jpg"}],"likes":0,"dislikes":0,"name":"Red&Red","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0}]')
      context.commit('appendShops', Vue.$storage.get('shops'))
    })
  },
  moreShops (context) {
    Vue.axios.get('api/shops/?format=json').then(response => {
      Vue.$storage.set('shops', Vue.$storage.get('shops').push(...response.data))
      context.commit('appendShops', response.data)
    }, response => {
    })
  },
  like (context, shop) {
    let likes = shop.likes
    let dislikes = shop.dislikes
    let voteStatus = shop.vote_status || 0

    if (voteStatus === +1) {
      likes -= 1
      voteStatus = 0
    } else if (voteStatus === 0) {
      likes += 1
      voteStatus = 1
    } else if (voteStatus === -1) {
      dislikes -= 1
      likes += 1
      voteStatus = 1
    }

    context.commit('setVotes', {
      id: shop.id,
      likes: likes,
      dislikes: dislikes,
      voteStatus: voteStatus
    })

    context.commit('calcRating', shop.id)

    Vue.axios.post('api/votes/', {shop: shop.id, action: true}).then((response) => {
      context.commit('setVotes', {
        id: shop.id,
        likes: response.likes,
        dislikes: response.dislikes,
        rating: response.rating,
        vote_status: response.vote_status
      })
    }, (response) => {
    })
  },
  dislike (context, shop) {
    let likes = shop.likes
    let dislikes = shop.dislikes
    let voteStatus = shop.vote_status || 0

    if (voteStatus === -1) {
      dislikes -= 1
      voteStatus = 0
    } else if (voteStatus === 0) {
      dislikes += 1
      voteStatus = -1
    } else if (voteStatus === +1) {
      likes -= 1
      dislikes += 1
      voteStatus = -1
    }

    context.commit('setVotes', {
      id: shop.id,
      likes: likes,
      dislikes: dislikes,
      voteStatus: voteStatus
    })

    context.commit('calcRating', shop.id)

    Vue.axios.post('api/votes/', {shop: shop.id, action: false}).then((response) => {
      context.commit('setVotes', {
        id: shop.id,
        likes: response.likes,
        dislikes: response.dislikes,
        rating: response.rating,
        vote_status: response.vote_status
      })
    }, (response) => {
    })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
