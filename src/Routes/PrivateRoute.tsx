import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/selectors';

interface IProps{
  children: React.ReactElement<any,any> |null
}

export const PrivateRoute:React.FC<IProps> =({ children }) =>{
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={'/register'} />;
}
