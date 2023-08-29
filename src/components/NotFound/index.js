import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-con">
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          className="not-found-img"
          alt="not found"
        />
      </div>
      <h className="heading">Page Not Found</h>
      <p className="para">
        we are sorry, the page you requested could not be found{' '}
      </p>
    </div>
  </>
)

export default NotFound
