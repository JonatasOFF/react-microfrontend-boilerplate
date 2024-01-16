import { api } from './api';

export const refreshTokenFn = async () => {
  if (localStorage.getItem('session') === null) return;

  const session = JSON.parse(localStorage.getItem('session')!);

  await api
    .post('/user/refresh', {
      refreshToken: session?.refreshToken,
    })
    .then(({ data }) => {
      if (!data) return;
    });

  try {
    if (!session?.accessToken) {
      localStorage.removeItem('session');
      localStorage.removeItem('user');
    }

    localStorage.setItem('session', JSON.stringify(session));

    return session;
  } catch (error) {
    localStorage.removeItem('session');
    localStorage.removeItem('user');
  }
};

