import { db } from '../firebase'

export const fetchPosts = async () => {
  try {
    const posts = [];
    await db.collection('posts').get().then(snap => {
      snap.forEach(doc => {
        const data = doc.data()
        data.id = doc.ref.id
        posts.push(data)
      })
    })

    return { payload: posts }
  } catch(e) {
    return { error: e.message }
  }
}