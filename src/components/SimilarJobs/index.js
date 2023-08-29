import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-li-con">
      <div className="img-job-title-con">
        <img
          className="company-job-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />

        <div className="title-job-rating-con">
          <h className="title-job-heading">{title}</h>
          <div className="star-job-rating-con">
            <AiFillStar className="star-job-icon" />
            <p className="rating-job-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="sec-part-job-con">
        <h className="des-job-heading">Description</h>
        <p className="des-job-para">{jobDescription}</p>
      </div>
      <div className="location-job-details-con">
        <div className="location-icon-con">
          <MdLocationOn className="location-job-icon" />
          <p className="location-job">{location}</p>
        </div>
        <div className="employment-job-type-con">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
