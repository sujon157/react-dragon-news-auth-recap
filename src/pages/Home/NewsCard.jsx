
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const { title, image_url, details,_id } = news;

  return (
    <div className="card  bg-base-100 shadow-xl mb-16">
      <figure><img className='w-full' src={image_url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {
            details.length > 200 ?
              <p>{details.slice(0, 200)} <Link 
               className='text-blue-600 font-bold'
              to={`/news/${_id}`}
              >Read More....</Link> </p>
              : <p>{details}</p>
          }
        </p>

      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.node
};

export default NewsCard;