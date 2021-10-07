import { supabase } from '@lib/supabase';
import { PostType } from 'types/post';

export const useGetPosts = () => {
  const requestFetchPosts = async () => {
    const { data, error } = await supabase.from<PostType[]>('posts').select();
  };
};
