import { useRouter } from 'next/router';

import { RouteType } from 'types/route';

export const useGetPathname = () => {
  const { pathname } = useRouter();

  return pathname as RouteType;
};
