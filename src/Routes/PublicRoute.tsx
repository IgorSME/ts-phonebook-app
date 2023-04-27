import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/selectors';

interface IProps{
  children: React.ReactElement<any, any> | null,
  restricted?:boolean
}

export const PublicRoute:React.FC<IProps> = ({ children, restricted = false })=> {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;

  return (
    <>
      {shoudRedirect ? <Navigate to={'/contacts'} replace={true} /> : children}
    </>
  );
}
