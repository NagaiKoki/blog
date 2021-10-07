import camelcaseKeys from 'camelcase-keys';
import { supabase } from '@lib/supabase';
import { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { TableName } from './Table';

type FetchGetType<T> = {
  tableName: TableName;
  options?: {
    order?: {
      column: keyof T;
      ascending: boolean;
    };
  };
};

type ErrorType = {
  code: string;
  message: string;
};

// 一旦ベースはこれで。オプションは追加していく。
export const fetchGet = async <T, U>({
  tableName,
  options
}: FetchGetType<T>): Promise<{ data: U[]; error: ErrorType }> => {
  let query: PostgrestFilterBuilder<T> = supabase.from<T>(tableName).select();
  if (!!options && !!options.order)
    query = query.order(options.order.column, {
      ascending: options.order.ascending
    });

  const { data, error } = await query;
  const camelizedData = camelcaseKeys(data) as U[];

  return {
    data: camelizedData,
    error: error
  };
};
