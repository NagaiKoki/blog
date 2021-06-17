import { db } from '../firebase'

import { RequestPostType } from '../../types/post'

export const createPosts = async ({ title, content }: RequestPostType) => {
  try {
    await db.collection('posts').add({
      title,
      content,
      status: 1,
      createdAt: new Date,
      updatedAt: new Date
    })
  
    return { payload: 'success' }
  } catch(e) {
    return { error: e.message }
  }
}