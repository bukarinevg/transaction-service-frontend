import { useQuery } from '@tanstack/react-query';
import API from '../api/axious';

const UserInfo = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await API.get('/users/view');
      return res.data;
    },
    refetchInterval: 60000, 
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки профиля</p>;

  const { name, email, balance } = data;

  return (
    <div className="rounded block w-full overflow-x-auto">
      <div className="flex items-center gap-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="mb-2">{email}</p>
      <div>RUB: {balance?.balance_rub ?? 0}</div>
      <div>USD: {balance?.balance_usd ?? 0}</div>
      <div>KZT: {balance?.balance_kzt ?? 0}</div>
      </div>
    </div>
  );
};

export default UserInfo;
