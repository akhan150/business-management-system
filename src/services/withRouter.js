import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
//react-router-dom went from useHistory to useNavigate, wrap export function with this as it will redirect to specified url
//react-router-dom useParams allow to fetch the dynamic portion of the url
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const searchParams = useSearchParams();
    return (
      <Component
        navigate={navigate}
        {...props}
        // {...props}
        params = {params}
        searchParams = {searchParams}
        />
    );
  };
  
  return Wrapper;
};