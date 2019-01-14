import Cookies from 'js-cookie';

const GetCSRFToken = () => {
    return Cookies.get('csrftoken');
};

export default GetCSRFToken;
