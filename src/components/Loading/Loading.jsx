import totoroGif from '../../assets/images/Totoro.gif';
import './Loading.css';

export const Loading = () => {
    return (
        
        <div className="loading-container">
            <div className="text-center">
                <img src={totoroGif} alt="loading" className="img-fluid loading-img" />
                <p className="text-success fs-4 fw-bold">LOADING...</p>
            </div>
        </div>
    );
};

export default Loading;
