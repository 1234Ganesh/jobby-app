import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCardItem = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = item
  return (
    <>
      <Link to={`/jobs/${id}`} className="link">
        <li className="job-item-con">
          <div className="first-part-con">
            <div className="img-title-con">
              <img
                className="company-logo"
                src={companyLogoUrl}
                alt="company logo"
              />
              <div className="title-rating-con">
                <h1 className="title-heading">{title}</h1>
                <div className="star-rating-con">
                  <AiFillStar className="start-icon" />
                  <p className="rating-text">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-con">
              <div className="location-job-type-con">
                <div className="location-icon-con">
                  <MdLocationOn className="location-icon" />
                  <p className="location">{location}</p>
                </div>
                <div className="employment-type-icon-con">
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
              <div>
                <p className="package">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="item-hr-line" />
          <div className="second-part-con">
            <h1 className="des-heading">Description</h1>
            <p className="des-para">{jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobCardItem
